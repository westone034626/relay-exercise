import SectionTitle from "../components/SectionTitle";
import SignUpForm, {
  SignUpFormData,
} from "../components/SignUpScreen/SignUpForm";
import WhiteSpace from "../components/WhiteSpace";
import styles from "./LoginScreen.module.css";

function SignUpScreen() {
  const onSignUpFormFinish = (data: SignUpFormData) => {
    console.log(data);
  };
  const onSignUpFormFinishFailed = () => {};
  return (
    <section className={styles.container}>
      <WhiteSpace size={"md"} />
      <SectionTitle title="회원가입" style={{ marginLeft: 16 }} />
      <WhiteSpace size={"xl"} />
      <SignUpForm
        style={{ padding: "0 36px" }}
        onFinish={onSignUpFormFinish}
        onFinishFailed={onSignUpFormFinishFailed}
      />
    </section>
  );
}

export default SignUpScreen;
