import * as Css from "./style";
import loadingIcon from "../../assets/loading.png";

interface LoaderProps {
  btnLoader?: boolean;
}

const Loader = ({ btnLoader }: LoaderProps) => {
  return (
    <Css.LoaderContainer btnLoader={btnLoader}>
      <img src={loadingIcon} alt="" />
    </Css.LoaderContainer>
  );
};

export default Loader;
