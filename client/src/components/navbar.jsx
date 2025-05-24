import "../Navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

// Basic navbar component and functionality
// add routing for different pages if time
// maybe add handling for nav bar hovering (like if a user clicks on top picks or something to see their interests)
export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Gimmie
      </Link>
      <ul>
        <NavigateLink to="/">Home</NavigateLink>
        <NavigateLink to="/staff-picks">Staff Picks</NavigateLink>
        <NavigateLink to="/analytics">Analytics</NavigateLink>
      </ul>
    </nav>
  );
}

// use a custom func to simplify routing issues to also work with react dom routing
function NavigateLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
