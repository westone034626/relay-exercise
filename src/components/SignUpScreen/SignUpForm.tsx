import styles from "./SignUpForm.module.css";
import { CSSProperties } from "react";
import { Form, Input } from "antd";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";

export interface SignUpFormData {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}
interface SignUpForm {
  style?: CSSProperties;
  onFinish: (data: SignUpFormData) => void;
  onFinishFailed: (errorInfo: ValidateErrorEntity<SignUpFormData>) => void;
}

export default function SignUpForm({
  style,
  onFinish,
  onFinishFailed,
}: SignUpForm) {
  return (
    <Form
      style={style}
      name="signUpForm"
      wrapperCol={{ span: 24 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "닉네임을 입력해주세요." }]}
      >
        <Input placeholder="닉네임" style={getInputItemStyle()} />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[
          { required: true, message: "이메일을 입력해주세요." },
          { type: "email", message: "이메일 형식으로 입력해주세요." },
        ]}
        hasFeedback
      >
        <Input placeholder="이메일" style={getInputItemStyle()} />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "비밀번호를 입력해주세요." }]}
        hasFeedback
      >
        <Input
          type="password"
          placeholder="비밀번호"
          style={getInputItemStyle()}
        />
      </Form.Item>

      <Form.Item
        name="passwordConfirm"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "비밀번호 확인을 진행해주세요.",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("비밀번호가 일치하지 않습니다."));
            },
          }),
        ]}
      >
        <Input
          type="password"
          placeholder="비밀번호 확인"
          style={getInputItemStyle()}
        />
      </Form.Item>

      <Form.Item>
        <button
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className={styles.submitButton}
        >
          회원가입
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
