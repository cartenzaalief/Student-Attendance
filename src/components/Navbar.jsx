import { Text, Button, Box } from "@chakra-ui/react";
import React from "react";

const Navbar = (props) => {
  return (
    <Box className="d-flex flex-row justify-content-between align-items-center px-5 py-3">
      <Text fontSize="3xl">Class Attendance</Text>
      <Button variant="outline" colorScheme="blue" style={{ width: "150px" }}>
        Login
      </Button>
    </Box>
  );
};

export default Navbar;
