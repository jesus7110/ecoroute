import { useCallback } from "react";
import styles from "./IndexPage.module.css";

const IndexPage = () => {
  const onTRACKDATACARDClick = useCallback(() => {
    // Please sync "Track Data Page" to the project
  }, []);

  const onCHARGINGSTATIONSCARDClick = useCallback(() => {
    // Please sync "SET Journey state" to the project
  }, []);

  const onSETJOUNERYCARDClick = useCallback(() => {
    // Please sync "SET Journey state" to the project
  }, []);

  return (
    <div className={styles.section_one}>
      <div className={styles.section_two}>
        <div className={styles.trackDataCard} onClick={onTRACKDATACARDClick}>
          <div className={styles.container}>
            <img className={styles.imageIcon} alt="" src="/image2.png" />
            <div className={styles.content}>
              <div className={styles.container1}>
                <div className={styles.header} />
              </div>
              <b className={styles.title}>TRACK DATA</b>
              <div className={styles.paragraph}>
                <div className={styles.dropdown}>
                  <div className={styles.icons} />
                </div>
                <b className={styles.trackRealTimeContainer}>
                  <p
                    className={styles.trackRealTime}
                  >{`Track real time data as you drive your EV. `}</p>
                </b>
              </div>
            </div>
          </div>
        </div>
        <div
          className={styles.chargingStationsCard}
          onClick={onCHARGINGSTATIONSCARDClick}
        >
          <div className={styles.container}>
            <img className={styles.imageIcon} alt="" src="/image1.png" />
            <div className={styles.content}>
              <div className={styles.container1}>
                <div className={styles.header} />
              </div>
              <b className={styles.title}>EV STATIONS</b>
              <div className={styles.paragraph}>
                <div className={styles.dropdown}>
                  <div className={styles.icons} />
                </div>
                <b className={styles.trackRealTimeContainer}>
                  <p className={styles.trackRealTime}>
                    Get set going on your long trips because we have got you
                    covered with real time data on EV charging stations on your
                    route.
                  </p>
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.setJouneryCard} onClick={onSETJOUNERYCARDClick}>
          <div className={styles.container4}>
            <img className={styles.image1Icon} alt="" src="/image3.png" />
          </div>
          <div className={styles.content}>
            <div className={styles.container1}>
              <div className={styles.header} />
            </div>
            <b className={styles.title}>SET JOURNEY</b>
            <div className={styles.paragraph}>
              <div className={styles.dropdown}>
                <div className={styles.icons} />
              </div>
              <b className={styles.trackRealTimeContainer}>
                <p className={styles.trackRealTime}>
                  An easy and precise way to set your journey according to your
                  EV needs
                </p>
              </b>
            </div>
          </div>
        </div>
        <img className={styles.logoIcon} alt="" src="/logo.svg" />
      </div>
    </div>
  );
};

export default IndexPage;
