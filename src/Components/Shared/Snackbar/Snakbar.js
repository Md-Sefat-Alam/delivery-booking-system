import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import useAuth from "../../../Hooks/useAuth";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SimpleSnackbar() {
  const { error, setError } = useAuth();
  const [open, setOpen] = React.useState(false);
  const [tempError, setTempError] = React.useState("");
  const handleClick = () => {
    setOpen(true);
  };
  React.useEffect(() => {
    if (error) {
      handleClick();
      setTempError(error);
      setError("");
    }
  }, [error]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {tempError}
        </Alert>
      </Snackbar>
    </div>
  );
}
