import { useLocalStorageState } from "ahooks";
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { useLazyLoadQuery, useMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { AuthProviderViewerQuery } from "./__generated__/AuthProviderViewerQuery.graphql";
import {
  AuthProviderLoginMutation,
  AuthProviderLoginMutation$data,
  LogInInput,
} from "./__generated__/AuthProviderLoginMutation.graphql";
import {
  AuthProviderCreateUserMutation,
  AuthProviderCreateUserMutation$data,
  CreateUserFieldsInput,
} from "./__generated__/AuthProviderCreateUserMutation.graphql";
import {
  AuthProviderLogOutMutation,
  AuthProviderLogOutMutation$data,
} from "./__generated__/AuthProviderLogOutMutation.graphql";

const AuthContext = createContext<{
  user: UserData | null;
  login: (values: LogInInput) => Promise<AuthProviderLoginMutation$data>;
  logout: () => Promise<AuthProviderLogOutMutation$data>;
  signUp: (
    values: CreateUserFieldsInput
  ) => Promise<AuthProviderCreateUserMutation$data>;
} | null>(null);

interface UserData {
  username: string | null;
  email: string | null;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [commitLogin, isInFlightLogin] =
    useMutation<AuthProviderLoginMutation>(graphql`
      mutation AuthProviderLoginMutation($input: LogInInput!) {
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

  const [commitSignUp, isInFlightSignUp] =
    useMutation<AuthProviderCreateUserMutation>(graphql`
      mutation AuthProviderCreateUserMutation($fields: CreateUserFieldsInput!) {
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

  const [commitLogout, inInFlightLogout] =
    useMutation<AuthProviderLogOutMutation>(graphql`
      mutation AuthProviderLogOutMutation {
        logOut(input: { clientMutationId: "logOut" }) {
          clientMutationId
          ok
        }
      }
    `);

  const [sessionId, setSessionId] = useLocalStorageState<string>(
    "todayChecksSessionId",
    {
      defaultValue: "",
    }
  );
  const { viewer } = useLazyLoadQuery<AuthProviderViewerQuery>(
    graphql`
      query AuthProviderViewerQuery($noSessionId: Boolean!) {
        viewer @skip(if: $noSessionId) {
          sessionToken
          user {
            username
            email
          }
        }
      }
    `,
    { noSessionId: !Boolean(sessionId) }
  );

  const [user, setUser] = useState<UserData | null>(viewer?.user || null);

  const login = useCallback(async (values: LogInInput) => {
    return new Promise<AuthProviderLoginMutation$data>((onSuccess, onFail) => {
      commitLogin({
        variables: { input: values },
        onCompleted: (res, rej) => {
          if (rej) {
            onFail(rej);
            return;
          }
          setSessionId(res.logIn?.viewer.sessionToken || "");
          setUser(res.logIn?.viewer.user || null);
          onSuccess(res);
        },
        onError: onFail,
      });
    });
  }, []);

  const logout = useCallback(async () => {
    return new Promise<AuthProviderLogOutMutation$data>((onSuccess, onFail) => {
      commitLogout({
        variables: {},
        onCompleted: (res, rej) => {
          if (rej) {
            onFail(rej);
            return;
          }
          setSessionId("");
          setUser(null);
          onSuccess(res);
        },
        onError: onFail,
      });
    });
  }, []);

  const signUp = useCallback(async (values: CreateUserFieldsInput) => {
    return new Promise<AuthProviderCreateUserMutation$data>(
      (onSuccess, onFail) => {
        commitSignUp({
          variables: { fields: values },
          onCompleted: (res, rej) => {
            if (rej) {
              onFail(rej);
              return;
            }
            setSessionId(res.signUp?.viewer.sessionToken || "");
            setUser(res.signUp?.viewer.user || null);
            onSuccess(res);
          },
          onError: onFail,
        });
      }
    );
  }, []);
  const auth = useMemo(() => {
    return { user, login, logout, signUp };
  }, [user, login, logout, signUp]);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
