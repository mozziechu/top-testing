// pages/stu/stu-plan/stu-plan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 'stu-plan',
    verticalCurrent: 12,
    planArry: [{
      'term': '2018-2019(2)',
      'startDate': '2018-12-26',
      'endDate': '2018-12-30',
      'week': '-1',
      'memo': '下达任务书',
      'status': 1
    },
    {
      'term': '2018-2019(2)',
      'startDate': '2019-1-1',
      'endDate': '2019-2-24',
      'week': '0',
      'memo': '撰写开题报告',
      'status': 1
    },
    {
      'term': '2018-2019(2)',
      'startDate': '2019-2-25',
      'endDate': '2019-3-3',
      'week': '1',
      'memo': '提交开题报告',
      'status': 1
    },
    {
      'term': '2018-2019(2)',
      'startDate': '2019-3-4',
      'endDate': '2019-3-10',
      'week': '2',
      'memo': '开题答辩',
      'status': 1
    },
    {
      'term': '2018-2019(2)',
      'startDate': '2019-3-11',
      'endDate': '2019-3-17',
      'week': '3',
      'memo': '',
      'status': 1
    },
    {
      'term': '2018-2019(2)',
      'startDate': '2019-3-18',
      'endDate': '2019-3-24',
      'week': '4',
      'memo': '',
      'status': 1
    },
    {
      'term': '2018-2019(2)',
      'startDate': '2019-3-25',
      'endDate': '2019-3-31',
      'week': '5',
      'memo': '',
      'status': 1
    },
    {
      'term': '2018-2019(2)',
      'startDate': '2019-4-1',
      'endDate': '2019-4-7',
      'week': '6',
      'memo': '',
      'status': 1
    },
    {
      'term': '2018-2019(2)',
      'startDate': '2019-4-8',
      'endDate': '2019-4-14',
      'week': '7',
      'memo': '中期检查',
      'status': 1
    },

    {
      'term': '2018-2019(2)',
      'startDate': '2019-4-15',
      'endDate': '2019-4-21',
      'week': '8',
      'memo': '',
      'status': 1
    },
    {
      'term': '2018-2019(2)',
      'startDate': '2019-4-22',
      'endDate': '2019-4-28',
      'week': '9',
      'memo': '',
      'status': 1
    },

    {
      'term': '2018-2019(2)',
      'startDate': '2019-4-29',
      'endDate': '2019-5-5',
      'week': '10',
      'memo': '返校',
      'status': 1
    }, {
      'term': '2018-2019(2)',
      'startDate': '2019-5-6',
      'endDate': '2019-5-12',
      'week': '11',
      'memo': '',
      'status': 1
    },

    {
      'term': '2018-2019(2)',
      'startDate': '2019-5-13',
      'endDate': '2019-5-19',
      'week': '12',
      'memo': '答辩',
      'status': 1
    },
    {
      'term': '2018-2019(2)',
      'startDate': '2019-5-20',
      'endDate': '2019-5-26',
      'week': '13',
      'memo': '材料整理',
      'status': 1
    },
    {
      'term': '2018-2019(2)',
      'startDate': '2019-5-27',
      'endDate': '2019-6-2',
      'week': '14',
      'memo': '材料归档',
      'status': 1
    },
    ]
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
   * tab切换
   */
  handleChange({detail}) {
    this.setData({
      current: detail.key
    });
    const key = detail.key;
    if (key === 'stu') {
      console.log(key);
      wx.redirectTo({
        url: '/pages/stu/stu',
      })
    } else {
      console.log(key);
      wx.redirectTo({
        url: '/pages/stu/' + key + '/' + key,
      })
    }
  }
})