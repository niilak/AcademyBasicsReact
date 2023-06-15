import Header02 from "../title/Header02";
import "./interestedTopics.css";
import Topic from "./topic/Topic";

function InterestedTopics() {
  return (
    <div className="interested-topics__section">
      <Header02 text={"You might be interested"} colorClass={"primary"} />
      <div className="intereseted-topic__container">
        <Topic
          imgSrc={"group1045.png"}
          alt={"Topic foto"}
          text={"Mobile apps development"}
        />
        <Topic
          imgSrc={"group1045.png"}
          alt={"Topic foto"}
          text={"Website development"}
        />
        <Topic imgSrc={"group1045.png"} alt={"Topic foto"} text={"SaaS"} />
      </div>
    </div>
  );
}

export default InterestedTopics;
