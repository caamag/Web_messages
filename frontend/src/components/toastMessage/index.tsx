import * as Css from "./style";
import closeIcon from "../../assets/close.png";
import { useState } from "react";

interface ToastProps {
  type: "error" | "success" | "warning";
  message: string;
}

const Toast = ({ type, message }: ToastProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  if (isOpen) {
    return (
      <Css.ToastContainer type={type}>
        <button
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <img src={closeIcon} alt="X" />
        </button>
        <p>{message}</p>
      </Css.ToastContainer>
    );
  }
};

export default Toast;
