import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
  <div className="footer-inner">
    <span className="footer-text">© {new Date().getFullYear()} Karlo Mila - All rights reserved</span>
    <span className="footer-divider">|</span>
    <span className="footer-text">Website by Karlos Schaaf ★ Developed 2026 </span>
  </div>
</footer>
  );
}

export default Footer;