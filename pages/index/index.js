//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imag: [
      {
        name: "行业优秀",
        url: "../../icon/youxiu.png"
      },
      {
        name: "精工细作",
        url: "../../icon/jinggong.png"
      },
      {
        name: "高性价比",
        url: "../../icon/xingjiabi.png"
      },
      {
        name: "质量服务",
        url: "../../icon/anquan.png"
      }
    ],
    imgUrls: [
      'https://m.qpic.cn/psb?/V14JKMah4YD2Gw/n0Cfm1v5yP6lXXwS2D5L1s8xy.f4wmrh*tIAHVBuG*8!/b/dFMBAAAAAAAA&bo=eQKqAQAAAAARB.A!&rf=viewer_4',
      'https://m.qpic.cn/psb?/V14JKMah4YD2Gw/OmsGxRrlCor470.7EdkLbfNHNpXCjki2XOu0hQlnBvM!/b/dL8AAAAAAAAA&bo=NgY2BAAAAAARBzI!&rf=viewer_4',
      'https://m.qpic.cn/psb?/V14JKMah4YD2Gw/i2wQH664Ei084W*v0lHQOwIqLjSfpyGq2RobC0wQPbY!/b/dFQBAAAAAAAA&bo=NgY2BAAAAAARBzI!&rf=viewer_4',
      'http://m.qpic.cn/psb?/V14JKMah4YD2Gw/4uiwLgNx8x5G27Dd3rBCJerx4D.enkz.bnkYvnchl.w!/b/dL8AAAAAAAAA&bo=NgY2BAAAAAARFyI!&rf=viewer_4'
    ],
    indicatorDots: false,
    autoplay: true,
    interval1: 5000,
    duration: 1000,
    circular: true,
    indicator: true,
    chanpinbiao:"本公司主要以销售覆膜铝材，电泳铝材，覆膜板材（分中纤板材，木塑板材，塑钢板材），各类欧式门，吸塑门板，抽面板，罗马柱，凹凸门芯板，组框等 。",
    chanpin: [
        "https://m.qpic.cn/psb?/V14JKMah4YD2Gw/gzPNS.v1jfkG0PbMT0Coqsrz6XfJRUiC5.0B9koodUI!/b/dEgBAAAAAAAA&bo=NgY2BAAAAAARBzI!&rf=viewer_4",    
        "http://m.qpic.cn/psb?/V14JKMah4YD2Gw/DJ10J0sS.7AzsAy8mCitENnZTII64EpKCj6A3p6rOsQ!/b/dFABAAAAAAAA&bo=NgY2BAAAAAARFyI!&rf=viewer_4"
    ]
  },
  totianxiphone:function(){
    wx.makePhoneCall({
      phoneNumber: '18138911297',
    })
  },
  previewImg: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.chanpin;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  tophone: function () {
    wx.makePhoneCall({
      phoneNumber: '0757-81186560',
    })
  },
  onShareAppMessage: function () {

  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
