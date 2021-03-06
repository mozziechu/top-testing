// pages/student-application/student-application.js
const { $Toast } = require('../../plugin/iview/base/index');
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    items: []
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
    this.seletPracticedepartByTutotid();
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

  },
  seletPracticedepartByTutotid(){
    const tutorid = wx.getStorageSync('tutorinfo').tutorid;
    const _this = this;
    wx.request({
      url: app.globalData.httpUrl + 'weapp/seletPracticedepartBySaccount.action?tutorid=' + tutorid,
      success: function(r){
        _this.setData({
          items: r.data
        });
        console.log(r)
      },
      fail: function(r){}
    })
  },
  /**
   * 请求回调
   */
  request(r) {
    if (r.statusCode === 200) {
      this.setData({
        items: r.data
      });
      console.log(JSON.stringify(r.data));
    } else {
      $Toast({
        content: JSON.stringify(r),
        type: 'error'
      });
    }
  }
})