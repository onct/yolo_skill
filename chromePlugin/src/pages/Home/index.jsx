import styles from "./index.module.css";
import { Button, Input, Form, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
// import { useSelector } from "react-redux";
import { addRemark } from "../../fetch/apis";
const { TextArea } = Input;

const Home = (props) => {
  const [messageApi, contextHolder] = message.useMessage();
  // const userInfo = useSelector((state) => state.userInfo);
  // const { name } = userInfo || {};
  const { jianCode, info, name } = props || {};

  const onFinish = (values) => {
    console.log("Success:", { ...values, name, jianCode });
    // 备注、用户名、简历编号
    addRemark({ ...values, name, jianCode })
      .then((res) => {
        const { code, data } = res || {};
        code === 1 && messageApi.open({
          type: "success",
          content: "提交成功",
        });
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };


  return (
    <div className={styles.home}>
      {contextHolder}
      <p className={info ? styles.hasInfo : styles.noInfo}>
        <UserOutlined />
        <span>
          该候选人
          {info ? "已" : "未"}联系
        </span>
      </p>
      {!info && (
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
            <Form.Item label="备注" name="describe">
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 0,
                span: 1,
              }}
            >
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
      {info && (
        <div>
          <p>
            <span>联系人：13569127156</span>
          </p>
          <p>
            <span>备注：</span>
          </p>
        </div>
      )}
    </div>
  );
};
export default Home;
