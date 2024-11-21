import RegiserView from "@/views/register";

import { Helmet } from "react-helmet-async";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>React Auth - Register</title>
      </Helmet>
      <RegiserView />
    </>
  );
};

export default Login;
