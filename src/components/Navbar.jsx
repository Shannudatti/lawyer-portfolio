import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar-main">
      <div className="logo">
        <span className="icon">⚖</span>
        <span>LAW COUNSEL</span>
      </div>

      <ul className={open ? "nav-menu open" : "nav-menu"}>
        <li>Home</li>
        <li>About Us </li>
        <li>Contact Us</li>
        <li>Help</li>
        
      </ul>

      <div className="nav-icons">
        {/* <span>🛒<small>0</small></span>
        <span>🔍</span> */}
        <span className="hamburger" onClick={() => setOpen(!open)}>☰</span>
      </div>
    </nav>
  );
}
