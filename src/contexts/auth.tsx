import React, { createContext, useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "services/firebase";

import { ToastContainer, toast } from "react-toastify";

interface AuthContextProps {
  signed?: boolean;
  user: any;
  signIn: any;
  signUp: any;
  signOut(): void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = function ({ children }: any) {
  const [user, setUser] = useState<Object | null>(null);
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
  function signIn(email: string, password: string) {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        setUser({
          id: userCredential?.user?.uid,
          email,
          password,
          signed: !!email,
        });

        localStorage.setItem(
          "@Auth:userData",
          JSON.stringify({
            id: userCredential?.user?.uid,
            email,
            password,
            signed: !!email,
          }),
        );
        navigate("/");
      })
      .catch(error => {
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
              },
            );
            break;
        }
      });
  }

  // Função de cadastro de usuário
  function signUp(email: string, password: string) {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        setUser({
          id: userCredential?.user?.uid,
          email,
          password,
          signed: !!email,
        });
        localStorage.setItem(
          "@Auth:userData",
          JSON.stringify({
            id: userCredential?.user?.uid,
            email,
            password,
            signed: !!email,
          }),
        );
        navigate("/");
      })
      .catch(error => {
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
              },
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
              },
            );
            break;
        }
      });
  }

  // Função para encerrar sessão
  function signOut() {
    localStorage.clear();
    setUser(null);

    navigate("/");
  }

  const signed = useMemo(
    () => ({ signed: !!user, user, signIn, signUp, signOut }),
    [user],
  );

  return (
    <AuthContext.Provider value={signed}>
      {message ? <ToastContainer /> : ""} {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
