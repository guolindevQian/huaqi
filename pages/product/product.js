// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
 
    category: ['产品展示系列', '铝材彩图展示系列', '电泳铝材模具图系列'],
    currentTab: 0,
    isScroll: false,
    toView: 'guowei',
    chanpingzhanshi:[
      "https://m.qpic.cn/psb?/V14JKMah4YD2Gw/OmsGxRrlCor470.7EdkLbfNHNpXCjki2XOu0hQlnBvM!/b/dL8AAAAAAAAA&bo=NgY2BAAAAAARBzI!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah4YD2Gw/i2wQH664Ei084W*v0lHQOwIqLjSfpyGq2RobC0wQPbY!/b/dFQBAAAAAAAA&bo=NgY2BAAAAAARFyI!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah4YD2Gw/4uiwLgNx8x5G27Dd3rBCJerx4D.enkz.bnkYvnchl.w!/b/dL8AAAAAAAAA&bo=NgY2BAAAAAARFyI!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah4YD2Gw/gzPNS.v1jfkG0PbMT0Coqsrz6XfJRUiC5.0B9koodUI!/b/dEgBAAAAAAAA&bo=NgY2BAAAAAARFyI!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah4YD2Gw/DJ10J0sS.7AzsAy8mCitENnZTII64EpKCj6A3p6rOsQ!/b/dFABAAAAAAAA&bo=NgY2BAAAAAARFyI!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah4YD2Gw/1nEQFum3y.PEGGACr.O12mKe2s4JX47puJ4B5F.TLR0!/b/dL4AAAAAAAAA&bo=NgY2BAAAAAARFyI!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah4YD2Gw/5fThmXX4Je9KzEaNedXYOMguvnrhsXFnDubT3LVgNzg!/b/dMUAAAAAAAAA&bo=NgY2BAAAAAARFyI!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah4YD2Gw/H3V7f8znSuXwtKh4KN8KehnTSd1*nDdvWr4d0lu4HsY!/b/dL8AAAAAAAAA&bo=NgY2BAAAAAARFyI!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah4YD2Gw/YKqxm0asELYoAQOBBLd.YDwBd1V8*YdAEL6ILrsafNI!/b/dL4AAAAAAAAA&bo=NgY2BAAAAAARFyI!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah4YD2Gw/HKbVSrWbGo*L6dKGsfWykwr3v4f97Zrqz4NyfnsIsKg!/b/dLYAAAAAAAAA&bo=NgY2BAAAAAARFyI!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah4YD2Gw/bxv1og6AdghrDLQuWr.L6vAgkGyba4e7myVMbQLGrCU!/b/dL8AAAAAAAAA&bo=NgY2BAAAAAARJxI!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah4YD2Gw/ACwGPv41g6yP2pE7hUvEBXUxAy7Hl7MnR.vYsJRJk5o!/b/dL8AAAAAAAAA&bo=NgY2BAAAAAARFyI!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah4YD2Gw/cFvzbr3gw6QSPKszbidon1ZB411*WxXlHUCUxDMsaWU!/b/dIMAAAAAAAAA&bo=NgY2BAAAAAARFyI!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah4YD2Gw/e8tKVMtpSDJRaOfxGZpi9GWEa2J.FEQmh4RJm5B6A.Y!/b/dL8AAAAAAAAA&bo=NgY2BAAAAAARFyI!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah4YD2Gw/3zbxpaZ9U8X2FnupREBcHOYOF1Dvob*ivqqmxo7akZI!/b/dLYAAAAAAAAA&bo=NgY2BAAAAAARFyI!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah4YD2Gw/0J2saVVTokF*UbCjzywgpK9JVqqrSTT906wr53sc.8Y!/b/dFMBAAAAAAAA&bo=NgY2BAAAAAARFyI!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah4YD2Gw/otkYMtNOaZJcZDO6eyCi.CJHwqvMX1A.LU3U44O*ma0!/b/dDMBAAAAAAAA&bo=NgY2BAAAAAARFyI!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah4YD2Gw/q4AKEj9DdCO2TxgL8KTEvumLCMUIV.uaYJFHmyof5wQ!/b/dL8AAAAAAAAA&bo=NgY2BAAAAAARFyI!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah4YD2Gw/mUB11yUC*ggp3w572ih6kaBa6gB4.SGBxMnaiuTylGQ!/b/dL8AAAAAAAAA&bo=NgY2BAAAAAARFyI!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah4YD2Gw/e*Kr229fhkZRJcBunONyYHaVmpj0T6gHBmh6qrRFtws!/b/dDEBAAAAAAAA&bo=NgY2BAAAAAARFyI!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah4YD2Gw/z7ukeLoU0zK.UwW4VvEH.Aad5auc7Ga6FkkCvihvUBQ!/b/dL8AAAAAAAAA&bo=NgY2BAAAAAARFyI!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah4YD2Gw/KIg*cImwBQUN06.zm1aimpIW4YxHhN*G1*po4yGpjrA!/b/dE0BAAAAAAAA&bo=NgY2BAAAAAARFyI!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah4YD2Gw/YjJtsOax6JWPOHS57eumKnl0.6Bp1.LBPhsVjHftmuM!/b/dLYAAAAAAAAA&bo=NgY2BAAAAAARJxI!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah4YD2Gw/*2sR2drKrL3ZiR209rFX6cdRX53Uk6d5a7OtylwlCcM!/b/dDQBAAAAAAAA&bo=NgY2BAAAAAARFyI!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah4YD2Gw/tc03MKQ3TRMUyk4FDK70fwZZlDz*09BKvd8JjOJafzI!/b/dDIBAAAAAAAA&bo=NgY2BAAAAAARFyI!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah4YD2Gw/I0YGRRFXi42edtKyX43mjeKWuTMr6mlbCD1e1vW6aDY!/b/dLYAAAAAAAAA&bo=NgY2BAAAAAARJxI!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah4YD2Gw/ViDP4yqEgROc7gSOvgUbOnVBSugqsZoR6utd09wzuZs!/b/dL8AAAAAAAAA&bo=NgY2BAAAAAARFyI!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah4YD2Gw/ngkdXZJsIR5CRf56nl8k.lPSC*eWsSbIQFHtG44vZIg!/b/dFABAAAAAAAA&bo=NgY2BAAAAAARFyI!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah4YD2Gw/7eOTqQsG5PyodR8*OI4lSJQ1bXsNiLRX2BwOxv61hA4!/b/dFMBAAAAAAAA&bo=NgY2BAAAAAARFyI!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah4YD2Gw/xFROiufvUJRphYS3vHSSscUI2PdRnOnb.Mkqo0D52fM!/b/dLYAAAAAAAAA&bo=NgY2BAAAAAARFyI!&rf=viewer_4"
    ],
    ldianyonglvcai:[
      "https://m.qpic.cn/psb?/V14JKMah1MHAMV/ue4WQepLJgNxXla7wksF1t6VlpJQ3Z.KUroJ5XMTgBc!/b/dFMBAAAAAAAA&bo=zwLUAwAAAAARByo!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah1MHAMV/8yryyoPciDvOj.*u6CnZWklryMELrM8n*cvYx*zQBVA!/b/dL8AAAAAAAAA&bo=4AY4BAAAAAARF*o!&rf=viewer_4",
      "https://m.qpic.cn/psb?/V14JKMah2G1Uux/77xuApkdc4JDxKNDHX8Xk3fuQBO2chvG4*n54vvScv8!/b/dFIBAAAAAAAA&bo=oAPeBAAAAAARB0k!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah2G1Uux/Vxl1h2fqv.g7qLi9sEhvzv*kkxrBd*k2rtA9Rtbgwkc!/b/dAYBAAAAAAAA&bo=dgY4BAAAAAARF2w!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah2G1Uux/l9A5AyIIinF880RlCpM.get1bXwYMelY55QntX3pirs!/b/dFQBAAAAAAAA&bo=pgY4BAAAAAARF7w!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah2G1Uux/qNWYueQ.8T6Ef1hO1kIScUTRMW0NGig6czPDRFwcrc0!/b/dE8BAAAAAAAA&bo=sAPOBAAAAAARF1k!&rf=viewer_4"
    ]
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.index
    })
  },
  totianxiphone: function () {
    wx.makePhoneCall({
      phoneNumber: '18138911297',
    })
  },
  tophone: function () {
    wx.makePhoneCall({
      phoneNumber: '0757-81186560',
    })
  },
  previewImg: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.chanpingzhanshi;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  previewImg1: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.ldianyonglvcai;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  switchTab: function (e) {
    const self = this;
    this.setData({
      isScroll: true
    })
    setTimeout(function () {
      self.setData({
        toView: e.target.dataset.id,
        curIndex: e.target.dataset.index
      })
    }, 0)
    setTimeout(function () {
      self.setData({
        isScroll: false
      })
    }, 1)

  },
  tolist: function (e) {
    this.setData({
      huanshi: e.currentTarget.dataset.detail,
      index: e.currentTarget.dataset.index
    })
    wx.navigateTo({
      url: '../../pages/list/list?huanshi=' + encodeURIComponent(JSON.stringify(this.data.huanshi)) + "&aid=" + this.data.index,
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