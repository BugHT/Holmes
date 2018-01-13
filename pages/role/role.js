//获取角色故事以及线索页面逻辑
Page({
  data:{
    title:'角色故事以及线索'
  },
  //获取第一轮线索
  getFirstClue:function(){
    wx.request({
      url: '数据库获取角色对应第一轮线索接口',
      data:{
        userName:'角色名'
      }
    })
  },
  //获取第二轮线索
  getSecondClue:function(){
    wx.request({
      url: '数据库获取角色对应第二轮线索接口',
      data:{
        userName:'角色名'
      }
    })
  },
  //投票
  vote:function(){}
})