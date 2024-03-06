import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GetStartedPage.module.css";

const GetStartedPage = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/index-page");
  }, [navigate]);


  

  return (
    <div className={styles.getStartedPage}>
      <div className={styles.beforeWeGet}>
        Before we get going and make your EV experience smooth, we need some
        basic info to provide more accurate and reliable real time data about
        your EV.
      </div>
      <div className={styles.button} onClick={onButtonContainerClick}>
        <div className={styles.next}>Next</div>
        <img className={styles.icon} alt="" src="/icon.svg" />
      </div>
      <b className={styles.features}>Fast. Accurate. Reliable</b>
      <img className={styles.logoIcon} alt="" src="/logo.svg" />
    </div>
  );
};

export default GetStartedPage;
