import { useState, useEffect } from "react";
// import Router from "../src/router/index";
import Home from "./pages/Home/index";
import { Button, Drawer, message } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";
import Styles from "./app.module.css";
import { getCVInfo, setCVStatus } from "./fetch/apis";

function App() {
  const [messageApi, contextHolder] = message.useMessage();
  // 简历信息
  const [info, setInfo] = useState(null);
  // 简历编号
  const [jianCode, setJianCode] = useState("");
  // 当前用户名
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    // 监听插件回调
    window.addEventListener("message", (res) => {
      // 获得简历编号、用户名、行为
      const { jianCode, name, action, token } = res?.data || {};
      console.log('前台111', token);
      if (!token) {
        messageApi.open({
          type: "error",
          content: "请先登录内部系统",
        });
        return;
      }
      console.log("lilin222", jianCode, name, action, token);
      setJianCode(jianCode);
      setName(name);
      setToken(token);
      // 进入猎聘详情页，获取存储的简历信息
      if (jianCode && !action) {
        getCVInfo({ cv_id: jianCode, token })
          .then(({ data }) => {
            setInfo(data);
          })
          .catch((err) => {
            console.log("Error:", err);
            messageApi.open({
              type: "error",
              content: "请先登录内部系统",
            });
          });
      }
      // 点击联系按钮时，触发修改简历阅读状态
      if (action === "click") {
        setCVStatus({ cv_id: jianCode, token }).catch(() => {
          messageApi.open({
            type: "error",
            content: "请先登录内部系统",
          });
        });
      }
    });
  }, []);

  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={showDrawer} className={Styles.home}>
        简历工具🔧
      </Button>
      <Drawer
        title="简历档案"
        onClose={onClose}
        open={open}
        mask={false}
        closeIcon={<DoubleRightOutlined />}
      >
        <Home info={info} jianCode={jianCode} name={name} token={token} />
      </Drawer>
    </>
  );
}

export default App;
