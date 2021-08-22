import Header from "../components/header.js";
import BackgroundTopics from "../components/Home/backgroundTopic.js";

import About from "../components/Home/about.js";
import CardCommunity from "../components/Home/cardCommunity.js";
import Location from "../components/Home/location.js";
import Footer from "../components/footer.js";
import HeaderTopic from "../components/Home/headerTopic.js";
import { posts } from "../database/posts.js";
export default function Home({ dataFilterd }) {
  return (
    <>
      <HeaderTopic />
      <About />
      <h1
        style={{
          fontWeight: "700",
          textAlign: "center",
          fontSize: "32px",
          wordSpacing: "2px",
          letterSpacing: "1px",
          margin: "0px 0px 50px",
        }}
      >
        From our Community
      </h1>
      <div className="grid">
        {dataFilterd.map((post) => {
          return (
            <CardCommunity
              key={post.id}
              author={post.author}
              postBody={post.body}
              imgsrc={post.image}
              postDate={post.postDate}
              Topic={post.topic}
              ratting={post.ratting}
            />
          );
        })}
      </div>

      <h1
        style={{
          fontWeight: "700",
          textAlign: "center",
          fontSize: "32px",
          wordSpacing: "2px",
          letterSpacing: "1px",
          margin: "50px 0px 0px",
        }}
      >
        Where You Can Find US
      </h1>
      <Location />
    </>
  );
}
export async function getStaticProps() {
  const dataFilterd = [];
  for (let i = 0; i < 3; i++) if (posts[i]) dataFilterd.push(posts[i]);
  return {
    props: { dataFilterd },
  };
}
