import silvia from "../images/silvia.ico";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <a
          className="footer__link"
          alt="My github page"
          href="https://github.com/silviaespanagil"
        >
          by Silvia España Gil
        </a>
        <img className="footer__img" src={silvia} alt="mini developer" />
      </footer>
    </>
  );
};

export default Footer;
