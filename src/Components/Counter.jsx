import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import IconButton from "@mui/material/IconButton";

function Counter() {
  const [currentCount, setCurrentCount] = useState(0);

  function handleMinusClick() {
    setCurrentCount((prevValue) => {
      return prevValue - 1;
    });
  }

  function handlePlusClick() {
    setCurrentCount((prevValue) => {
      return prevValue + 1;
    });
  }

  return (
    <div className="counter">
      <h2>The Current Count Is...</h2>
      <h3>{currentCount}</h3>

      <IconButton size="large" color="primary" onClick={handleMinusClick}>
        <RemoveCircleOutlineIcon fontSize="large" />
      </IconButton>
      <IconButton size="large" color="primary" onClick={handlePlusClick}>
        <AddCircleOutlineIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
export default Counter;
