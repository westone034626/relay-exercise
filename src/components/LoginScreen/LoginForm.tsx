import styles from "./LoginForm.module.css";
import { CSSProperties } from "react";
import { Form, Input } from "antd";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";

export interface LoginFormData {
  username: string;
  password: string;
}
interface LoginFormProps {
  style?: CSSProperties;
  onFinish: (data: LoginFormData) => void;
  onFinishFailed: (errorInfo: ValidateErrorEntity<LoginFormData>) => void;
  isProgressing: boolean;
}

export default function LoginForm({
  style,
  onFinish,
  onFinishFailed,
  isProgressing,
}: LoginFormProps) {
  return (
    <Form
      style={style}
      name="loginForm"
      wrapperCol={{ span: 24 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "아이디를 입력해주세요." }]}
      >
        <Input
          placeholder="아이디"
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
        <button
          style={{ opacity: isProgressing ? 0.5 : 1 }}
          disabled={isProgressing}
          className={styles.submitButton}
        >
          {isProgressing ? "진행 중..." : "로그인"}
        </button>
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
