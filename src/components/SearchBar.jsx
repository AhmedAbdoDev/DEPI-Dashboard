import { FaSearch } from "react-icons/fa";
import "../App.css";

function SearchBar() {
  return (
    <div className="search-bar">
      <FaSearch className="search-icon" />
      <input type="text" placeholder="Search or type a command" />
    </div>
  );
}

export default SearchBar;
