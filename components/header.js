import Link from "next/link";
import Button from "@material-ui/core/Button";
import { GiWeightLiftingUp } from "react-icons/gi";
import style from "../styles/header.module.css";
import { useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import { useRouter } from "next/router";

function Header() {
  const Router = useRouter();
  const [linkColor, setLinkColor] = useState([true, false, false, false]);
  const [menuIcon, setMenuIcon] = useState(false);
  const changeIcon = () => {
    setMenuIcon(!menuIcon);
  };
  const anchorChangeColor = (id) => {
    let newColor = [];
    for (let i = 0; i < 4; i++) {
      if (i === id) newColor[i] = true;
      else newColor[i] = false;
      setLinkColor(newColor);
      setMenuIcon(false);
    }
  };
  return (
    <>
      <div className={style.content}>
        <div className={style.iconContainer}>
          <GiWeightLiftingUp className={style.icon} />
          <p className={style.pText}>
            <span className={style.spanText}>Sport</span>FIT
          </p>
        </div>
        {menuIcon === true ? (
          <AiFillCloseCircle className={style.showIcon} onClick={changeIcon} />
        ) : (
          <AiOutlineMenuFold className={style.showIcon} onClick={changeIcon} />
        )}
        <div
          className={
            menuIcon === true ? style.smallHeaderActive : style.wideHeader
          }
        >
          <>
            <Link href="/">
              <a
                className={
                  linkColor[0] === true ? " headerLink visited" : "headerLink"
                }
                onClick={() => anchorChangeColor(0)}
              >
                Home
              </a>
            </Link>

            <Link href="/classesLessons">
              <a
                className={
                  linkColor[1] === true ? "headerLink visited" : "headerLink"
                }
                style={{ wordBreak: "break-word" }}
                onClick={() => anchorChangeColor(1)}
              >
                Classes & Services
              </a>
            </Link>

            <Link href="/community">
              <a
                className={
                  linkColor[2] === true ? "headerLink visited" : "headerLink"
                }
                onClick={() => anchorChangeColor(2)}
              >
                Community
              </a>
            </Link>

            <Link href="/joinUs">
              <a
                className={
                  linkColor[3] === true ? "headerLink visited" : "headerLink"
                }
                onClick={() => anchorChangeColor(3)}
              >
                Join our Team
              </a>
            </Link>

            <button
              type="button"
              className={style.signButton}
              onClick={() => {
                Router.push("/signIn");
              }}
            >
              Sign IN/UP
            </button>
          </>
        </div>
      </div>
      <hr style={{ height: "8px", backgroundColor: "white", margin: "0px" }} />
    </>
  );
}
export default Header;
