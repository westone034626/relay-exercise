import styles from "./LoginForm.module.css";
import { CSSProperties } from "react";
import { Form, Input } from "antd";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";

interface LoginFormData {
  email: string;
  password: string;
}
interface LoginForm {
  style?: CSSProperties;
  onFinish: (data: LoginFormData) => void;
  onFinishFailed: (errorInfo: ValidateErrorEntity<LoginFormData>) => void;
}

export default function LoginForm({
  style,
  onFinish,
  onFinishFailed,
}: LoginForm) {
  return (
    <Form
      style={style}
      name="loginForm"
      wrapperCol={{ span: 24 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: "이메일을 입력해주세요." }]}
      >
        <Input
          type={"email"}
          placeholder="이메일"
          style={getInputItemStyle()}
          className={styles.removeAutoCompleteHighlight}
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "비밀번호를 입력해주세요." }]}
      >
        <Input
          type="password"
          placeholder="비밀번호"
          style={getInputItemStyle()}
          className={styles.removeAutoCompleteHighlight}
        />
      </Form.Item>

      <Form.Item>
        <button className={styles.submitButton}>로그인</button>
      </Form.Item>
    </Form>
  );

  function getInputItemStyle(): CSSProperties {
    return {
      padding: 12,
      backgroundColor: "#ffffff",
      borderRadius: 12,
      width: "100%",
    };
  }
}
