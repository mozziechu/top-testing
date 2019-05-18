// pages/double-detail/double-detail.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {
        title: "第一周：",
        people: "有效时间：",
        name: "2019年月25日-2019年3月3日",
        time: "提交状态:",
        date: "已提交",
        state: "评阅状态：",
        approval: "已批阅"
      }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const sid = options.sid;
    const _this = this;
    wx.request({
      url: app.globalData.httpUrl + 'weapp/selectStudentInfoBySid.action?sid='+sid,
      success: function (r) { _this.request(r)},
      fail: function (r) { _this.request(r)}
    });
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
   * 请求回调
   */
  request(r) {
    if (r.statusCode === 200) {
      this.setData({
        item: r.data
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