import styles from './LoginForm.module.css';
import { useForm } from 'react-hook-form';
import { CSSProperties } from 'react';
import WhiteSpace from '../WhiteSpace';

type LoginFormData = {
  email: string;
  password: string;
};

interface LoginForm {
  style?: CSSProperties;
}

export default function LoginForm({ style }: LoginForm) {
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form
      onSubmit={(data) => {
        console.log(data);
        onSubmit(data);
      }}
      className={styles.container}
      style={style}
    >
      <input
        name="email"
        className={styles.inputItem}
        placeholder="이메일"
        {...(register('email'), { required: true })}
      />
      <WhiteSpace size="md" />
      <input
        name="password"
        className={styles.inputItem}
        placeholder="비밀번호"
        type="password"
        {...(register('password'), { required: true })}
      />
      <WhiteSpace size="md" />
      <button type="submit" className={styles.submitButton}>
        <p className={styles.submitText}>로그인</p>
      </button>
    </form>
  );
}
