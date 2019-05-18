// pages/examine-graduation/examine-graduation.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { title: "毕业设计所在地点：", details: "校外" },
      { title: "所在单位名称：", details: "计算机软件" },
      { title: "单位所属行业：", details: "徐州市云龙区" },
      { title: "实习单位地址：", details: "徐州市云龙区" },
      { title: "实习单位老师：", details: "XXX（职称）" },
      { title: "联系电话：", details: "1231566974" },

    ],
    items1: [
      { title: "申请状态：", details: "待审批" },
    ],
    item:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const sid = options.sid;
    const _this = this;
    wx.request({
      url: app.globalData.httpUrl + 'weapp/selectPracticedepartBySid.action?sid=' + sid,
      success: function (r) { _this.request(r) },
      fail: function (r) { _this.request(r) }
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