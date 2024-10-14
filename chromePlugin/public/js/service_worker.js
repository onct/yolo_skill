/* eslint-disable no-undef */
chrome.action.onClicked.addListener((tab) => {
  console.log('当前点击的tab', tab);
  // 内部系统，点击插件，获取token发送给猎聘
  // lilin: blog.csdn换成内部系统的域名
  if (!tab.url.includes("blog.csdn")) return;
  // 发送给content script cookie信息
  chrome.cookies.getAll({ url: tab.url }, function (cookies) {
    for (let i = 0; i < cookies.length; i++) {
      if(cookies[i].name === 'Access-Token') {
        chrome.storage.sync.set({ token:  cookies[i].value}, function() {});
      }
    }
  });
});
