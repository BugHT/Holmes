//故事解析页面逻辑
Page({
  data:{
    title:"故事解析"
  },
  //根据故事编号storyNo获取故事解析
  onShow:function(){
    // wx.request({
    //   url: mongodb地址,
    //   data:{
    //     storyNo: app.gloabData.storyNo
    //   }
    // })
  },
  //退出房间
  exitRoom:function(){
    this.setData({
      title:'test'
    })
    // wx.request({
    //   url: '../start/start'
    // })
  },
  //选择剧本
  selectStory:function(){
    // wx.request({
    //   url: '../createroom/createroom',
    // })
  }
})