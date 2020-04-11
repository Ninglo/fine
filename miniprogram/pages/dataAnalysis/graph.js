const db = wx.cloud.database()

Page({
  data: {
    navbar: ['心情数据', '打卡数据', '数据分析'],
    currentTab: 0
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  onLoad: function () {
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
        var nums = 0
        sbsb.forEach(element => {
          nums += element.time
        });
        console.log(nums)
        that.setData({
          times: nums
        })
        console.log(that.data.datas)
      }
    })
  }
})