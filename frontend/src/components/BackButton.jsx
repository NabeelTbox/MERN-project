import React from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BackButton = ({ url }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(url);
  };

  return (
    <button onClick={handleBackClick} className="btn btn-reverse btn-back">
      <FaArrowCircleLeft /> Back
    </button>
  );
};

export default BackButton;
