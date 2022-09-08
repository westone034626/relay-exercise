import { useMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import SectionTitle from "../components/SectionTitle";
import SignUpForm, {
  SignUpFormData,
} from "../components/SignUpScreen/SignUpForm";
import WhiteSpace from "../components/WhiteSpace";
import styles from "./LoginScreen.module.css";
import { SignUpScreenCreateUserMutation } from "./__generated__/SignUpScreenCreateUserMutation.graphql";
import { useNavigate } from "react-router";

function SignUpScreen() {
  const navigation = useNavigate();
  const goHome = () => {
    navigation("/");
  };

  const [commitSignUp, isInFlightSignUp] =
    useMutation<SignUpScreenCreateUserMutation>(graphql`
      mutation SignUpScreenCreateUserMutation($fields: CreateUserFieldsInput!) {
        signUp(input: { fields: $fields }) {
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

  const onSignUpFormFinish = (values: SignUpFormData) => {
    commitSignUp({
      variables: {
        fields: {
          username: values.username,
          email: values.email,
          password: values.password,
        },
      },
      onCompleted: (res, rej) => {
        // TODO: rej일 때 유형을 분류하고 유형에 따라 유저에게 메시지로 알려주기
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
        isProgressing={isInFlightSignUp}
      />
    </section>
  );
}

export default SignUpScreen;
