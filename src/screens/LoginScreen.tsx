import LoginForm from "../components/LoginScreen/LoginForm";
import SectionTitle from "../components/SectionTitle";
import WhiteSpace from "../components/WhiteSpace";
import styles from "./LoginScreen.module.css";

function LoginScreen() {
  const onLoginFormFinish = () => {};
  const onLoginFormFinishFailed = () => {};
  return (
    <section className={styles.container}>
      <WhiteSpace size={"md"} />
      <SectionTitle title="로그인" style={{ marginLeft: 16 }} />
      <WhiteSpace size={"xl"} />
      <LoginForm
        style={{ padding: "0 36px" }}
        onFinish={onLoginFormFinish}
        onFinishFailed={onLoginFormFinishFailed}
      />
    </section>
  );
}

export default LoginScreen;
