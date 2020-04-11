Page({
  data: {
    userListInfo: [
      {
        text: "个人中心",
        url: "/pages/home/center/center"
      },
      {
        text: "打开记录",
        url: "/pages/home/history/history"
      }
    ]
  },

  toNewPage: function (e) {
    let url = e.currentTarget.dataset.url;
    console.log(url);
    wx.navigateTo({
      url: url,
      fail: function (e) {
        console.error(e);
      }
    });
  }
});
