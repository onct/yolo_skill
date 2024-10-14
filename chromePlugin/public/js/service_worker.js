/* eslint-disable no-undef */
// lilin: blog.csdn换成内部系统的域名
chrome.cookies.getAll({ url: 'https://blog.csdn.net/gaotlantis/article/details/139630223' }, function (cookies) {
  console.log('Cookies', cookies);
  for (let i = 0; i < cookies.length; i++) {
    if(cookies[i].name === 'Access-Token') {
      chrome.storage.sync.set({ token:  cookies[i].value}, function() {});
    }
  }
});
