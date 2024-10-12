import { useEffect } from "react";
import styles from "./index.module.css";
import { Button, Input, Form, message } from "antd";
import { login } from "../../fetch/apis.js";
import { setUserInfo } from "../../store/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      const { data } = await login(values);
      if (data) {
        dispatch(setUserInfo(data));
        navigate("/home");
      }
      navigate("/home");
    } catch (error) {
      console.log("error", error);
      messageApi.open({
        type: "error",
        content: "登陆失败",
      });
    }
  };

  useEffect(() => {}, []);

  return (
    <div className={styles.home}>
      {contextHolder}
      <p className={styles.tip}>登陆后可使用简历备注能力哦！</p>
      <div>
        <Form
          name="basic"
          layout="vertical"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="姓名"
            name="name"
            rules={[{ required: true, message: "请输入姓名" }]}
          >
            <Input rows={4} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 0,
              span: 1,
            }}
          >
            <Button type="primary" htmlType="submit">
              登陆
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Home;
