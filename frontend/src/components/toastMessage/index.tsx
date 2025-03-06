import * as Css from "./style";

interface ToastProps {
  type: "error" | "success" | "warning";
  message: string;
}

const Toast = ({ type, message }: ToastProps) => {
  return (
    <Css.ToastContainer type={type}>
      <p>{message}</p>
    </Css.ToastContainer>
  );
};

export default Toast;
