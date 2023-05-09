import CircularProgress from "@mui/material/CircularProgress";
import scss from "./preloader.module.scss";

const Preloader = () => {
  return (
    <div className={scss.wrapper}>
      <CircularProgress />
    </div>
  );
};

export default Preloader;
