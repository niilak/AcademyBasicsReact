import "./header.css";

const Header02 = ({ text, colorClass }) => {
  return <h2 className={`header02 header-title ${colorClass}`}>{text}</h2>;
};

export default Header02;
