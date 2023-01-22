import { Text, Button, Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const Navbar = (props) => {
  const { fullname } = useSelector((state) => {
    return {
      fullname: state.usersReducer.fullname,
    };
  });

  return (
    <Box className="d-flex flex-row justify-content-between align-items-center px-5 py-3">
      <Text fontSize="3xl">Class Attendance</Text>
      {fullname ? (
        <Button variant="outline" colorScheme="red" style={{ width: "150px" }}>
          Logout
        </Button>
      ) : (
        <Button variant="outline" colorScheme="blue" style={{ width: "150px" }}>
          Login
        </Button>
      )}
    </Box>
  );
};

export default Navbar;
