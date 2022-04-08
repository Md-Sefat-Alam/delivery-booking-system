import React, { useRef, useState } from "react";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import InputFieldPost from "../Shared/InputFieldPost/InputFieldPost";
import AddIcon from "@mui/icons-material/Add";
import useAuth from "../../Hooks/useAuth";
const axios = require("axios");

const AddNewPost = () => {
  const { setMessage, setError } = useAuth();
  const productTypeRef = useRef();
  const productImageRef = useRef();
  const productNameRef = useRef();
  const productCostRef = useRef();
  const productDescriptionRef = useRef();

  const handlePostSubmit = (e) => {
    e.preventDefault();
    // setPostData({productTypeRef.current.value, })
    const pType = productTypeRef.current.value;
    const pName = productNameRef.current.value;
    const img = productImageRef.current.value;
    const pCost = productCostRef.current.value;
    const pDescription = productDescriptionRef.current.value;

    const today = new Date();
    // const dd = String(today.getDate().padStart(2, '0'));
    // const mm = String()
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + " " + time;

    const postData = {
      pType,
      pName,
      img,
      pCost,
      pDescription,
      date: dateTime,
    };

    if (pName && img && pCost && pDescription) {
      axios
        .post("http://localhost:5000/addnewpost", postData)
        .then((response) => {
          if (response.status === 200) {
            setMessage("Successfully Added an post");
            productNameRef.current.value = "";
            productImageRef.current.value = "";
            productCostRef.current.value = "";
          }
        })
        .catch((error) => {
          // console.log(error);
        });
    } else {
      setError("Enter All field text proper");
    }
  };
  return (
    <div className="sectionRoot wrapper">
      <SectionHeader text={"Want to add new post?"}></SectionHeader>
      {/* <Button variant="contained" size="large">
        <AddIcon /> Add
      </Button> */}
      <div>
        <form className="flex justify-center">
          <div className="w-1/2">
            <div className=" py-2">
              <span className="w-full text-sm text-gray-400">Product Type</span>
              <select
                ref={productTypeRef}
                className="w-full border rounded p-1"
                name="productType"
                id="productType"
              >
                <option value="furniture">Furniture</option>
                <option selected value="food">
                  Food
                </option>
                <option value="mobile">Mobile & ICT Equipment</option>
              </select>
            </div>

            {/* <div className=" py-2">
              <span className="w-full text-sm text-gray-400">Product Type</span>
              <input
                className="w-full border rounded p-1"
                type="text"
                placeholder="Product Name"
              />
            </div> */}
            <InputFieldPost
              refer={productNameRef}
              type={"text"}
              title={"Product Name"}
              placeholder={"Enter product name"}
            />
            <InputFieldPost
              refer={productCostRef}
              type={"number"}
              title={"Product Cost"}
              placeholder={"Product Cost"}
            />

            <InputFieldPost
              refer={productImageRef}
              type={"url"}
              title={"Image link"}
              placeholder={"Enter image link"}
            />
            <div className=" py-2">
              <span className="w-full text-sm text-gray-400">
                A Suitable Description
              </span>
              <TextareaAutosize
                ref={productDescriptionRef}
                maxRows={4}
                aria-label="maximum height"
                placeholder="Description..."
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua."
                // style={{ width: "100%" }}
                className="w-full border rounded p-1"
              />
            </div>
            <button
              onClick={handlePostSubmit}
              className="bg-gray-200 border-2 hover:bg-orange-400 hover:text-gray-200 rounded px-4 py-2 font-bold "
            >
              <AddIcon></AddIcon> Add
            </button>
          </div>
        </form>
      </div>
      <SectionHeader text={"My Posts"} />
      <div className=""></div>
    </div>
  );
};

export default AddNewPost;
