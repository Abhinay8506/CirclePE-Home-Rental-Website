import { FaSearch, FaArrowLeft, FaFilter } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="HomeContainer">
      <div className="HomeHeading">
        <h1>CirclePe Home Rental Website</h1>
      </div>
      <div className="search-bar">
        <FaArrowLeft className="icon" />
        <div className="input-container">
          <input type="text" className="search-input" placeholder="Gurgaon" />
          <FaSearch className="input-icon" />
        </div>
        <FaFilter className="icon" />
      </div>
    </div>
  );
};

export default SearchBar;
