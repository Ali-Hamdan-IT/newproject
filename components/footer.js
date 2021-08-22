import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import style from "../styles/footer.module.css";
import { useState } from "react";
import Link from "next/link";
function Footer() {
  return (
    <div style={{ backgroundColor: "rgb(38 38 38)" }}>
      <div className={style.footerIcons}>
        <AiFillFacebook className={style.icon} />
        <AiFillTwitterCircle className={style.icon} />
        <AiFillInstagram className={style.icon} />
        <AiOutlineWhatsApp className={style.icon} />
      </div>
      <h1 className={style.h1}>Get IN Touch</h1>
      <div>
        <p className={style.p}>
          2021AllRightsReservedDesignBy
          <span className={style.span}>AliHamdan</span>&copy;
        </p>
      </div>
    </div>
  );
}
export default Footer;
