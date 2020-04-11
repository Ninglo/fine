const db = wx.cloud.database()

Page({

  /**
   * Page initial data
   */
  data: {
    datas: 1
  },
  sb: function () {
    this.setData({
      datas: { sb: 1 }
    })
    console.log(this.data.datas)
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var that = this
    console.log(this.data.datas)
    db.collection('user-data').where({
      _openid: "ory-n5DpfmAs31nvAh9R8fTVStnA"
    }).get({
      success: function (res) {
        var sbsb = res.data
        console.log(`23333: ${sbsb[0].due}`)
        console.log('ok')
        that.setData({
          datas: sbsb.reverse()
        })
        console.log(that.data.datas)
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})