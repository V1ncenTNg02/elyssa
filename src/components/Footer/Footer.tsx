import React from "react";
import styles from "./Footer.module.css";

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <div className={styles.footer}>
      <div>Copyright@elyssa</div>
      <div>info@elyssa.io</div>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-end gap-2 lg:gap-5">
        <div>Terms and Conditions</div>
        <div>Privacy Policy</div>
      </div>
    </div>
  );
};

export default Footer;
