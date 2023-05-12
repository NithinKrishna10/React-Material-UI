import React from "react";
import Test from "../Test";
import NavApp from "../components/NavApp";
import MenuDemo from "../components/MenuDemo";
import TabsDemo from "../components/TabsDemo";
import CardDemo from "../components/CardDemo";
import { Box } from "@mui/material";
import DialogDemo from "../components/DialogDemo";
import ModalDemo from "../components/ModalDemo";
import ListDemo from "../components/ListDemo";
import AutoCompleteDemo from "../components/AutoCompleteDemo";


const TestPage = () => {
  return (
    <div>
      <NavApp />
      <br />
      <br />
      <Test />
      <br />
      <MenuDemo />

      <br />

      <TabsDemo />
      <br />

      <Box sx={{ display: "flex", margin: "5px" }}>
        <CardDemo /> <CardDemo />
      </Box>

      <br />
      <DialogDemo />
      <br />
      <ModalDemo />

      <br />
      <AutoCompleteDemo />
      <ListDemo />
    </div>
  );
};

export default TestPage;
