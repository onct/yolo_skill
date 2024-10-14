function getStorageData(k) {
  return new Promise((resolve) => {
      // eslint-disable-next-line no-undef
      const storage = chrome.storage.sync
      storage.get(k, function (data) {
          resolve(data[k])
      })
  })
}

async function init() {
  const token = await getStorageData('token');
  const iframe = document.createElement("iframe");
  iframe.src = "http://localhost:5173/";
  iframe.setAttribute("id", "yolo__iframe");
  iframe.setAttribute("allowTransparency", "true");

  document.body.appendChild(iframe);

  // 选择简历编码
  const jianDom = document.querySelector(".jsx-350099301 > span");
  const jianCode = (jianDom.getHTML().trim() || "").split("：")[1];
  // 在这里替换不同用户名
  const postMsg = { jianCode, name: "lilin", token };
  // 动态加载的元素还没有完成dom加载,所以先等待一下
  iframe.onload = function () {
    iframe.contentWindow.postMessage(postMsg, "*");
  }
  // 获取【联系一下】的dom元素
  const chatDom = document.querySelector(".chat-btn");
  chatDom.addEventListener("click", function () {
    iframe.contentWindow.postMessage(
      { ...postMsg, action: "click" },
      "*"
    );
  });
}

window.onload = function () {
  init();
};
