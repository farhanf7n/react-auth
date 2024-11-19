import LoginView from "@/views/login";

import { Helmet } from "react-helmet-async";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>React Auth - Login</title>
      </Helmet>
      <LoginView />
    </>
  );
};

export default Login;
