import "./link.css";

function Link(props) {
  return (
    <a href={props.href} className="nav__link">
      {props.children}
    </a>
  );
}

export default Link;
