import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

function ButtonComp({ label, onClick, navigateTo }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick(); // use parent-provided click handler
    } else if (navigateTo) {
      navigate(navigateTo); // fallback: navigate to a route
    } else {
      navigate("/enroll"); // default behavior if nothing passed
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        style={{ backgroundColor: lightGreen[500] }}
        endIcon={<SendIcon />}
        onClick={handleClick}
      >
        {label}
      </Button>
    </div>
  );
}

export default ButtonComp;
