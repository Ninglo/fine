Page({
  data: {
    array: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    index: 0,
  },
  moveTo: function () {
    wx.navigateTo({
      url: '/pages/mainPage/choose/choose',
    })
  }
})