import React, { createContext, useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "services/firebase";

import { ToastContainer, toast } from "react-toastify";

interface ISignedType {
  signed: boolean;
}
interface AuthContextProps {
  signed?: ISignedType;
  user?: IUserProps;
  signIn?: () => Promise<void>;
  signUp?: () => Promise<void>;
  signOut?(): void;
}

interface IUserProps {
  id: string | undefined;
  email: string;
  signed: boolean;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

interface IAuthProps {
  children: unknown;
}

export function AuthProvider({ children }: IAuthProps) {
  const [user, setUser] = useState({});
  const [message, setMessage] = useState(false);
  const navigate = useNavigate();

  const configToast = {
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  };

  // Validação para manter dados do usuário ao recarregar a página
  useEffect(() => {
    function loadStorageData() {
      const storageUser = localStorage.getItem("@Auth:userData");

      if (storageUser) {
        setUser(JSON.parse(storageUser));
      }
    }

    loadStorageData();
  }, []);

  // Função de login
  async function signIn(email: string, password: string) {
    await auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setUser({
          id: userCredential?.user?.uid,
          email,
          signed: !!email,
        });

        localStorage.setItem(
          "@Auth:userData",
          JSON.stringify({
            id: userCredential?.user?.uid,
            email,
            signed: !!email,
          })
        );
        navigate("/");
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
            setMessage(true);
            toast.error("Endereço de e-mail invalido.", {
              position: "top-right",
              theme: "colored",
              ...configToast,
            });
            break;
          case "auth/user-not-found":
            setMessage(true);
            toast.error("Este usuário não existe.", {
              position: "top-right",
              theme: "colored",
              ...configToast,
            });
            break;
          case "auth/wrong-password":
            setMessage(true);
            toast.error("Senha incorreta.", {
              position: "top-right",
              theme: "colored",
              ...configToast,
            });
            break;
          default:
            setMessage(true);
            toast.error(
              "Algo deu errado! Ocorreu um erro e não foi possível completar essa ação. Por favor, tente novamente.",
              {
                position: "top-right",
                theme: "colored",
                ...configToast,
              }
            );
            break;
        }
      });
  }

  // Função de cadastro de usuário
  async function signUp(email: string, password: string) {
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setUser({
          id: userCredential?.user?.uid,
          email,
          signed: !!email,
        });
        localStorage.setItem(
          "@Auth:userData",
          JSON.stringify({
            id: userCredential?.user?.uid,
            email,
            signed: !!email,
          })
        );
        navigate("/");
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
            setMessage(true);
            toast.error("Endereço de e-mail invalido.", {
              position: "top-right",
              theme: "colored",
              ...configToast,
            });
            break;
          case "auth/email-already-in-use":
            setMessage(true);
            toast.error(
              "Este endereço de email já está sendo usado por outro usuário.",
              {
                position: "top-right",
                theme: "colored",
                ...configToast,
              }
            );
            break;
          default:
            setMessage(true);
            toast.error(
              "Algo deu errado! Ocorreu um erro e não foi possível completar essa ação. Por favor, tente novamente.",
              {
                position: "top-right",
                theme: "colored",
                ...configToast,
              }
            );
            break;
        }
      });
  }

  // Função para encerrar sessão
  function signOut() {
    localStorage.clear();
    setUser({});

    navigate("/");
  }

  const signed = useMemo(
    () => ({ signed: !!user, user, signIn, signUp, signOut }),
    [user]
  );

  return (
    <AuthContext.Provider value={{ signed }}>
      {message ? <ToastContainer /> : ""} {children}
    </AuthContext.Provider>
  );
}
