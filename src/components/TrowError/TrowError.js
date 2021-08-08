import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ErrorToast(props) {
  toast.error(props.errorMessage, {
    onClose: () => {},
  });

  return (
    <>
      <ToastContainer />
    </>
  );
}

export default ErrorToast;
