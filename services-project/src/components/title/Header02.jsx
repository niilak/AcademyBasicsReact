import "./header.css";

const Header02 = ({ text, colorClass }) => {
  return <h2 className={`font-72 header-title ${colorClass}`}>{text}</h2>;
};

export default Header02;
