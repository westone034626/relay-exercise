import LoginForm, { LoginFormData } from "../components/LoginScreen/LoginForm";
import SectionTitle from "../components/SectionTitle";
import WhiteSpace from "../components/WhiteSpace";
import { useMutation } from "react-relay";
import styles from "./LoginScreen.module.css";
import graphql from "babel-plugin-relay/macro";
import { LoginScreenLoginMutation } from "./__generated__/LoginScreenLoginMutation.graphql";
import { useNavigate } from "react-router";

function LoginScreen() {
  const navigation = useNavigate();
  const goHome = () => {
    navigation("/");
  };
  const onLoginFormFinish = (values: LoginFormData) => {
    commitLogin({
      variables: { input: values },
      onCompleted: (res, rej) => {
        if (rej) {
          console.log(rej);
          return;
        }
        console.log(res);
        goHome();
      },
      onError: console.log,
    });
  };
  const onLoginFormFinishFailed = () => {};

  const [commitLogin, isInFlightLogin] =
    useMutation<LoginScreenLoginMutation>(graphql`
      mutation LoginScreenLoginMutation($input: LogInInput!) {
        logIn(input: $input) {
          viewer {
            sessionToken
            user {
              username
              email
            }
          }
        }
      }
    `);
  return (
    <section className={styles.container}>
      <WhiteSpace size={"md"} />
      <SectionTitle title="로그인" style={{ marginLeft: 16 }} />
      <WhiteSpace size={"xl"} />
      <LoginForm
        isProgressing={isInFlightLogin}
        style={{ padding: "0 36px" }}
        onFinish={onLoginFormFinish}
        onFinishFailed={onLoginFormFinishFailed}
      />
    </section>
  );
}

export default LoginScreen;
