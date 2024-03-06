import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Hero.module.css";

const Hero = () => {
  const navigate = useNavigate();

  const onCTAContainerClick = useCallback(() => {
    navigate("/get-started-page");
  }, [navigate]);

  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.hero_text_one}>
          We thrive on getting your EV experience better with every ride by
          giving you real time data about everything in a single place.
        </div>
        <div className={styles.hero_text_two}>
          A one stop solution to all your EV problems
        </div>
      </div>
      <div className={styles.cta} onClick={onCTAContainerClick}>
        <div className={styles.button}>
          <div className={styles.getStarted}>Get Started</div>
          <img className={styles.icon} alt="" src="/icon.svg" />
        </div>
      </div>
      <img className={styles.logoIcon} alt="" src="/logo.svg" />
    </div>
  );
};

export default Hero;
