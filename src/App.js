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
import { useEffect, useState } from "react";

function App() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const keepLogin = () => {
    let getLocalStorage = localStorage.getItem("attendance_login");
    console.log(getLocalStorage);
    if (getLocalStorage) {
      Axios.get(API_URL + "/users/keep", {
        headers: {
          Authorization: `Bearer ${getLocalStorage}`,
        },
      })
        .then((res) => {
          dispatch(loginAction(res.data.dataValues));
          setLoading(false);
          localStorage.setItem("attendance_login", res.data.token);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    keepLogin();
  }, []);

  return (
    <div>
      <Navbar loading={loading} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
