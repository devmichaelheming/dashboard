interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: "asd54a1561561561561561nhjnhnd1a46ds",
        user: {
          name: "michael",
          email: "devmichael.heming@gmail.com",
        },
      });
    }, 2000);
  });
}
