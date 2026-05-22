import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        Aero<span>Lux</span>
      </div>

      <ul className="nav-links">
        <li><a href="#">Flights</a></li>
        <li><a href="#">Destinations</a></li>
        <li><a href="#">Offers</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <button className="nav-cta">
        Book Now
      </button>
    </nav>
  );
}

export default Navbar;