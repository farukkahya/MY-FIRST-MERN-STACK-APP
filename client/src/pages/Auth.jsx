import React, { useState } from "react";
import { loginAction, registerAction } from "../redux/acitons/auth";
import { useDispatch } from "react-redux";
const Auth = () => {
  const [signUp, setSignUp] = useState(true);
  const [authData, setAuthData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };
  const authFunc = () => {
    if (signUp) {
      dispatch(registerAction(authData));
    } else {
      dispatch(loginAction(authData));
    }
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 z-50">
      <div className="w-1/3 bg-white">
        <h1 className="text-2xl text-indigo-700 font-bold">
          {signUp ? "REGISTER" : "LOGIN"}
        </h1>
        <div className="flex flex-col space-y-3 my-5">
          {signUp && (
            <input
              type="text"
              value={authData.username}
              name="username"
              onChange={handleChange}
              placeholder="User Name"
              className="input-style"
            />
          )}
          <input
            type="email"
            value={authData.email}
            name="email"
            onChange={handleChange}
            placeholder="E-Mail"
            className="input-style"
          />
          <input
            value={authData.password}
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Password"
            className="input-style"
          />
        </div>
        <div className="text-red-500 text-xs cursor-pointer mb-4">
          <span onClick={() => setSignUp(!signUp)}>
            {signUp ? "Daha önce kayıt oldunuz mu?" : "Kayıtlı değil misiniz?"}
          </span>
        </div>
        <div onClick={authFunc} className="cursor-pointer hover:bg-indigo-800 w-full p-2 text-center bg-indigo-600 text-white rounded-md">
          {signUp ? "Kayıt Ol" : "Giriş Yap"}
        </div>
      </div>
    </div>
  );
};

export default Auth;
