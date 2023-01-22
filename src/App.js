import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Axios from "axios";
import { API_URL } from "./helper";
import { useDispatch } from "react-redux";
import { loginAction } from "./actions/usersAction";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  const keepLogin = () => {
    let getLocalStorage = localStorage.getItem("attendance_login");
    console.log(getLocalStorage);
    Axios.get(API_URL + "/users/keep", {
      headers: {
        "Authorization": `Bearer ${getLocalStorage}`
      }
    })
      .then((res) => {
        dispatch(loginAction(res.data.dataValues));
        localStorage.setItem("attendance_login", res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    keepLogin()
  }, [])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
