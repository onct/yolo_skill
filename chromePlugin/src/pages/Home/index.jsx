import { useState } from 'react';
import styles from "./index.module.css";
import { Button, Input, Form, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
// import { useSelector } from "react-redux";
import { addRemark } from "../../fetch/apis";
const { TextArea } = Input;

const Home = (props) => {
  const [loading, setLoading] = useState(false);
  const { cvId, info, name, token, getCVInfoData, resIdEncode } = props || {};
  const [messageApi, contextHolder] = message.useMessage();
  // const userInfo = useSelector((state) => state.userInfo);
  // const { name } = userInfo || {};

  const onFinish = (values) => {
    setLoading(true);
    console.log("Success:", resIdEncode, { ...values, name, cv_id: cvId });
    // 备注、用户名、简历编号
    addRemark({ ...values, created_by: name, cv_id: cvId, token })
      .then(async (res) => {
        const { code } = res || {};
        await getCVInfoData(cvId, token);
        code === 1 &&
          messageApi.open({
            type: "success",
            content: "提交成功",
          });
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };
  const list = info.map((item, index) => (
    <div className={styles.content} key={index}>
      <span className={styles.content__name}>
        备注人：{item && item.created_by}
      </span>
      <span className={styles.content__desc}>
        备注内容：{item && item.content}
      </span>
      <span className={styles.content__time}>
        备注时间：{item && item.created_at}
      </span>
    </div>
  ));

  return (
    <div className={styles.home}>
      {contextHolder}
      <div>简历编号
        <div className={styles.resIDcode}>{resIdEncode}</div>
        不一致时或为空时请刷新页面
      </div>
      <p className={info.length ? styles.hasInfo : styles.noInfo}>
        <UserOutlined />
        <span>该候选人{info.length ? "已" : "未"}联系</span>
      </p>
      {info.length > 0 && <div>{list}</div>}
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
          <Form.Item label="备注" name="content">
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 0,
              span: 1,
            }}
          >
            <Button loading={loading} type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Home;
