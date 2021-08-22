import Container from "@material-ui/core/Container";
import Style from "../../styles/Home/about.module.css";
function About() {
  return (
    <Container fixed>
      <h3 className={Style.h3}>Welcome to SportFIT</h3>
      <div className={Style.homeContent}>
        <div className={Style.about}>
          <h1 className={Style.h1}>
            About <span className={Style.span}>SportFIT</span>
          </h1>
          <p className={Style.p}>
            SportFIT aims at encouraging people to enhance their physical
            fitness through exercising. Anyone can set their own weekly
            exercising plans according to the Frequency, Intensity and Time of
            their choices to enhance their physical fitness and health.
          </p>
        </div>
        <img className={Style.img} src="./sport.jpg" alt="" />
      </div>
    </Container>
  );
}
export default About;
