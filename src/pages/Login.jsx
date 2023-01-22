import React from "react";
import { Text, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import Axios from "axios";
import { API_URL } from "../helper";
import { useDispatch } from "react-redux";
import { loginAction } from "../actions/usersAction";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [NIS, setNIS] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginButton = () => {
    Axios.post(API_URL + "/users/login", {
      NIS,
      password,
    })
      .then((res) => {
        console.log(res.data);
        dispatch(loginAction(res.data));
        localStorage.setItem("attendance_login", res.data.token);
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "75vh" }}
    >
      <div className="shadow rounded-4 p-5" style={{ width: 500 }}>
        <Text className="fw-semibold" fontSize="4xl">
          Login
        </Text>
        <Text className="mt-3">NIS</Text>
        <Input className="mt-2" onChange={(e) => setNIS(e.target.value)} />
        <Text className="mt-2">Password</Text>
        <Input
          className="mt-2"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className="mt-5"
          colorScheme="blue"
          style={{ width: "100%" }}
          onClick={loginButton}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
