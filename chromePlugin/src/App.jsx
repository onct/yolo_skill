import { useState, useEffect } from "react";
import Router from "../src/router/index";
import { Button, Drawer } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";
import Styles from "./app.module.css";
import { getCVInfo, setCVStatus } from "./fetch/apis";

function App() {
  // 简历状态
  const [info, setInfo] = useState(null);
  // 简历code
  const [jianCode, setJianCode] = useState("");

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
      console.log("res", res);
      const { jianCode, action } = res?.data || {};
      if (jianCode && !action) {
        setJianCode(jianCode);
        // getCVInfo({ cv_id: jianCode }).then(({ data }) => {
        //   setInfo(data);
        // }).catch((err) => {
        //   console.log("Error:", err);
        // });
      }
      if (action === "click") {
        // setCVStatus({ cv_id: jianCode });
      }
    });
  }, []);

  return (
    <>
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
        <Router info={info} jianCode={jianCode} />
      </Drawer>
    </>
  );
}

export default App;
