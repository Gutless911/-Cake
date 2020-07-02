Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    innerText: Object,
    Pop: Boolean
  },
  data: {
    chooseSize: false,
    param: [],   //是否改变样式
    speci: [],    //选择好的规格
    Price: ''
  },
  methods: {
    onLoad: function () {
      console.log(this.data, '页面参数的值');
    },
    // 这里是一个自定义方法
    // 显示遮罩层
    showshadow: function (e) {
      // this.onLoad()
      if (this.data.chooseSize == false) {
        this.onLoad();
        this.chooseSezi()
      } else {
        this.hideModal()
      };
      //判断一下是否有最大的价格
      var MaxPrice = e.MaxPrice;
      if (MaxPrice == undefined) {
        var Pri = e.Price; //初始化时的默认价格
      } else {
        var Pri = e.Price + " - " + MaxPrice; //初始化时的默认价格
      }
      this.setData({
        Price: Pri,
        param: []
      })

    },
    // 动画函数
    chooseSezi: function (e) {
      // 用that取代this，防止不必要的情况发生
      var that = this;
      // 创建一个动画实例
      var animation = wx.createAnimation({
        // 动画持续时间
        duration: 400,
        // 定义动画效果，当前是匀速
        timingFunction: 'linear'
      })
      // 将该变量赋值给当前动画
      that.animation = animation
      // 先在y轴偏移，然后用step()完成一个动画
      animation.translateY(1000).step()
      // 用setData改变当前动画
      that.setData({
        // 通过export()方法导出数据
        animationData: animation.export(),
        // 改变view里面的Wx：if
        chooseSize: true
      })
      // 设置setTimeout来改变y轴偏移量，实现有感觉的滑动 滑动时间
      setTimeout(function () {
        animation.translateY(0).step()
        that.setData({
          animationData: animation.export(),
          clearcart: false
        })
      }, 100)
    },
    // 隐藏
    hideModal: function (e) {
      this.triggerEvent("hideModal")
      var that = this;
      var animation = wx.createAnimation({
        duration: 400,
        timingFunction: 'linear'
      })
      that.animation = animation
      animation.translateY(700).step()
      that.setData({
        animationData: animation.export()
      })
      setTimeout(function () {
        animation.translateY(0).step()
        that.setData({
          animationData: animation.export(),
          chooseSize: false
        })
      }, 400)
    },
    //加入购物车
    add: function (e) {
      if (this.data.innerText.detail.length == this.data.param.length) {  //判断是否已经选择好了规格
        let newcarList = this.data.speci.filter(item => {  //判断是否已经选择有取消的规格
          return item == "";
        });
        if (!newcarList.length == 0) {
          wx.showToast({
            title: '请选择完整规格',
            duration: 1000,
            icon: 'none',
          });
        } else {
          this.data.innerText.speci = this.data.speci; //将选择好的规格放入对象当中
          this.data.innerText.ChoicePrice = this.data.Price;    //与规格对应的价格
          this.setData({  //重新写入到对象当中
            innerText: this.data.innerText
          })
          var arr = wx.getStorageSync('cart') || [];
          if (arr.length > 0) {
            // 遍历购物车数组  
            for (var j in arr) {
              // 判断购物车内的item的id，和事件传递过来的id，是否相等 
              if (arr[j].id == this.data.innerText.id) {
                // 相等的话，给count+1（即再次添加入购物车，数量+1） 
                for (let i in this.data.innerText.speci) {//判断它们的规格是否相同
                  if (arr[j].speci[i] !== this.data.innerText.speci[i]) {
                    arr.push(this.data.innerText);    //只要有一个规格是不相同的我直接添加数组里面
                    try { // 最后，把购物车数据，存放入缓存
                      wx.setStorageSync('cart', arr);
                      this.hideModal()
                      wx.showToast({
                        title: '加入购物车成功！',
                        duration: 1000,
                        icon: 'none',
                      });
                    } catch (e) {
                      console.log(e)
                    }
                    return
                  }
                }
                arr[j].count = arr[j].count + this.data.innerText.count;
                // 最后，把购物车数据，存放入缓存（此处不用再给购物车数组push元素进去，因为这个是购物车有的，直接更新当前数组即可）  
                try {
                  wx.setStorageSync('cart', arr);
                  this.hideModal()
                  wx.showToast({
                    title: '加入购物车成功！',
                    duration: 1000,
                    icon: 'none',
                  });
                } catch (e) {
                  console.log(e)
                }
                // 返回（在if内使用return，跳出循环节约运算，节约性能） 鉴赏-甜品台5
                return;
              }
            }
            // 遍历完购物车后，没有对应的item项，把this.data.innerText的当前项放入购物车数组  
            arr.push(this.data.innerText);
          } else {
            arr.push(this.data.innerText);
          }
          // 最后，把购物车数据，存放入缓存  
          try {
            wx.setStorageSync('cart', arr);
            // 返回（在if内使用return，跳出循环节约运算，节约性能） 
            this.hideModal()
            wx.showToast({
              title: '加入购物车成功！',
              duration: 1000,
              icon: 'none',
            });
            return;
          } catch (e) {
            console.log(e)
          }

        }
      } else {
        wx.showToast({
          title: '请选择完整规格',
          duration: 1000,
          icon: 'none',
        });
      }

    },
    //数量减
    NamDel: function (e) {
      console.log("数量减");
      var count = this.data.innerText.count;
      if (count > 1) {
        this.data.innerText.count--;
      }
      // 将数值与状态写回  
      this.setData({
        innerText: this.data.innerText
      });

    },
    //数量加 
    NamAdd: function (e) {
      console.log("数量加");
      var count = this.data.innerText.count;
      if (count < 10) {
        this.data.innerText.count++;
      }
      // 将数值与状态写回  
      this.setData({
        innerText: this.data.innerText
      });
    },
    ChoiceKey: function (e) {
      var obt = e.target.dataset.key; // 获取选择的规格
      var Index = 0;
      if (obt.indexOf("寸") >= 0) {
        Index = 0;
      } else if (obt.indexOf("油") >= 0) {
        Index = 1;
      } else {
        Index = 2;
        if (this.data.innerText.detail.length  == 2) {
          Index = 1
        }
      }
      let oad = this.data.innerText.detail[Index].content.indexOf(obt);//选择改变样式
      var arr = this.data.param;
      //把选择的好的的规格放在一个数组里面
      var arr1 = this.data.speci;
      if (arr[Index] == oad) {    //判断是否点击第二次
        delete arr[Index];
        arr1[Index] = "";
      } else {
        arr1[Index] = obt;
        arr[Index] = oad;
      }
      this.setData({
        param: arr,
        speci: arr1
      });
      //选择所有样式后改变价格
      if (this.data.innerText.detail.length == this.data.param.length) {  //判断是否全部选中
        if (this.data.param[0] > 0) {
          let Pri = this.data.innerText.MaxPrice;
          this.setData({
            Price: Pri
          })
        } else {
          let Pri = this.data.innerText.Price;
          this.setData({
            Price: Pri
          })
        }
      } else {
        let Pri = this.data.innerText.Price + " - " + this.data.innerText.MaxPrice; //初始化时的默认价格
        this.setData({
          Price: Pri
        })
      }
    }
  }
})