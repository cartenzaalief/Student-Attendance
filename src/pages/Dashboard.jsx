import React, { useEffect, useState } from "react";
import { Text, Button, ButtonGroup } from "@chakra-ui/react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useSelector } from "react-redux";
import Vespa from "../assets/images/vespa.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Dashboard = (props) => {
  const { fullname } = useSelector((state) => {
    return {
      fullname: state.usersReducer.fullname,
    };
  });

  let time = new Date().toLocaleTimeString();

  const [calendar, setCalendar] = useState(new Date());
  const [date, setDate] = useState("");
  const [clock, setClock] = useState(time);

  const updateTime = () => {
    let newTime = new Date().toLocaleTimeString();
    setClock(newTime);
  };

  setInterval(updateTime);

  const currentDate = () => {
    let date = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    let day = new Date().getDay();

    switch (month) {
      case 0:
        month = "January";
        break;
      case 1:
        month = "February";
        break;
      case 2:
        month = "March";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "June";
        break;
      case 6:
        month = "July";
        break;
      case 7:
        month = "August";
        break;
      case 8:
        month = "September";
        break;
      case 9:
        month = "October";
        break;
      case 10:
        month = "November";
        break;
      case 11:
        month = "December";
        break;
      default:
        break;
    }

    switch (day) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
        break;
      default:
        break;
    }

    setDate(day + ", " + date + " " + month + " " + year);
  };

  useEffect(() => {
    currentDate();
  }, []);

  return (
    <div className="mt-4 mx-5 d-flex gap-5">
      <div style={{ width: "50vw" }}>
        <Text className="ms-5" fontSize="2xl">
          Dashboard
        </Text>
        <div
          className="mt-4 py-5 d-flex flex-column justify-content-center align-items-center rounded-5"
          style={{ background: "#F8F8F8" }}
        >
          <div className="fs-4 fw-bold">{date}</div>
          <div
            className="text-muted"
            style={{ fontSize: 96, fontWeight: 700, marginTop: -15 }}
          >
            {clock}
          </div>
          <ButtonGroup className="mt-2" gap="4">
            <Button colorScheme="blue">Check In</Button>
            <Button colorScheme="red">Check Out</Button>
          </ButtonGroup>
        </div>
        <div className="mt-5 d-flex justify-content-around">
          <div className="d-flex">
            <AiOutlineLoading3Quarters
              className="mt-1"
              color="skyblue"
              size={40}
            />
            <div className="ms-3">
              <Text>Check In</Text>
              <Text>09:00</Text>
            </div>
          </div>
          <div className="d-flex">
            <AiOutlineLoading3Quarters
              className="mt-1"
              color="pink"
              size={40}
            />
            <div className="ms-3">
              <Text>Check Out</Text>
              <Text>18:00</Text>
            </div>
          </div>
        </div>
      </div>
      <div
        className="d-flex flex-column align-items-center"
        style={{ marginLeft: 50 }}
      >
        <div
          className="p-4 rounded-5 d-flex"
          style={{ background: "#65A2B1", color: "white" }}
        >
          <img
            src={Vespa}
            alt=""
            style={{
              height: 200,
              marginLeft: -70,
              marginRight: -40,
              marginTop: -10,
              marginBottom: -65,
            }}
          />
          <div className="mt-1">
            <Text fontSize="2xl">Welcome to the class!</Text>
            {fullname ? (
              <Text fontSize="3xl" fontWeight="semibold">{fullname}</Text>
            ) : (
              <Text>Please login first</Text>
            )}
            <Text fontSize="2xl">Dont forget to attendance!</Text>
          </div>
        </div>
        <div className="mt-5">
          <Calendar onChange={setCalendar} value={calendar} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
