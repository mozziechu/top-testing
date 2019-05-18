//index.js
//获取应用实例
const app = getApp()
const { $Toast } = require('../../plugin/iview/base/index');
Page({
  data: {
    userName: '45',
    password: '45',
    role: [{
        name: '学生',
        value: 'stu'
      },
      {
        name: '指导老师',
        value: 'tutor'
      },
      {
        name: '教研室',
        value: 'admin'
      },
      {
        name: '专家',
        value: 'expert'
      }
    ],
    sheetVisible: false,
    roleSelected: 'tutor',
    roleSelectedName: '指导老师',
    motto: '欢迎使用徐工·毕业设计信息管理平台',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
    // this.getPhoneNumber();
  },
  getPhoneNumber(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  },
  handleActionSheet(){
    this.setData({
      sheetVisible: true
    });
  },  
  handleCancelRole() {
    this.setData({
      sheetVisible: false
    });
  },
  handleClickRole({ detail  }) {
    this.setData({
      roleSelected: this.data.role[detail.index].value,
      roleSelectedName: this.data.role[detail.index].name
    });
    this.handleCancelRole();
  },
  login(){
    const _this = this;
    const data = {
      account: this.data.userName,
      password: this.data.password,
      usertype: this.data.roleSelected
    };
    wx.request({
      url: app.globalData.httpUrl + 'user/login.action',
      data: data,
      success: function (r) { _this.request(r) },
      fail:function(r){  },
      complete:function(r){_this.request(r)}
    });
  },
  request(r){
    if(r.statusCode === 200 && r.data.success){
      wx.redirectTo({
        url: '/pages/stu/stu?param=' + this.data.roleSelected,
      });
      wx.setStorageSync('tutorinfo', r.data.tutorinfo)
    }else{
      $Toast({
        content: r.data.msg,
        type: 'error'
      });
    }
  }
})