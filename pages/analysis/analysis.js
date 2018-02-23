//故事解析页面逻辑
const app = getApp()
Page({
  data: {
    title: "故事解析",
    storyResult: null
  },
  //根据故事编号storyNo获取故事解析
  onShow: function () {
    const requestTask =wx.request({
      url: 'https://localhost/test.php',
      data: {
        storyNo: app.globalData.storyNo
      },
      success: function (res) {
        //服务端返回的数据
        this.setData({
          storyResult: res.data
        })
      }
    })
  },
  //退出房间
  exitRoom: function () {
    clearCache()
    wx.navigateTo({
      url: '../start/start',
    })
  },
  //再来一局，跳转到选择剧本
  selectStory: function () {
    clearCache()
    wx.navigateTo({
      url: '../createroom/createroom',
    })
  },
  //清理缓存数据
  clearCache: function () {
    //剧本编号
    app.globalData.storyNo = '0',
      //剧本名称
    app.globalData.storyName = null,
      //角色名称
    app.globalData.role = null,
      //第一轮线索
    app.globalData.firstCule = null,
      //第二轮线索
    app.globalData.secondCule = null,
      //剧本结局
    app.globalData.storyResult = null,
      //剧情
    app.globalData.story = null
  }
})