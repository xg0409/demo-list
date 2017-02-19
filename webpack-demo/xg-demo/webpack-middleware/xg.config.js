'use strict';

module.exports = {
  rootProjectName: 'client',
  webpack: {
    entrys: {
      'bank_cbc': '${rootProjectName}/creditcard/bank_cbc',
      'bank_icbc': '${rootProjectName}/creditcard/bank_icbc',
      'baitiao/get_coupon': '${rootProjectName}/activities/baitiao/get_coupon',
      'baitiao/pull_new': '${rootProjectName}/activities/baitiao/pull_new',
      'p3': '${rootProjectName}/p/p1/p2/p3'
    },
    // 是否修改后自动刷新
    refreshHot: true
  }
}
