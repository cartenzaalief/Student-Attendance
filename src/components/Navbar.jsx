import { Text, Button, Box, Spinner } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAction } from "../actions/usersAction";

const Navbar = (props) => {
  const dispatch = useDispatch();

  const { fullname } = useSelector((state) => {
    return {
      fullname: state.usersReducer.fullname,
    };
  });

  const logoutButton = () => {
    dispatch(logoutAction());
  };

  return (
    <Box className="d-flex flex-row justify-content-between align-items-center px-5 py-3">
      <Text fontSize="3xl">Class Attendance</Text>
      {props.loading ? (
        <Spinner />
      ) : fullname ? (
        <Link to="/">
          <Button
            variant="outline"
            colorScheme="red"
            style={{ width: "150px" }}
            onClick={logoutButton}
          >
            Logout
          </Button>
        </Link>
      ) : (
        <Link to="/login">
          <Button
            variant="outline"
            colorScheme="blue"
            style={{ width: "150px" }}
          >
            Login
          </Button>
        </Link>
      )}
    </Box>
  );
};

export default Navbar;
