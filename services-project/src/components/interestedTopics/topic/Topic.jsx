import "./topic.css";

function Topic({ imgSrc, alt, text }) {
  return (
    <div className="topic">
      <img src={`${imgSrc}`} alt={`${alt}`} />
      <a href="#">{text}</a>
    </div>
  );
}

export default Topic;
