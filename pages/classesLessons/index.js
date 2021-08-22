import ClassLesson from "../../components/classes/classLesson.js";
import Container from "@material-ui/core/Container";
import Style from "../../styles/Classes/classLesson.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import {classes} from '../../database/classes.js';
function ClassesLessons({ classes }) {
  const Router = useRouter();
  const classId = Router.query.classid;
  return (
    <Container fixed>
      <div className={Style.grid}>
        {classes.map((c) => {
          return (
            <Link
              passHref
              href={`/classesLessons/${c.classId}`}
              key={c.classId}
            >
              <a>
                <ClassLesson title={c.title} image={c.image} />
              </a>
            </Link>
          );
        })}
      </div>
    </Container>
  );
}
export default ClassesLessons;

export async function getStaticProps() {
  const data = classes;
  return {
    props: { classes: data },
  };
}
