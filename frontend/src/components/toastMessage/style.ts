import styled from "styled-components";

export const ToastContainer = styled.div<{ type: string }>`
  width: 250px;
  position: absolute;
  right: 15px;
  top: 15px;
  background-color: white;
  box-shadow: 0px 0px 10px gray;
  padding: 20px;
  border-bottom: 2px solid
    ${(p) =>
      p.type === "error"
        ? "red"
        : p.type === "warning"
        ? "yellow"
        : p.type === "success"
        ? "green"
        : "transparent"};

  img {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 15px;
    height: 15px;
  }

  p {
    width: 95%;
  }
`;
