import React, { useState } from "react";
import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import axios from "axios";
import CheckIcon from "@mui/icons-material/Check";

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return () => setValue(value + 1);
}

const MyOrders = () => {
  const [buyData, setBuyData] = useState([]);
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    fetch("http://localhost:5000/allbuydata")
      .then((res) => res.json())
      .then((data) => setBuyData(data))
      .catch((error) => console.log(error));
  }, [forceUpdate]);

  const handleUpdate = (_id) => {
    if (window.confirm("Confirmation Click Ok")) {
      axios
        .put(`http://localhost:5000/makeapproved/${_id}`)
        .then((res) => {
          if (res.status === 200) {
            forceUpdate();
          }
        })
        .catch((error) => console.error(error));
    }
  };
  const handleDelete = (_id) => {
    if (window.confirm("Confirmation Click Ok to Delete")) {
      axios
        .delete(`http://localhost:5000/cancle-buy-request/${_id}`)
        .then((res) => {
          if (res.status === 200) {
            forceUpdate();
          }
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div>
      <div className="h-10 bg-gray-800 px-10 flex items-center text-orange-400 text-xl font-bold">
        <p>My Orders</p>
      </div>
      <div
        style={{ minHeight: "70vh" }}
        className="w-full flex items-center justify-center"
      >
        <div>
          <TableContainer component={Paper}>
            <Table
              className="bg-gray-500"
              sx={{ minWidth: 650 }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell className="uppercase">Product Id</TableCell>
                  <TableCell className="uppercase" align="right">
                    Quantity
                  </TableCell>
                  <TableCell className="uppercase" align="right">
                    Status
                  </TableCell>
                  <TableCell className="uppercase" align="right">
                    User Email
                  </TableCell>
                  <TableCell className="uppercase" align="right">
                    Make approved
                  </TableCell>
                  <TableCell className="uppercase" align="right">
                    Cancle
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {buyData.map((row) => {
                  const { productId, quantity, status, userEmail, _id } = row;
                  return (
                    <TableRow
                      key={_id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {productId}
                      </TableCell>
                      <TableCell align="right">{quantity}</TableCell>
                      <TableCell className="uppercase" align="right">
                        {status}
                      </TableCell>
                      <TableCell align="right">{userEmail}</TableCell>
                      <TableCell align="right">
                        {
                          // CheckIcon
                          status === "approved" ? (
                            <CheckIcon className="text-white font-bold text-2xl" />
                          ) : (
                            <IconButton
                              onClick={() => handleUpdate(_id)}
                              aria-label="update"
                              size="small"
                            >
                              <UpgradeIcon
                                className="text-yellow-600 font-bold text-2xl"
                                fontSize="20px"
                              />
                            </IconButton>
                          )
                        }
                      </TableCell>
                      <TableCell align="right">
                        <IconButton
                          onClick={() => handleDelete(_id)}
                          aria-label="delete"
                          size="small"
                        >
                          <DeleteIcon
                            className="text-red-400 font-bold text-2xl"
                            fontSize="20px"
                          />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
