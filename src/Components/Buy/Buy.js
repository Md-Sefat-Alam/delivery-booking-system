import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Buy = () => {
  document.title = `Buy now || Book Now`;
  const { productId } = useParams();
  const [postData, setPostData] = useState({});
  const [quantityValue, setQuantityValue] = useState(1);
  const { user, setMessage, setError } = useAuth();
  const quantity = useRef();
  const history = useHistory();
  const { date, img, pCost, pDescription, pType, pName, _id } = postData;
  useEffect(() => {
    fetch(`http://localhost:5000/post/${productId}`)
      .then((res) => res.json())
      .then((data) => setPostData(data));
  }, []);

  const handleQuantity = () => {
    setQuantityValue(quantity.current.value);
  };

  const handlePurchase = () => {
    const buyDetail = {
      productId: _id,
      quantity: quantityValue,
      userId: user.accessToken,
      userEmail: user.email,
      status: "pending",
    };
    if (window.confirm("Confirmation Click Ok")) {
      axios
        .post("http://localhost:5000/buy", buyDetail)
        .then((res) => {
          if (res.status === 200) {
            const text = `${
              user.displayName ? user.displayName : user.email
            } Now your Buy Request is pending wait for confirmation`;
            setMessage(text);
            history.push("/home");
          }
        })
        .catch((e) => setError("Database connection problem..."));
    }
  };
  return (
    <div className="sectionRoot wrapper">
      <div>
        <SectionHeader text={"Buy Now"} />

        {postData._id && (
          <Card sx={{ display: "flex" }}>
            <Box
              sx={{ display: "flex", width: "50%", flexDirection: "column" }}
            >
              <CardContent sx={{ flex: "1 0 auto" }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      {pName[0]}
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={pName}
                  className="uppercase"
                  subheader={date}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {pDescription}
                  </Typography>
                </CardContent>
              </CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", pl: 10, pb: 10 }}
              >
                <div>
                  <div className=" py-2">
                    <span className="w-full text-sm text-gray-400">
                      {"Quantity"}
                    </span>
                    <input
                      onChange={handleQuantity}
                      ref={quantity}
                      required
                      className="w-full border rounded p-1"
                      type={"number"}
                      placeholder={"Quantity"}
                      defaultValue={1}
                      min={1}
                      max={10}
                    />
                  </div>
                  <p className="text-gray-500 font-bold mb-3">
                    Total: <span>{pCost * quantityValue}tk</span>
                  </p>
                  <Button onClick={handlePurchase} variant="outlined">
                    Purchase
                  </Button>
                </div>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: "50%" }}
              image={img}
              alt="Live from space album cover"
            />
          </Card>
        )}
      </div>
    </div>
  );
};

export default Buy;
