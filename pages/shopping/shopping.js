// pages/shopping/shopping.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [], //数据 
    isAllSelect: true,  //全部选择
    isAllComplete: false,  //全部选择
    totalMoney: 0, //价格
    Discoloration: 0,//变色
    Complete: false    //删除
  },
  edit:function (e) {   //编辑
   let Comp = !this.data.Complete;
    this.setData({
      Complete:Comp
    })
    if (!Comp) {
      this.Disco()
    }else{    //每次要删除的时候的是默认不选中的
      for (let i = 0; i < this.data.carts.length; i++) {
        this.data.carts[i].isComplete = false;
      }
      this.setData({
        carts: this.data.carts
      })
      this.deleteDisco()
    }
  },
  delCount: function (e) {
    var index = e.target.dataset.index;
    var count = this.data.carts[index].count; // 商品总数量-1
    if (count > 1) {
      this.data.carts[index].count--;
    }
    // 将数值与状态写回  
    this.setData({
      carts: this.data.carts
    });
    wx.setStorageSync('cart', this.data.carts)
    this.calculation();
  },
  /* 加数 */
  addCount: function (e) {
    var index = e.target.dataset.index;
    var count = this.data.carts[index].count; // 商品总数量+1  
    if (count < 10) {
      this.data.carts[index].count++;
    }
    // 将数值与状态写回  
    this.setData({
      carts: this.data.carts
    });
    wx.setStorageSync('cart', this.data.carts)
    this.calculation();
  },
  gotoindex: function () {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  switchSelect:function (e) {   //单选
    // 获取item项的id，和数组的下标值 
   var Index = e.currentTarget.dataset.index;
   this.data.carts[Index].isSelect = !this.data.carts[Index].isSelect;
    this.setData({      
      carts: this.data.carts,   
    })
    this.calculation();
    this.Disco();
  },
  // 全选
  allSelect: function (e){
    for (let i = 0; i < this.data.carts.length; i++) {
      this.data.carts[i].isSelect = !this.data.isAllSelect;
    }
    this.setData({      
      carts: this.data.carts, 
      isAllSelect: !this.data.isAllSelect,
    })
    this.calculation();
    this.Disco();
  },
  // 选中变色
  Disco:function () {
    let newcarList = this.data.carts.filter(item => {
      return item.isSelect == true;
    });
    if (newcarList.length == this.data.carts.length) {
      this.setData({
        isAllSelect: true,
        Discoloration:newcarList.length
      })
    }else{
      this.setData({
        isAllSelect: false,
        Discoloration:newcarList.length
      })
    }
  },
  // 计算价格
  calculation:function () {
    var totalMon = 0;
    for (let i = 0; i < this.data.carts.length; i++) {
      if (this.data.carts[i].isSelect) {
       totalMon += this.data.carts[i].count * this.data.carts[i].Price
      }
     }
     this.setData({      
      totalMoney:totalMon 
    })
  },
  //删除单选中
  AllComplete:function (e) {
    var Index = e.currentTarget.dataset.index;
    this.data.carts[Index].isComplete = !this.data.carts[Index].isComplete;
     this.setData({      
       carts: this.data.carts,   
     })
     this.deleteDisco()
  },
  // 删除_选中变色
  deleteDisco:function () {
    let newcarList = this.data.carts.filter(item => {
      return item.isComplete == true;
    });
    if (newcarList.length == this.data.carts.length) {    
      this.setData({
        isAllComplete: true,
        Discoloration:newcarList.length
      })
    }else{
      this.setData({
        isAllComplete: false,
        Discoloration:newcarList.length
      })
      }
    },
    AComplete:function () {   //删除的全部选择
      for (let i = 0; i < this.data.carts.length; i++) {
        this.data.carts[i].isComplete = !this.data.isAllComplete;
      }
      this.setData({      
        carts: this.data.carts, 
        isAllComplete: !this.data.isAllComplete,
      })
      this.deleteDisco();
    },
    del:function (e) {
      var that = this;
      wx.showModal({
        content: '确定要删除'+this.data.Discoloration+'个商品吗？',
        showCancel: true,//是否显示取消按钮
        cancelText: "我在想想",//默认是“取消”
        cancelColor: '#c3a769',//取消文字的颜色
        confirmText: "是",//默认是“确定”
        confirmColor: '#323233',//确定文字的颜色
        success: function (res) {
          if (res.cancel) {
            //点击取消,默认隐藏弹框
            console.log("点击取消,默认隐藏弹框");
          } else {
            //点击确定
            if (that.data.Discoloration == that.data.carts.length) {
              try {
                wx.removeStorageSync('cart')
              } catch (e) {
                console.log(e);
              }
              that.setData({
              carts: []
             })
             }else{
              let newcarList = that.data.carts.filter(item => {
                return item.isComplete == false;
              });
              that.setData({
                carts:newcarList
              })
              try {
                wx.setStorageSync('cart', newcarList);
              } catch (e) {
                console.log(e)
              }
             }
          }
        },
        fail: function (res) { },//接口调用失败的回调函数
        complete: function (res) { },//接口调用结束的回调函数（调用成功、失败都会执行）
      })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var arr = wx.getStorageSync('cart') || []; // 有数据的话，就遍历数据，计算总金额 和 总数量  
    if (arr.length > 0) {
      // 更新数据  
      let totalMon = 0;
      for (let i = 0; i < arr.length; i++) {
       let key = "isSelect";
       let value = true;
       let key1 = "isComplete";
       let value1 = false;
       arr[i][key] = value;
       arr[i][key1] = value1;
       if (arr[i].isSelect) {
        totalMon += arr[i].count * arr[i].Price
       }
      };
      this.setData({
        carts: arr,
        totalMoney:totalMon,
        Complete: false
      });
      
    }
    this.Disco();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})