var init;
const db = wx.cloud.database()
function formatTime (date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber (n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}


Page({
  data: {
    hiddenmodalput: true,
    name: "",
    phoneNum: '',
    //小程序计时器
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
    timecount: '00:00:00',
    cost: 0,
    flag: 1,
    endtime: "",
    projecto: 'project2',
    p1: -1,
    p2: -1
  },
  confirmM: function (e) {
    var time = formatTime(new Date())
    db.collection('user-data').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        due: time,
        project: this.data.projecto,
        points: this.data.p2 - this.data.p1,
        time: this.data.hour * 60 + this.data.minute
      },
      success: function (res) {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        console.log(res)
        wx.showToast({
          title: '成功',
          icon: 'succes',
          duration: 1000,
          mask: true
        })
        wx.switchTab({
          url: '/pages/mainPage/home'
        })
      }
    })
  },

  iName: function (e) {
    this.setData({
      p2: e.detail.value
    })
  },
  start: function () {
    clearInterval(init);
    var that = this;
    that.setData({
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0
    })
    init = setInterval(function () {
      that.timer()
    }, 50);
  },
  stop: function () {
    clearInterval(init);
  },
  Reset: function () {
    clearInterval(init);
    var that = this
    that.setData({
      hiddenmodalput: false,
    })
  },
  timer: function () {
    var that = this;
    console.log(that.data.millisecond)
    that.setData({
      millisecond: that.data.millisecond + 5
    })
    if (that.data.millisecond >= 100)
    {
      that.setData({
        millisecond: 0,
        second: that.data.second + 1
      })
    }
    if (that.data.second >= 60)
    {
      that.setData({
        second: 0,
        minute: that.data.minute + 1
      })
    }
    if (that.data.minute >= 60)
    {
      that.setData({
        minute: 0,
        hour: that.data.hour + 1
      })
    }
    that.setData({
      timecount: that.data.hour + ":" + that.data.minute + ":" + that.data.second + ":" + that.data.millisecond
    })
  },
  onLoad: function (req) {
    console.log(req.project)
    this.setData({
      projecto: req.project,
      p1: req.point1
    })
  }
});