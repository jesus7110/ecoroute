import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SplashScreen.module.css";

const SplashScreen = () => {
  const navigate = useNavigate();

  const onSplashScreenContainerClick = useCallback(() => {
    navigate("/hero");
  }, [navigate]);

  return (
    <div className={styles.splashScreen} onClick={onSplashScreenContainerClick}>
      <div className={styles.container} />
      <div className={styles.hero}>
        <img
          className={styles.welcomePageIcon}
          alt=""
          src="/welcome-page.png"
        />
        <div className={styles.navbar}>
          <div className={styles.content} />
          <div className={styles.section1}>EcoRoute</div>
          <div className={styles.section2}>EcoRoute</div>
          
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
