import style from "../styles/Sign/sign.module.css";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signHandler = (e) => {
    e.preventDefault();
    if (email != "" && password != "") toast.success("Sign In Successfully");
  };
  return (
    <div className={style.signContainer}>
      <form className={style.form}>
        <label className={style.label} htmlFor="email">
          E-Mail
        </label>
        <input
          className={style.input}
          type="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          onBlur={() => {
            email == "" && toast.error("This Field is Required");
          }}
        />

        <label className={style.label} htmlFor="Password">
          Password
        </label>
        <input
          className={style.input}
          type="password"
          id="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          onBlur={() => {
            email == "" && toast.error("This Field is Required");
          }}
        />

        <Button
          className={style.button}
          variant="contained"
          type="submit"
          color="primary"
          onClick={(e) => {
            signHandler(e);
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
export default SignIn;
