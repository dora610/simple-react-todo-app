const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="brand-name">
        <h1>my Todo</h1>
      </a>
      <div className="links">
        <a href="/home">Home</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
};

export default Navbar;
