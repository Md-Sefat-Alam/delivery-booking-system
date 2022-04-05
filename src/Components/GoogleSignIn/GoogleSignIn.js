import React from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const GoogleSignIn = () => {
  const { googleLogin, setError, setUser, setIsLoading } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.code);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="flex justify-center w-full border rounded p-1  my-6"
      >
        <div className="flex justify-center items-center">
          <span>
            <img
              className="w-8"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAABI1BMVEX////qQzU0qFNChfT7vAXL3Pcte/QufPPH1/v2+f5QjPX7uQDpLBcdo0XqPi/qQDIspk7pMyA6gfS/38bpNiX4zMnubWTtZVv++vrpOir98PDoGQD8wgBBrFxit3aMyJnsXVLwgnv3v7zrTUD619X86ejoJg3rVkr1s6/63t395bn7xUf+9OL/9+v80nz8z3P93J391o3+79P8yFf7vylyn/Ww2Lnw9/Hd7uAzqkN6wIoFoDtRsmn0qqbympTxkIr4pwDvaTLpNDfzjSnygiz3pR7tXzP2myPrTCr85dvZ5fiivveIrvR4pfGux/fquhe7tTGPsURfq0zPuC2isz5ck/Mum4szpWI/jOA+ksU1m5Y1o3A/jtI3l6w3oXw+lb1ut5U+VWTxAAAEZ0lEQVRoge2X6XLbNhSFaYqR4nKFSVOkbFGhNitO0qgbtctttraOEzeLsift+z9FIZqUQQIgAYrqtJ2cH56xBcyne87FBSwIX/XfldM7XCx9u37rVt32l4vDnlMyoNc+q4M+sFxN03Qd/nAtpW/Zy8NGaYRF3VVcbQ+T5iqaPSiD065bFgGwAQHXPtyO4CwAyCBEHKXT3gbhgjxCKL04pt1hQ1xh6t0CiIYNdGbG2jTgczMGR7lZpOUCvmIcX+FFQOn9JQej17EKMKCAzTwGugq3VbFcwMho94siYJMxHsx2kTgiBtg9Y4+1jm5xr/aOGBm9LbxircPp5PaVDkX8O2segp95PjR4U7mdk5OO1Vew8c9ahzCgm6W7feAPug0HnjbHaXQHfl9xkc9Z8xAaR1QE0M5up5d3fdeKnGPOQxBsWiDgZEAcF43FnsWXh9CmXB8aICNCzLKvc+QBO4t8fyh25lPhdsdizkMQFsRCdDDI2+izMxyNVIjOeRHlaPgziaFhPbWVZEn65QFWR7mMUwg5fpiilOuVINyRoI4fJ/sqN3M+3ZWlkCIjlml2uQxheAWBmEcbCijtyR7pjhRrY1n+AeHUPVm6pshP1sXoJ2X/k3OKQCLLSi9E+DYBkY5/faBrZReCRBJb9ttZ2QxHltKSf6euvsGsc3TbXQKEytivVFlVQfedYhD5Ph3yTYVVB/vIviEOGZYBqaF+fYdDvi8FchPZdx+H3CvFrqfIvh84cueCXCD70sdEkn4sB/Lsn4D89L+E7Cx4NJOdtTDaXbs6jIlzsrOx8hzZt6sBmRgrfKO+4IAUCJAxFVKp1og6wCCJUY8flEujRS3lJkUXOCWxL/WQkP4QRYMKoQmHrBKfJ5KXpReiKKoBLwTLKtHByceddPlSXKvJyTivZjaXkAjllXgl3lJwt6qpFdfH8YUYSx3xMPZrmFur1JL4pERWhTK87QpJRSLEfr0SUfEYhidSqZ6nF4X99VpMSjWZISuMgbkFJcvSSzEtlXruU7rAEklOx0jDSwyxzoWN8hxnpGbKlRyDBGGrhch4RloZqGRKfvpP8dDTE3ijJqUWL/u87K8IdSTfEIhMcimikVlM8KaCT19S/0byyKXAYpo0TNBUJ2/f4aWQE1lrNKNAIMZo4R0wbhkq/F7G5D0WCqm14u9FMSw0baZOg3Ecz8gMvJkaVz75cJC0jHRGNppmUNbhzGZGE0pUIQD1dvJxhVJoqUdfkNJhuTKMT4hlNbpZISWzlCxNPm8o1RuZDBgmPfw8ypeol2vYiMdEOy35MpphL9cuchlbUSZ/VnNCv6YUdgz2cpWNAXNRC/aYKM7+YmSsO7mgZSr93UmgTAtZxvuKCmbclhmM1yhajMeXjMFl1UYmTzLqnLuMSIHBiFFF7uf5tUaBmm8avFS2QIQy55kcSPDYn4B0jYO5kbw+YsCaEHA9y7M0MlsevKggKpYKf/VaZmmEWGMzaE09bz73vGkrMIt201f9K/Q35ZSFuOWHGmYAAAAASUVORK5CYII="
              alt="google logo"
            />
          </span>
          <span className="capitalize px-2 text-gray-500 font-bold">
            Sign in using google
          </span>
        </div>
      </button>
    </div>
  );
};

export default GoogleSignIn;
