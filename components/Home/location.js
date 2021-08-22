import style from "../../styles/Home/location.module.css";
import Container from "@material-ui/core/Container";
function Location() {
  return (
    <Container fixed>
      <div style={{ margin: "0px 0px 50px" }}>
        <div className={style.options}>
          <div style={{ backgroundColor: "#262626" }}>
            <div className={style.optionContent}>
              <h3 className={style.h3}>Address</h3>
              <p className={style.p}>Portman House 53 Millbrook Road East</p>
              <p className={style.p}>Southampton SO15 HN</p>
            </div>
          </div>

          <div style={{ backgroundColor: "#ef8700" }}>
            <div className={style.optionContent}>
              <h3 className={style.h3}>Phone</h3>
              <p className={style.p}>02381 785 191</p>
              <p className={style.p}>02567 674 191</p>
            </div>
          </div>

          <div style={{ backgroundColor: "#e19712" }}>
            <div className={style.optionContent}>
              <h3 className={style.h3}>Email</h3>
              <p className={style.p}>enequries@sportfit.co.uk</p>
              <p className={style.p}>support@sportfit.co.uk</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Location;
