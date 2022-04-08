import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import useAuth from "../../../Hooks/useAuth";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SucessSnakbar() {
  const { message, setMessage } = useAuth();
  const [open, setOpen] = React.useState(false);
  const [tempMessage, setTempMessage] = React.useState("");
  const handleClick = () => {
    setOpen(true);
  };

  React.useEffect(() => {
    if (message) {
      handleClick();
      setTempMessage(message);
      setMessage("");
    }
  }, [message]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {tempMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
