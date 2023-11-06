function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <h3>CopyRight @ {year}</h3>
    </footer>
  );
}

export default Footer;
