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
  const [info, setInfo] = useState([]);
  // 简历编号
  const [cvId, setCvId] = useState("");
  const [resIdEncode, setResIdEncode] = useState("");
  // 当前用户名
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [open, setOpen] = useState(true);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const getQuery = (url) => {
    const result = {};
    const reg1 = /([^?=&#]+)=([^?=&#]+)/g;
    const reg2 = /#([^?=&#]+)/g;
    url.replace(reg1, (n, x, y) => (result[x] = y));
    url.replace(reg2, (n, x) => (result["HASH"] = x));
    console.log("result:", result);
    return result;
  };

  const getCVInfoData = (cvId, token) => {
    return getCVInfo({ cv_id: cvId, token })
      .then(({ data }) => {
        setInfo(data);
        return data;
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }

  useEffect(() => {
    // 监听插件回调
    window.addEventListener("message", (res) => {
      // 获得简历编号、用户名、行为
      console.log('appjs', res)
      const { url, cvId, name, action, token, resIdEncode } = res?.data || {};
      // const { res_id_encode } = getQuery(url) || {};
      if (!token) {
        messageApi.open({
          type: "error",
          content: "请先登录内部系统",
        });
        return;
      }
      console.log("lilin222", cvId, resIdEncode, name);
      setCvId(cvId);
      setName(name);
      setToken(token);
      setResIdEncode(resIdEncode);
      // 进入猎聘详情页，获取存储的简历信息
      if (cvId && !action) {
        getCVInfoData(cvId, token);
      }
      // 点击联系按钮时，触发修改简历阅读状态
      if (action === "click") {
        setCVStatus({ cv_id: cvId, token }).then(() => {
          getCVInfoData(cvId, token);
        }).catch(() => {});
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
        <Home info={info} getCVInfoData={getCVInfoData} cvId={cvId} name={name} token={token} resIdEncode= {resIdEncode}/>
      </Drawer>
    </>
  );
}

export default App;
