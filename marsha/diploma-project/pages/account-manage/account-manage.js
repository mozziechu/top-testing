// pages/account-manage/account-manage.js
const { $Toast } = require('../../plugin/iview/base/index');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {
      tname: '',
      tphone: '',
      tmail: '',
      taccount: '',
      tpwd: '',
      tprank: '',
      tdegree: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      item: wx.getStorageSync('tutorinfo')
    })
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
  /**
   * 提交代码
   */
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    const _this = this;
    wx.request({
      url: app.globalData.httpUrl + 'weapp/updateByPrimaryKeySelective.action',
      data: e.detail.value,
      success: function(r) {
        if(r.data.success){
          $Toast({
            content: r.data.msg,
            type: 'success'
          });
          _this.cancel();
        }
      },
      fail: function(r) {
        $Toast({
          content: r.data.msg,
          type: 'error'
        });
      }
    });
  },
  /**
   * 登出
   */
  loginOut() {
    wx.removeStorageSync('tutorinfo')
  },
  /**
   * 返回
   */
  cancel() {
    wx.navigateBack({
      delta: 1
    })
  },

})