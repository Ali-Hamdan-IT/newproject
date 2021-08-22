import Style from "../../styles/Classes/classLesson.module.css";
function ClassLesson(props) {
  return (
    <div className={Style.ClassContainer}>
      <img src={props.image} alt="" className={Style.classImage} />
      <h1 className={Style.h1}>{props.title}</h1>
    </div>
  );
}
export default ClassLesson;
