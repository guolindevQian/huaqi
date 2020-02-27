// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dizhi:"广东省佛山市南海大沥邓西村",
    chuanzhen:"0757-81187562",
    mobilephone:"0757-81186560",
    qq1:"3227252894",
    qq2: "1413195569",
    wangzhi1: "www.HQLC.cn",
    wangzhi2: "www.华旗铝材.com",
    tousudianhua1:"18927205137",
    tousudianhua2: "18927205836",
    imgUrls: [
      'https://m.qpic.cn/psb?/V14JKMah4YD2Gw/n0Cfm1v5yP6lXXwS2D5L1s8xy.f4wmrh*tIAHVBuG*8!/b/dFMBAAAAAAAA&bo=eQKqAQAAAAARB.A!&rf=viewer_4',
      'https://m.qpic.cn/psb?/V14JKMah4YD2Gw/OmsGxRrlCor470.7EdkLbfNHNpXCjki2XOu0hQlnBvM!/b/dL8AAAAAAAAA&bo=NgY2BAAAAAARBzI!&rf=viewer_4'
      
    ],
    indicatorDots: false,
    autoplay: true,
    interval1: 5000,
    duration: 1000,
    circular: true,
    indicator: true
  },
  click: function (e) {
    wx.openLocation({
      latitude: 23.118833,
      longitude: 113.117449,
      scale: 15,
      name: '华旗铝材',
      address: '广东省佛山市南海大沥邓西村'
    })
  },
  tophone: function () {
    wx.makePhoneCall({
      phoneNumber: '0757-81186560',
    })
  },
  totianxiphone: function () {
    wx.makePhoneCall({
      phoneNumber: '18138911297',
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