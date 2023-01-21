import React from "react";
import {
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Stack,
  Radio,
  RadioGroup,
  Select,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { API_URL } from "../helper";
import App from "../App";

const Register = (props) => {
  const [NIS, setNIS] = useState("");
  const [fullname, setFullname] = useState("");
  const [TTL, setTTL] = useState("");
  const [inputClass, setInputClass] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastId, setLastId] = useState(0);

  const registerButton = () => {
    Axios.post(API_URL + "/users/register", {
      NIS,
      fullname,
      TTL,
      inputClass,
      gender,
      address,
      phone,
      email,
      password,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getLastId = () => {
    Axios.get(API_URL + "/users")
      .then((res) => {
        setLastId(res.data.length + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getLastId();
  }, []);

  const generateNIS = () => {
    let yearNIS = new Date().getFullYear().toString().slice(2, 4);
    let monthNIS = (new Date().getMonth() + 1)
      .toLocaleString()
      .padStart(2, "0");

    let idNIS = lastId;
    if (idNIS < 10) {
      idNIS = "00" + idNIS;
    } else if (idNIS > 10 && idNIS < 100) {
      idNIS = "0" + idNIS;
    }

    let classNIS = "";
    if (inputClass == "Science") {
      classNIS = "Sci";
    } else {
      classNIS = "Soc";
    }

    setNIS(yearNIS + monthNIS + idNIS + classNIS);
  };

  const generatePass = () => {
    setPassword(Math.random().toString(36).slice(-8));
  }

  return (
    <div className="mt-4 px-5">
      <Text className="ms-5" fontSize="2xl">
        Student Register
      </Text>
      <div className="d-flex mt-5 justify-content-between">
        <div style={{ width: 530 }}>
          <Text>NIS</Text>
          <InputGroup size="md">
            <Input
              className="mt-3"
              pr="4.5rem"
              value={NIS}
            />
            <InputRightElement width="4.5rem" className="me-2 mt-3">
              <Button h="1.75rem" size="sm" onClick={generateNIS}>
                Generate
              </Button>
            </InputRightElement>
          </InputGroup>
          <Text className="mt-3">Full Name</Text>
          <Input
            className="mt-3"
            onChange={(e) => setFullname(e.target.value)}
          />
          <Text className="mt-3">Place and Date of Birth</Text>
          <Input className="mt-3" onChange={(e) => setTTL(e.target.value)} />
          <Text className="mt-3">Email</Text>
          <Input className="mt-3" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div style={{ width: 530 }}>
          <Text>Password</Text>
          <InputGroup size="md">
            <Input
              className="mt-3"
              pr="4.5rem"
              value={password}
            />
            <InputRightElement width="4.5rem" className="me-2 mt-3">
              <Button h="1.75rem" size="sm" onClick={generatePass}>
                Generate
              </Button>
            </InputRightElement>
          </InputGroup>
          <Text className="mt-3">Phone</Text>
          <Input
            className="mt-3"
            type="number"
            onChange={(e) => setPhone(e.target.value)}
          />
          <Text className="mt-3">Address</Text>
          <Input
            className="mt-3"
            onChange={(e) => setAddress(e.target.value)}
          />
          <div className="d-flex mt-3 justify-content-between">
            <div style={{ width: 250 }}>
              <Text className="mb-3">Class</Text>
              <Select
                placeholder="Select Class"
                onChange={(e) => setInputClass(e.target.value)}
              >
                <option value="Science">Science</option>
                <option value="Social">Social</option>
              </Select>
            </div>
            <div style={{ width: 250 }}>
              <Text>Gender</Text>
              <RadioGroup className="mt-4">
                <Stack direction="row" spacing={110}>
                  <Radio
                    value="Male"
                    onChange={(e) => setGender(e.target.value)}
                  >
                    Male
                  </Radio>
                  <Radio
                    value="Female"
                    onChange={(e) => setGender(e.target.value)}
                  >
                    Female
                  </Radio>
                </Stack>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
      <Button
        className="mt-5"
        colorScheme="blue"
        style={{ width: 530 }}
        onClick={registerButton}
      >
        Register
      </Button>
    </div>
  );
};

export default Register;
