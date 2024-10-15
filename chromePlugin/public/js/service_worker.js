/* eslint-disable no-undef */
// lilin: blog.csdn换成内部系统的域名
chrome.cookies.getAll({ url: 'http://staging-crm.atkinsinsights.com/' }, function (cookies) {
  console.log('Cookies', cookies);
  for (let i = 0; i < cookies.length; i++) {
    if(cookies[i].name === 'Access-Token') {
      chrome.storage.sync.set({ token:  cookies[i].value}, function() {});
    }
  }
});

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    // 只处理你需要的请求，例如以 /api/ 开头的请求
    if (details && details.url.includes('get-resume-detail') && !details.initiator.includes('chrome-extension')) {
      console.log('API Response:', details);
      // 入参
      chrome.storage.sync.set({ data: `paramForm=${encodeURIComponent(details.requestBody.formData.paramForm[0])}` }, function() {});
    }
  },
  { urls: ["<all_urls>"]},
  ["requestBody"]
);

chrome.action.onClicked.addListener((tab) => {
  console.log(tab, 'tab');
  // chrome.debugger.attach(tab.id)
})