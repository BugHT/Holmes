//获取角色故事以及线索页面逻辑
const app = getApp()
Page({
  data:{
    title:'角色故事以及线索',
    firstCule:null,
    secondCule:null
  },
  //获取第一轮线索
  getFirstClue:function(){
    this.setData({
      firstCule: app.globalData.firstCule    
    }) 
  },
  //获取第二轮线索
  getSecondClue:function(){
    this.setData({
     secondCule:app.globalData.secondCule
    })
    
  },
  //投票
  vote:function(){

  }
})