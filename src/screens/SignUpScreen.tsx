import SectionTitle from "../components/SectionTitle";
import SignUpForm, {
  SignUpFormData,
} from "../components/SignUpScreen/SignUpForm";
import WhiteSpace from "../components/WhiteSpace";
import styles from "./LoginScreen.module.css";
import { Navigate, useNavigate } from "react-router";
import { useAuth } from "../components/AuthProvider";
import { useState } from "react";

function SignUpScreen() {
  const navigation = useNavigate();
  const [isSignUpProgressing, setIsSignUpProgressing] = useState(false);
  const auth = useAuth();
  const goHome = () => {
    navigation("/");
  };

  const onSignUpFormFinish = (values: SignUpFormData) => {
    setIsSignUpProgressing(true);
    auth
      ?.signUp({
        username: values.username,
        password: values.password,
        email: values.email,
      })
      .then((r) => {
        console.log("r: ", r);
        goHome();
      })
      .catch((e) => {
        console.log("e: ", e);
      })
      .finally(() => setIsSignUpProgressing(false));
  };
  const onSignUpFormFinishFailed = () => {};
  return auth?.user ? (
    <Navigate replace to="/" />
  ) : (
    <section className={styles.container}>
      <WhiteSpace size={"md"} />
      <SectionTitle title="회원가입" style={{ marginLeft: 16 }} />
      <WhiteSpace size={"xl"} />
      <SignUpForm
        style={{ padding: "0 36px" }}
        onFinish={onSignUpFormFinish}
        onFinishFailed={onSignUpFormFinishFailed}
        isProgressing={isSignUpProgressing}
      />
    </section>
  );
}

export default SignUpScreen;
