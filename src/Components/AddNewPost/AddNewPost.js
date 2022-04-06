import { Button } from "@mui/material";
import React from "react";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";
import AddIcon from "@mui/icons-material/Add";

const AddNewPost = () => {
  return (
    <div className="sectionRoot wrapper">
      <SectionHeader text={"Want to add new post?"}></SectionHeader>
      <Button variant="contained" size="large">
        <AddIcon /> Add
      </Button>
      <SectionHeader text={"My Posts"} />
      <div className=""></div>
    </div>
  );
};

export default AddNewPost;
