import backgroundStyle from "../../styles/Home/background.module.css";
import BackgroundTopics from "./backgroundTopic.js";
import { CgGym } from "react-icons/cg";
import { FaWeight } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
function HeaderTopic() {
  return (
    <>
      <div className={backgroundStyle.backgroundHeader}>
        <h1 className={backgroundStyle.h1}>Get Fit With Us</h1>
        <p className={backgroundStyle.p}>
          Pilates, Yoga, Fitness, Spinning & many more
        </p>
        <button
          type="button"
          className={`${backgroundStyle.button} signButton`}
        >
          Join Now
        </button>
      </div>
      <div className={backgroundStyle.topics}>
        <div
          style={{
            backgroundColor: "#e19712",
            padding: "20px",
            position: "relative",
          }}
        >
          <CgGym style={{ fontSize: "40px", color: "white" }} />
          <BackgroundTopics
            className={backgroundStyle.topicBox}
            header="Power"
            content="Improving muscular development and definition enables you to move through your day with greater power which may help to prevent injury and may decrease the fatigue levels as the day progresses"
          />
        </div>
        <div
          style={{
            backgroundColor: "#ef8700",
            padding: "20px",
            position: "relative",
          }}
        >
          <FaWeight style={{ fontSize: "40px", color: "white" }} />
          <BackgroundTopics
            header="Health"
            content="Moderate aerobic activity for 30 minutes every day will give you better long-term results than exercising for a longer amount of time only once a week. You may wish to do a simple activity like walking, biking, or Pilates"
          />
        </div>
        <div
          style={{
            backgroundColor: "#262626",
            padding: "20px",
            position: "relative",
          }}
        >
          <AiFillSetting style={{ fontSize: "40px", color: "white" }} />
          <BackgroundTopics
            header="Balance"
            content="We use our eyes, ears and 'body sense' to help retain our balance. Coordination is a complex skill that requires not only good balance, but good levels of other fitness components such strength and agility"
          />
        </div>
      </div>
    </>
  );
}
export default HeaderTopic;
