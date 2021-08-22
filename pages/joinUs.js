import style from "../styles/Join/join.module.css";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
function JoinUs() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [agefield, setAgeField] = useState(20);
  const [password, setPassword] = useState("");

  const signHandler = (e) => {
    e.preventDefault();
    if (email != "" && name != "" && password != "")
      toast.success("Your Request Submitted Successfully");
  };
  const age = [];
  for (let i = 20; i <= 60; i++) age.push(i);
  return (
    <div>
      <h1 style={{ margin: "10px 20px" }}>Join Our Team</h1>
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

        <label className={style.label} htmlFor="Name">
          Name
        </label>
        <input
          className={style.input}
          type="text"
          id="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          onBlur={() => {
            name == "" && toast.error("This Field is Required");
          }}
        />

        <label className={style.label} htmlFor="age">
          Age
        </label>
        <select
          className={style.select}
          id="Name"
          value={agefield}
          onChange={(e) => {
            setAgeField(e.target.value);
          }}
        >
          {age.map((i) => {
            return (
              <option key={i} value={i}>
                {i}
              </option>
            );
          })}
        </select>

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
            password == "" && toast.error("This Field is Required");
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
export default JoinUs;
