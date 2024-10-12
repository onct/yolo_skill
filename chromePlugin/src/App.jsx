import { useState } from "react";
import Router from "../src/router/index";
import { Button, Drawer } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";
import Styles from './app.module.css';
function App() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
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
        <Router />
      </Drawer>
    </>
  );
}

export default App;
