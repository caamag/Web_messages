import * as Css from "./style";
import loadingIcon from "../../assets/loading.png";

const InitialLoader = () => {
  return (
    <Css.LoaderContainer>
      <img src={loadingIcon} alt="" />
    </Css.LoaderContainer>
  );
};

export default InitialLoader;
