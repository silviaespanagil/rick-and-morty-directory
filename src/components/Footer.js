import silvia from "../images/silvia.ico";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <p className="footer__link">by Silvia España Gil</p>
        <img className="footer__img" src={silvia} alt="mini developer" />
      </footer>
    </>
  );
};

export default Footer;
