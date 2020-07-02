// pages/ation/ation.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: '0',
    anchorArray: [],
    selectFloorIndex: 0,
    titlesp: [],
    fatherAge: {},
    Popup: false,
    Pop:false,
    title: [{
      text: '罐子系列',
      href: 'jar'
    },
    {
      text: '1+1蛋糕系列',
      href: 'Cake'
    },
    {
      text: '小袋系列',
      href: 'Pouch'
    },
    {
      text: '奶油蛋糕',
      href: 'cream'
    },
    {
      text: '设计师蛋糕',
      href: 'designer'
    },
    {
      text: '口味蛋糕',
      href: 'flavor'
    },
    {
      text: '西点面包饮料',
      href: 'west'
    },
    {
      text: '故事主题蛋糕',
      href: 'story'
    },
    {
      text: '甜品台系列',
      href: 'Dessert'
    },
    {
      text: '热销TOP榜',
      href: 'sale'
    },
    ],
    titlename: [{
      text: '罐子系列',
      detailed: []
    },
    {
      text: '1+1蛋糕系列',
      detailed: [{
        id: '1',
        name: '1+1 挖掘机小男孩',
        src: 'https://ae01.alicdn.com/kf/Hed1390b3cbf74b66a913c7c7af3aa7c6v.jpg',
        Price: '308',
        MaxPrice: '418',
        count: 1,
        detail: [
          {
            // content: '4寸', '6寸', '8寸', '8寸双层'
            type: '尺寸',
            content: ['4寸','6寸','8寸','8寸双层' ]
          },
          {
            type: '口味',
            content: [ '原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油']
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油']
          }
        ]
      },
      {
        id: '2',
        name: '1+1 星戴露',
        src: 'https://ae01.alicdn.com/kf/H7852b1053d3f40ca8af00b7dd4cb0afbE.jpg',
        Price: '298',
        MaxPrice: '408',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: [ '小6寸+mimi','小8寸+4寸' ]
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油' ]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油' ]
          }
        ]
      },
      {
        id: '3',
        name: '1+1 闹新年',
        src: 'https://ae01.alicdn.com/kf/Hafbb5c416b304851a63e18e4127e710fg.jpg',
        Price: '298',
        MaxPrice: '418',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['小6寸+mimi','小8寸+4寸' ]
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油' ]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油' ]
          }
        ]
      },
      {
        id: '4',
        name: '1+1 吉祥如意',
        src: 'https://ae01.alicdn.com/kf/H267d1464aa8848b6834f50d604ae6ad2B.jpg',
        Price: '298',
        MaxPrice: '418',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['小6寸+mimi','小8寸+4寸' ]
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油' ]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油' ]
          }
        ]
      },
      {
        id: '5',
        name: '1+1 快乐马戏团',
        src: 'https://ae01.alicdn.com/kf/H86e42edf4a3f4400943e754b30b33b65n.jpg',
        Price: '308',
        MaxPrice: '418',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['小6寸+mimi','小8寸+4寸']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '6',
        name: '1+1白茶清晨',
        src: 'https://ae01.alicdn.com/kf/H3b45800fd915466580ec2d7190e0dc19Z.jpg',
        Price: '298',
        MaxPrice: '408',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['小6寸+mimi','小8寸+4寸']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '7',
        name: '1+1暖暖',
        src: 'https://ae01.alicdn.com/kf/H337746cb3b474b8e92298c90759d9e2cJ.jpg',
        Price: '298',
        MaxPrice: '408',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['小6寸+mimi','小8寸+4寸']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '8',
        name: '1+1冰雪奇缘',
        src: 'https://ae01.alicdn.com/kf/H2ea3747748df430a8f7d0134aa1359adc.jpg',
        Price: '298',
        MaxPrice: '408',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['小6寸+mimi','小8寸+4寸']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '9',
        name: '1+1森林小恐龙',
        src: 'https://ae01.alicdn.com/kf/Hbf0b0d8d910b48398a6dc073bbf1aff6u.jpg',
        Price: '298',
        MaxPrice: '408',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['小6寸+mimi','小8寸+4寸']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '10',
        name: '1+1汽车总动员',
        src: 'https://ae01.alicdn.com/kf/H065a15b2a2f34447a0a7338fc6c026b4J.jpg',
        Price: '298',
        MaxPrice: '408',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['小6寸+mimi','小8寸+4寸']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '11',
        name: '1+1海贼王路飞',
        src: 'https://ae01.alicdn.com/kf/H198eac051fb1426a9de80145126415026.jpg',
        Price: '298',
        MaxPrice: '408',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['小6寸+mimi','小8寸+4寸']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      ]
    },
    {
      text: '小袋系列',
      detailed: [

      ]
    },
    {
      text: '奶油蛋糕',
      detailed: [{
        id: '12',
        name: 'Biu小心心',
        src: 'https://ae01.alicdn.com/kf/H3e612393f5ba46fdadaa385a10b608abu.jpg',
        Price: '98',
        MaxPrice: '438',
        count: 1,
        detail: [
          {
            type: '尺寸',
            // content: '4寸', '6寸', '8寸', '8寸双层'
            content: ['4寸','6寸','8寸','8寸双层' ]
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油']
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油']
          }
        ]
      },
      {
        id: '13',
        name: '小雏菊',
        src: 'https://img.yzcdn.cn/upload_files/2020/05/16/FmZ7QiaFFry-1noq8fCFP8L5vz3y.jpg!middle.jpg',
        Price: '268',
        MaxPrice: '278',
        count: 1,
        detail: [
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '14',
        name: '招牌千层雪',
        src: 'https://img.yzcdn.cn/upload_files/2019/06/10/FsLS4h4tjOQVn7mBrHhsTRSE8-cj.jpg!middle.jpg',
        Price: '168',
        MaxPrice: '508',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层', '10寸', '10寸双层']
          },

          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '15',
        name: '简约风 ins蓝',
        src: 'https://img.yzcdn.cn/upload_files/2020/03/15/Fr1jHCrCyEOD4JUric98PtePufI4.jpg!middle.jpg',
        Price: '98',
        MaxPrice: '438',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '16',
        name: '中式-旗韵',
        src: 'https://img.yzcdn.cn/upload_files/2020/05/07/FgbMGy3-PDBXyO2adu8Hgd3jY4Nj.jpg!middle.jpg',
        Price: '308',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '17',
        name: '复古-草莓屋',
        src: 'https://img.yzcdn.cn/upload_files/2020/04/19/FkW4TVA0eW5xbMeagvGmPTM91apq.jpg!middle.jpg',
        Price: '248',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '18',
        name: '皇冠-粉锡箔',
        src: 'https://img.yzcdn.cn/upload_files/2019/03/19/FjMWUNzPva0rlXA1-W6vHT57Ye7_.jpg!middle.jpg',
        Price: '288',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '19',
        name: '美少女战士',
        src: 'https://img.yzcdn.cn/upload_files/2020/03/21/FnC-TfIBWtn3pPvFqhYYgr-toKE0.jpg!middle.jpg',
        Price: '308',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '20',
        name: '呆萌小飞象',
        src: 'https://img.yzcdn.cn/upload_files/2020/03/15/Fk0atUU3ExkgRJ2sBj4uZS1AVjyJ.jpg!middle.jpg',
        Price: '268',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '21',
        name: '繁星',
        src: 'https://img.yzcdn.cn/upload_files/2019/11/22/FjUTv2Gc2-ZYWfzZGuVUeHDGhrid.jpg!middle.jpg',
        Price: '228',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '22',
        name: '杨枝甘露',
        src: 'https://img.yzcdn.cn/upload_files/2019/06/10/FoPQga59AZuINIyPs_cMV7XSa37J.jpg!middle.jpg',
        Price: '108',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '23',
        name: '奥里奥小怪兽',
        src: 'https://img.yzcdn.cn/upload_files/2020/05/23/FscVVpbs_OyfgpkIDp8e4PxJpgtH.jpg!middle.jpg',
        Price: '268',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '24',
        name: '冰雪奇缘-海洋',
        src: 'https://img.yzcdn.cn/upload_files/2019/10/27/Fv_9i_II_njXiD6QbZ7RSMa9HMl1.jpg!middle.jpg',
        Price: '268',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '25',
        name: 'cheers-2',
        src: 'https://img.yzcdn.cn/upload_files/2019/07/11/FvShEkvE7AAzWuq7fY8X5-DmWSk2.jpg!middle.jpg',
        Price: '248',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '26',
        name: '纪念日',
        src: 'https://img.yzcdn.cn/upload_files/2019/02/15/FqdVwgZjk4xfNhhi-dQeZn5A2DpD.jpg!middle.jpg',
        Price: '98',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '27',
        name: '汪汪队',
        src: 'https://img.yzcdn.cn/upload_files/2019/10/27/FnkDyIj1rMS_L2HtTNHXCT1WPLP1.jpg!middle.jpg',
        Price: '248',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '28',
        name: '皇冠羽毛',
        src: 'https://img.yzcdn.cn/upload_files/2019/06/18/FrYjSaiwXy1Uyiljj4u_wYD2UI2A.jpg!middle.jpg',
        Price: '288',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '29',
        name: '绝地求生',
        src: 'https://img.yzcdn.cn/upload_files/2019/02/12/FrPThGjQhP17Sc-c7S3pMUcBJCYT.jpg!middle.jpg',
        Price: '268',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '30',
        name: '森海人鱼',
        src: 'https://img.yzcdn.cn/upload_files/2020/05/14/FsxoxM5vBRnPpk5dil_uhFAys6z3.jpg!middle.jpg',
        Price: '268',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '31',
        name: '汽车总动员',
        src: 'https://img.yzcdn.cn/upload_files/2019/10/27/Fh2FMV-jLkGfF3ZCXIHqBJWqksNK.jpg!middle.jpg',
        Price: '268',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '32',
        name: '恐龙世界',
        src: 'https://img.yzcdn.cn/upload_files/2019/12/13/FmS8w_GktbbNFQ1p1ld7boEWh0mK.jpg!middle.jpg',
        Price: '468',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '33',
        name: '冰雪城堡',
        src: 'https://img.yzcdn.cn/upload_files/2020/04/09/FsLiAMNCeyZH8bQP3NKVHb3NFoMq.jpg!middle.jpg',
        Price: '408',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '34',
        name: '卡哇伊小兔几',
        src: 'https://img.yzcdn.cn/upload_files/2020/03/12/FtqusSUSXJdUX3yr6M2llLTYgr5i.jpg!middle.jpg',
        Price: '268',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '35',
        name: '告白情书',
        src: 'https://img.yzcdn.cn/upload_files/2019/02/12/FvSgueaCxmZPSPJuP-Hfc_0hVwp-.jpg!middle.jpg',
        Price: '228',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '36',
        name: '狮子王',
        src: 'https://img.yzcdn.cn/upload_files/2019/12/13/FgIHeAch7CIhMCl43d8k_Qkvwvst.jpg!middle.jpg',
        Price: '468',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '37',
        name: '粉韩',
        src: 'https://img.yzcdn.cn/upload_files/2019/02/15/FkwH-iIX4u2MS19K2kCGiqsv4kN_.jpg!middle.jpg',
        Price: '98',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '38',
        name: '中式-兰味',
        src: 'https://img.yzcdn.cn/upload_files/2020/05/07/FhfNbj0exFL0UYRjMKQtD5SnJuEH.jpg!middle.jpg',
        Price: '268',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '39',
        name: '白底小爱心',
        src: 'https://img.yzcdn.cn/upload_files/2019/02/15/Fqx7HWRkmPP2krElP-mvPDQ8VSu6.jpg!middle.jpg',
        Price: '98',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '40',
        name: '暴富',
        src: 'https://img.yzcdn.cn/upload_files/2019/10/27/FtTNYQXLMyIjFDrNzBHlWmjE7esU.jpg!middle.jpg',
        Price: '168',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '41',
        name: '冰淇淋',
        src: 'https://img.yzcdn.cn/upload_files/2019/02/15/FoTJBhzGHYgxKt4wbZKX74xIQFRZ.jpg!middle.jpg',
        Price: '98',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '42',
        name: '陪伴G8',
        src: 'https://img.yzcdn.cn/upload_files/2019/05/25/FpOLuNAa_FfMnWWf_p_aRRXwhxVT.jpg!middle.jpg',
        Price: '268',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '43',
        name: '复古-白雪公主',
        src: 'https://img.yzcdn.cn/upload_files/2020/04/01/Fs0C9zuvg_pO9lqAJQBNrYmLOIGa.jpg!middle.jpg',
        Price: '268',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '44',
        name: '朗姆酒',
        src: 'https://img.yzcdn.cn/upload_files/2019/01/20/FiGsa2rMmounHwgIm76y3M1Uc_Vh.jpg!middle.jpg',
        Price: '268',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '45',
        name: '水冰月-白-羽毛 K68',
        src: 'https://img.yzcdn.cn/upload_files/2019/02/12/FvT5yxKL8oSHA67toEDj9e3M6K74.jpg!middle.jpg',
        Price: '248',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '46',
        name: '手工饼干-冰淇淋',
        src: 'https://img.yzcdn.cn/upload_files/2020/04/05/FrpoAqDt6mJtW4_3-EZOnUWATU36.jpg!middle.jpg',
        Price: '268',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '47',
        name: '襁褓-女宝G6',
        src: 'https://img.yzcdn.cn/upload_files/2019/04/01/FowR_IdAdr5GM9twP8q4D0zkeBLm.jpg!middle.jpg',
        Price: '268',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '48',
        name: '笑脸',
        src: 'https://img.yzcdn.cn/upload_files/2019/02/15/FmYmOTEG-cCbyUzcUYIpSUsQDkHT.jpg!middle.jpg',
        Price: '98',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '49',
        name: '欢乐小企鹅',
        src: 'https://img.yzcdn.cn/upload_files/2020/03/16/Fl880PWHgsFZXv6IPdgpQmnahJb3.jpg!middle.jpg',
        Price: '268',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '50',
        name: '栗子',
        src: 'https://img.yzcdn.cn/upload_files/2019/01/10/FiyEgBayoh0K3lTHHy7fOkd1BGhY.jpg!middle.jpg',
        Price: '228',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '51',
        name: '小猪佩奇',
        src: 'https://img.yzcdn.cn/upload_files/2019/01/09/FqN3gcboDVbMY_qn0R1QURypld7Q.jpg!middle.jpg',
        Price: '248',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '52',
        name: '皮卡丘',
        src: 'https://img.yzcdn.cn/upload_files/2020/03/13/Fr82kiYDb7y543t8ef4zp1wrwOpJ.jpg!middle.jpg',
        Price: '268',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '53',
        name: '襁褓-男宝G7',
        src: 'https://img.yzcdn.cn/upload_files/2019/04/01/Ft4UAyXYM8GnYPtczn2ISTSGg_UB.jpg!middle.jpg',
        Price: '268',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '54',
        name: '薄荷',
        src: 'https://img.yzcdn.cn/upload_files/2019/01/10/FnU3T6bn8EwXyeM7KwOtLNVta4FA.jpg!middle.jpg',
        Price: '228',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '55',
        name: '棒棒糖',
        src: 'https://img.yzcdn.cn/upload_files/2020/03/21/Fn0Tfp-5SgLvpi3kv6iEvo_RDlZk.jpg!middle.jpg',
        Price: '268',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '56',
        name: '超人',
        src: 'https://img.yzcdn.cn/upload_files/2019/10/27/Fl8LRSHrPBgxdvRgHdJXI3Vk9doU.jpg!middle.jpg',
        Price: '98',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '57',
        name: '海盐爆浆',
        src: 'https://img.yzcdn.cn/upload_files/2019/01/10/Fnjcl0EOP72WcRbtOV5VC61h8y3n.jpg!middle.jpg',
        Price: '128',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '58',
        name: '马里奥-纽扣',
        src: 'https://img.yzcdn.cn/upload_files/2019/02/12/FjEPNoXg1E_nn90TZHF42QZFQGMS.jpg!middle.jpg',
        Price: '248',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '59',
        name: '蓝胖子糖果款',
        src: 'https://img.yzcdn.cn/upload_files/2019/01/09/Fug0CHT5CoZkzCap8nySKXGmtNhH.jpg!middle.jpg',
        Price: '228',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '60',
        name: '满天星皇冠',
        src: 'https://img.yzcdn.cn/upload_files/2019/07/11/FhShLDMudKad69NO7oKRzkTg4VQy.jpg!middle.jpg',
        Price: '288',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '61',
        name: '领结（改字请备注）',
        src: 'https://img.yzcdn.cn/upload_files/2019/01/10/Fknbip9hdzyr0c4l0r7Mztqs_Nn6.jpg!middle.jpg',
        Price: '228',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '62',
        name: '寄语（改字请备注）',
        src: 'https://img.yzcdn.cn/upload_files/2019/01/10/FqKb_N1rbnO6QtDQxQ-S4FXMN_zj.jpg!middle.jpg',
        Price: '228',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '63',
        name: '很高兴认识你',
        src: 'https://img.yzcdn.cn/upload_files/2019/02/15/FmgstvlF7Nc30NhJHCS_8bCkzppu.jpg!middle.jpg',
        Price: '98',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '64',
        name: '咖色布朗尼',
        src: 'https://img.yzcdn.cn/upload_files/2019/10/27/FuyppK1M-W6GFZ0kV7JM4ZvSdUYt.jpg!middle.jpg',
        Price: '248',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '65',
        name: '三行情书',
        src: 'https://img.yzcdn.cn/upload_files/2019/02/15/FuLN9qjP-vUsrFh2aA9XxUEuKoRT.jpg!middle.jpg',
        Price: '98',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '66',
        name: '蓝胖子星星款',
        src: 'https://img.yzcdn.cn/upload_files/2019/10/27/FmkfuLN6mYbDx5wUofjtHEwloi8Q.jpg!middle.jpg',
        Price: '228',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '67',
        name: '芒果乳酪',
        src: 'https://img.yzcdn.cn/upload_files/2019/01/10/FtTDAnCWoQpEtkRNVSzX_Ttz1Egm.jpg!middle.jpg',
        Price: '248',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '68',
        name: '奥特曼宝宝',
        src: 'https://img.yzcdn.cn/upload_files/2019/10/27/FjsULOfqCww5CBCCj1lLon6L_fCc.jpg!middle.jpg',
        Price: '268',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '69',
        name: '木马-蓝',
        src: 'https://img.yzcdn.cn/upload_files/2019/08/14/FnQTpsaiPIZgVqEZMzQ0DnIjAD83.jpg!middle.jpg',
        Price: '268',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '70',
        name: '松鹤延年',
        src: 'https://img.yzcdn.cn/upload_files/2020/05/06/FsjrIMXH0_smNZYvWDfdt9MTEeP9.jpg!middle.jpg',
        Price: '248',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '71',
        name: '小猴子-彩虹猴',
        src: 'https://img.yzcdn.cn/upload_files/2019/01/06/Fn0jvfISW-hFj2DfMQ7SkrP5uIyd.jpg!middle.jpg',
        Price: '248',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '72',
        name: '小王子',
        src: 'https://img.yzcdn.cn/upload_files/2019/02/27/Fs5HJiSuIU3n7Q3FreOsmKPetaQZ.jpg!middle.jpg',
        Price: '248',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '73',
        name: '皇冠-高级灰',
        src: 'https://img.yzcdn.cn/upload_files/2019/03/09/FtkkLVeWblubWekeIqoAXmaahS0q.jpg!middle.jpg',
        Price: '288',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '74',
        name: '鳄鱼来了',
        src: 'https://img.yzcdn.cn/upload_files/2019/02/12/FuVhLMOTVIM2_8QjfDywaIGAK7Ob.jpg!middle.jpg',
        Price: '268',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '75',
        name: '鲜花-白玫瑰',
        src: 'https://img.yzcdn.cn/upload_files/2019/03/09/FhS0SpHyiaKdJHVLn_Fsl1e32RHu.jpg!middle.jpg',
        Price: '248',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '76',
        name: '手工饼干-仙人掌',
        src: 'https://img.yzcdn.cn/upload_files/2020/04/05/FkLLNy56Kv83ulAJd85cyXm3H6-K.jpg!middle.jpg',
        Price: '268',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '77',
        name: '鲜花-永恒',
        src: 'https://img.yzcdn.cn/upload_files/2019/03/09/FghxHmNKMx9uS47K4UzxF-OMW8ER.jpg!middle.jpg',
        Price: '248',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      },
      {
        id: '78',
        name: '零食-甜筒款',
        src: 'https://img.yzcdn.cn/upload_files/2019/01/10/ForMfSlLALDcWqV8liTqAwTkcJ_d.jpg!middle.jpg',
        Price: '248',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['4寸','6寸','8寸', '8寸双层']
          },
          {
            type: '口味',
            content: ['原味奶油','奥利奥口感奶油','芒果口感奶油', '草莓口感奶油', '乳酪口感奶油',]
          },
          {
            type: '水果夹心',
            content: ['红心火龙-凤梨','红心火龙-芒果','芒果-凤梨', '芒果火龙黄桃凤梨香蕉任意两种请备注', '乳酪口感奶油',]
          }
        ]
      }
      ]
    },
    {
      text: '设计师蛋糕',
      detailed: []
    },
    {
      text: '口味蛋糕',
      detailed: [{
        id: '79',
        name: '为栗钟情',
        src: 'https://img.yzcdn.cn/upload_files/2019/12/16/FuOSiiKuYYwL7z-YYc_Uheeed_ax.jpg!middle.jpg',
        Price: '268',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['6寸','8寸']
          }
        ]
      },
      {
        id: '80',
        name: '旺旺百利甜',
        src: 'https://img.yzcdn.cn/upload_files/2019/10/05/FpvkgCBvOGboQ0ioW3AMx4ifQyIJ.jpg!middle.jpg',
        Price: '268',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['6寸','8寸']
          }
        ]
      },
      {
        id: '81',
        name: '橙汁可可',
        src: 'https://img.yzcdn.cn/upload_files/2019/10/05/FpAd-0Zu1P1IVTZEc-L-SVbMt-Xv.jpg!middle.jpg',
        Price: '268',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['6寸','8寸']
          }
        ]
      },
      {
        id: '82',
        name: '香蕉布朗尼',
        src: 'https://img.yzcdn.cn/upload_files/2019/10/05/Fl0A-dba8HUCjgypesiY5CkUk1ss.jpg!middle.jpg',
        Price: '268',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['6寸','8寸']
          }
        ]
      },
      {
        id: '83',
        name: '可酸可甜',
        src: 'https://img.yzcdn.cn/upload_files/2019/10/05/Ft3p6JKuBbBmjrJ-BvTMp2maKAuT.jpg!middle.jpg',
        Price: '268',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['6寸','8寸']
          }
        ]
      },
      {
        id: '84',
        name: '海盐奥利奥',
        src: 'https://img.yzcdn.cn/upload_files/2019/10/05/Frj6VBI8zFylcA9q9KaacQy-Pfnc.jpg!middle.jpg',
        Price: '268',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['6寸','8寸']
          }
        ]
      },
      {
        id: '85',
        name: '香草树莓吧噗',
        src: 'https://img.yzcdn.cn/upload_files/2019/10/05/FvHDZhS6igGZ0imqtoREBe1YVliK.jpg!middle.jpg',
        Price: '268',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['6寸','8寸']
          }
        ]
      },
      {
        id: '86',
        name: '伯爵守护',
        src: 'https://img.yzcdn.cn/upload_files/2019/10/05/FoST1jGvGXSvvfq0owGwi_7iZ1r9.jpg!middle.jpg',
        Price: '268',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['6寸','8寸']
          }
        ]
      },
      {
        id: '87',
        name: '你的大白兔',
        src: 'https://img.yzcdn.cn/upload_files/2019/10/05/Fll44UCkVCFpUcga9ErvF23FEqvP.jpg!middle.jpg',
        Price: '268',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['6寸','8寸']
          }
        ]
      },
      {
        id: '88',
        name: '巧克力莓莓',
        src: 'https://img.yzcdn.cn/upload_files/2019/10/05/FokkBDEbz6O9JtODjzAcN-7QoLLF.jpg!middle.jpg',
        Price: '268',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['6寸','8寸']
          }
        ]
      },
      {
        id: '89',
        name: '椰萝飘香',
        src: 'https://img.yzcdn.cn/upload_files/2019/10/05/FgjKEXO5tRbhUIC8qF5GiC-3lsD_.jpg!middle.jpg',
        Price: '268',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['6寸','8寸']
          }
        ]
      },
      {
        id: '90',
        name: '椰子灰奶油蛋糕',
        src: 'https://img.yzcdn.cn/upload_files/2019/08/19/Fnw8xeXAADTByby3rW7uhKOgX59k.jpg!middle.jpg',
        Price: '228',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['6寸','8寸']
          }
        ]
      }
      ]
    },
    {
      text: '西点面包饮料',
      detailed: [{
        id: '91',
        name: '樱花福袋',
        src: 'https://img.yzcdn.cn/upload_files/2020/04/21/FtWw2U_uYV6TdoEZF1cMDMbGOA66.jpg!middle.jpg',
        Price: '108',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['6寸','8寸']
          }
        ]
      },
      {
        id: '92',
        name: '爆浆小蛋糕',
        src: 'https://img.yzcdn.cn/upload_files/2020/02/26/FkowUa6Hw_u0WSVHQMmyf3vPqgtp.jpg!middle.jpg',
        Price: '38',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['6寸','8寸']
          }
        ]
      },
      {
        id: '93',
        name: '小雪球',
        src: 'https://img.yzcdn.cn/upload_files/2020/04/19/FuGm9b4g8DTvPogPR5I3E4cRJRz2.jpg!middle.jpg',
        Price: '108',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['6寸','8寸']
          }
        ]
      },
      {
        id: '94',
        name: '便当蛋糕',
        src: 'https://img.yzcdn.cn/upload_files/2020/02/23/Fv4Uivepg-cyNptHa3447mmEZZDt.jpg!middle.jpg',
        Price: '38',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['6寸','8寸']
          }
        ]
      },
      {
        id: '95',
        name: '五福蛋糕',
        src: 'https://img.yzcdn.cn/upload_files/2020/04/25/FkoJbqFEa0BgmrYqBshpB_rDgYrd.jpg!middle.jpg',
        Price: '88',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['6寸','8寸']
          }
        ]
      },
      {
        id: '96',
        name: '蛋糕卷',
        src: 'https://img.yzcdn.cn/upload_files/2020/02/27/Fh7gz126FXUm74AxEk6QAQvTe0Ov.jpg!middle.jpg',
        Price: '88',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['6寸','8寸']
          }
        ]
      },
      {
        id: '97',
        name: '招牌红丝绒乳酪',
        src: 'https://img.yzcdn.cn/upload_files/2020/02/23/Fvj4L1y5OxDD8V5W5tXELvgO27c5.jpg!middle.jpg',
        Price: '38',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['6寸','8寸']
          }
        ]
      },
      {
        id: '98',
        name: '水果杯',
        src: 'https://img.yzcdn.cn/upload_files/2019/01/11/FgN0eDqLfLGGziduTsik9WAi2kJu.jpg!middle.jpg',
        Price: '40',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['6寸','8寸']
          }
        ]
      },
      {
        id: '99',
        name: '杨枝甘露',
        src: 'https://img.yzcdn.cn/upload_files/2019/11/21/FlODiQAz04gEhu5_BW89aAwkK8yE.jpg!middle.jpg',
        Price: '22',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['6寸','8寸']
          }
        ]
      },
      {
        id: '100',
        name: '班戟',
        src: 'https://img.yzcdn.cn/upload_files/2019/01/11/FhZonvJGiIxont_trTXkGWQnB-yH.jpg!middle.jpg',
        Price: '30',
        count: 1,
        detail: [
          {
            type: '尺寸',
            content: ['6寸','8寸']
          }
        ]
      },
      {
        id: '101',
        name: '香蕉牛奶',
        src: 'https://img.yzcdn.cn/upload_files/2019/11/21/FkNXK57YYqQAdeOMYzRFpjQ1Q0Eh.jpg!middle.jpg',
        Price: '22',
        count: 1,
        detail: [

        ]
      },
      {
        id: '102',
        name: '百香西柚',
        src: 'https://img.yzcdn.cn/upload_files/2020/04/21/FoVulwNjoZwVY12AZ7B6Jwmsj3Sm.jpg!middle.jpg',
        Price: '17',
        count: 1,
        detail: [

        ]
      },
      {
        id: '103',
        name: '百香蔓越莓',
        src: 'https://img.yzcdn.cn/upload_files/2020/04/21/FppH3jFLBcPxcNDkAoCNwT3Nau96.jpg!middle.jpg',
        Price: '18',
        count: 1,
        detail: [

        ]
      },
      {
        id: '104',
        name: '满杯芒',
        src: 'https://img.yzcdn.cn/upload_files/2020/04/21/Fv3XHGrjlyuDlurR7h-1hp-BruLT.jpg!middle.jpg',
        Price: '18',
        count: 1,
        detail: [

        ]
      },
      ]
    },
    {
      text: '故事主题蛋糕',
      detailed: []
    },
    {
      text: '甜品台系列',
      detailed: [{
        id: '105',
        name: '鉴赏-甜品台1',
        src: 'https://img.yzcdn.cn/upload_files/2019/11/16/FoWqqv6D4ao15a29Fym6PAN0Dtcg.jpg!middle.jpg',
        Price: '9999',
        count: 1,
        detail: [

        ]
      },
      {
        id: '106',
        name: '鉴赏-甜品台2',
        src: 'https://img.yzcdn.cn/upload_files/2019/11/16/FlAIriYpl73Ex-BoLxd0mYUSRs0V.jpg!middle.jpg',
        Price: '9999',
        count: 1,
        detail: [

        ]
      },
      {
        id: '107',
        name: '鉴赏-甜品台3',
        src: 'https://img.yzcdn.cn/upload_files/2019/11/16/FkvYFOHT4pa5mXETkrAU6HGnAIsu.jpg!middle.jpg',
        Price: '9999',
        count: 1,
        detail: [

        ]
      },
      {
        id: '108',
        name: '鉴赏-甜品台4',
        src: 'https://img.yzcdn.cn/upload_files/2019/11/16/Fvs7t4G9F2J849dtcve9lnlkkcTx.jpg!middle.jpg',
        Price: '9999',
        count: 1,
        detail: [

        ]
      },
      {
        id: '109',
        name: '鉴赏-甜品台5',
        src: 'https://img.yzcdn.cn/upload_files/2019/11/16/FlmJ1VRsx8WQ-l2BSnkyw2RmTDls.jpg!middle.jpg',
        Price: '9999',
        count: 1,
        detail: [

        ]
      },
      {
        id: '110',
        name: '鉴赏-甜品台6',
        src: 'https://img.yzcdn.cn/upload_files/2019/11/16/FiZ7tbxLdugBDTA6c6ToicYE5CsH.jpg!middle.jpg',
        Price: '9999',
        count: 1,
        detail: [

        ]
      },
      {
        id: '111',
        name: '鉴赏-甜品台7',
        src: 'https://img.yzcdn.cn/upload_files/2019/11/16/FkmB1LcCSV1TlzHUUALQNHDSpio_.jpg!middle.jpg',
        Price: '9999',
        count: 1,
        detail: [

        ]
      },
      {
        id: '112',
        name: '鉴赏-甜品台8',
        src: 'https://img.yzcdn.cn/upload_files/2019/11/16/FngiDz8WDLhPxhwi2-iay20OHA5O.jpg!middle.jpg',
        Price: '9999',
        count: 1,
        detail: [

        ]
      },
      {
        id: '113',
        name: '甜品台（套餐一）',
        src: 'https://img.yzcdn.cn/upload_files/2019/11/14/FthiY7nG8HmVMyrR21J401EJKDQ3.jpg!middle.jpg',
        Price: '5600',
        count: 1,
        detail: [

        ]
      },
      {
        id: '114',
        name: '甜品台（套餐二）',
        src: 'https://img.yzcdn.cn/upload_files/2019/11/14/Fo4O8MAOgot94Zfi1ArpgXO7foqh.jpg!middle.jpg',
        Price: '5600',
        count: 1,
        detail: [

        ]
      },
      {
        id: '115',
        name: '甜品台（套餐三）',
        src: 'https://img.yzcdn.cn/upload_files/2019/11/14/FsbyMIkhyjrArmfXBQt4uN2s19ZG.jpg!middle.jpg',
        Price: '6600',
        count: 1,
        detail: [

        ]
      },
      ]
    },
    {
      text: '热销TOP榜',
      detailed: []
    },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 遮罩层的显示隐藏
  a() {
    this.setData({
      Popup: !this.data.Popup,
    })
  },
  add(e) {
    var goodid = e.target.dataset.goodid - 1;
    var goods = this.data.titlesp[goodid];
    var POP = false
    if (goods.detail.length>1) {
      POP = true
    }else{
      POP = false
    }
    
    this.setData({
      fatherAge: goods,
      Pop:POP
    })
    this.a();
    e = goods;
    this.popup.showshadow(e);
  },
  getStatus(e) {
    this.setData({
      status: e.currentTarget.dataset.index,
      selectFloorIndex: e.currentTarget.dataset.index
    })
  },
  scrollTopFun(e) {
    let scrollTop = e.detail.scrollTop;
    let scrollArr = this.data.anchorArray;
    if (scrollTop >= scrollArr[scrollArr.length - 1] - this.data.autoHeight) {
      return;
    } else {
      for (let i = 0; i < scrollArr.length; i++) {
        if (scrollTop >= 0 && scrollTop < scrollArr[0]) {
          // selectFloorIndex控制筛选块高亮显示
          this.setData({
            selectFloorIndex: 0
          });
        } else if (scrollTop >= scrollArr[i - 1] && scrollTop < scrollArr[i]) {
          this.setData({
            selectFloorIndex: i
          });
        }
      }
    }

  },
  details(e) {
    let goo = this.data.titlesp[e.currentTarget.dataset.id - 1];
    try {
      wx.setStorageSync('details', goo);
    } catch (e) {
      console.log(e)
    }
    wx.navigateTo({
      url: '/pages/details/details'
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.popup = this.selectComponent("#popup");
    let query = wx.createSelectorQuery().in(this);
    let heightArr = [];
    let h = 0;
    query.selectAll('.catebox-item').boundingClientRect((react) => {
      react.forEach((res) => {
        h += res.height;
        heightArr.push(h)
      })
      this.setData({
        anchorArray: heightArr
      });
    }).exec();
    for (let i = 0; i < this.data.titlename.length; i++) {
      if (this.data.titlename[i].detailed.length > 0) {
        this.data.titlesp.push.apply(this.data.titlesp, this.data.titlename[i].detailed)
      }
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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