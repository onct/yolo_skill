function init() {
  const iframe = document.createElement("iframe");
  iframe.src = "http://localhost:5173/";
  iframe.setAttribute("id", "yolo__iframe");
  iframe.setAttribute("allowTransparency", "true");

  document.body.appendChild(iframe);

  // 选择简历编码
  const jianDom = document.querySelector(".jsx-350099301 > span");
  const jianCode = (jianDom.getHTML().trim() || "").split("：")[1];
  iframe.contentWindow.postMessage({ jianCode, name: "lilin" }, "*");
  // 获取【联系一下】的dom元素
  const chatDom = document.querySelector(".chat-btn");
  chatDom.addEventListener("click", function () {
    iframe.contentWindow.postMessage(
      { jianCode, name: "lilin", action: "click" },
      "*"
    );
  });
}

window.onload = function () {
  init();
};
