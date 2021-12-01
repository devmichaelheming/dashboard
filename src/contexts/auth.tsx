import React, { createContext, useMemo, useState } from "react";
import * as auth from "services/auth";

interface AuthContextProps {
  signed: boolean;
  user: Object | null;
  signIn(): Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = function ({ children }: any) {
  const [user, setUser] = useState<Object | null>(null);

  async function signIn() {
    const response = await auth.signIn();
    setUser(response.user);
  }

  const signed = useMemo(() => ({ signed: !!user, user, signIn }), [user]);

  return <AuthContext.Provider value={signed}>{children}</AuthContext.Provider>;
};

export default AuthContext;
