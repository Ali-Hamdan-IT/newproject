import style from "../../styles/Home/backgroundTopic.module.css";
function BackgroundTopics(props) {
  return (
    <div>
      <h1 className={style.h1}>{props.header}</h1>
      <p className={style.p}>{props.content}</p>
      <button type="button" className={style.button}>
        +
      </button>
    </div>
  );
}
export default BackgroundTopics;
