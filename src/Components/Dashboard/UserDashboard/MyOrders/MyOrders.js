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

const MyOrders = () => {
  const [buyData, setBuyData] = useState([]);
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  useEffect(() => {
    fetch("http://localhost:5000/allbuydata")
      .then((res) => res.json())
      .then((data) => setBuyData(data))
      .catch((error) => console.log(error));
  }, []);

  console.log(buyData);
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
                    Status(g)
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
                        <IconButton aria-label="update" size="small">
                          <UpgradeIcon
                            className="text-yellow-600 font-bold text-2xl"
                            fontSize="20px"
                          />
                        </IconButton>
                      </TableCell>
                      <TableCell align="right">
                        <IconButton aria-label="delete" size="small">
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
