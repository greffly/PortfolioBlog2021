import React from "react"
import { Link } from "gatsby"
import "./layout.css"
import "./nav.css"

const Nav = () => (
  <nav className="menu">
    <ul className="navigationBar">
      <li className="navItem">
        <Link
          activeStyle={{ color: "#FFECDB", borderBottom: "2px solid #FFECDB" }}
          to="/"
        >
          Home
        </Link>
      </li>
      <li className="navItem">
        <Link
          activeStyle={{ color: "#FFECDB", borderBottom: "2px solid #FFECDB" }}
          to="/about"
        >
          About
        </Link>
      </li>
      <li className="navItem">
        <Link
          activeStyle={{ color: "#FFECDB", borderBottom: "2px solid #FFECDB" }}
          to="/blog"
        >
          Blog
        </Link>
      </li>
      <li className="navItem">
        <Link
          activeStyle={{ color: "#FFECDB", borderBottom: "2px solid #FFECDB" }}
          to="/contact"
        >
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav
