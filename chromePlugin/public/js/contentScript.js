function init() {
  const iframe = document.createElement("iframe");
  iframe.src = "http://localhost:5173/";
  iframe.setAttribute("id", "yolo__iframe");
  iframe.setAttribute("allowTransparency", "true");

  document.body.appendChild(iframe);

  // 选择简历编码
  const jianDom = document.querySelector(".name");
  const jianCode = jianDom.getHTML().trim();
  // 获取【联系一下】的dom元素
  const chatDom = document.querySelector(".meta-box");
  chatDom.addEventListener("click", function () {
    iframe.contentWindow.postMessage({ jianCode }, '*');
  });
}

window.onload = function() {
  init();
}
