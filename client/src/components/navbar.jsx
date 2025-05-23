import "../Navbar.css";

// Basic navbar component and functionality
// Includes the product search bar and log user input back to interactions.jsx for processing
// add routing for different pages if time
// maybe add handling for nav bar hovering (like if a user clicks on top picks or something to see their interests)
function Navbar({ searches, handleSearch, setSearches }) {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Gimmie
      </a>

      <form onSubmit={handleSearch} className="search-form">
        <input
          className="search-input"
          type="text"
          placeholder="Search for a product..."
          value={searches}
          onChange={(e) => setSearches(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <ul>
        <li className="active">
          <a href="/"> Home</a>
        </li>
        <li>
          <a href="/staff-picks">Staff Picks</a>
        </li>
        <li>
          <a href="/analytics">Analytics</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
