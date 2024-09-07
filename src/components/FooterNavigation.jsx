import { FaHome,FaHeart, FaSearch, FaUser } from 'react-icons/fa';

const FooterNavigation = () => {
  return (
    <div className="footer-navigation">
      <FaHome className="nav-icon" />
      <FaHeart className="nav-icon" />
      <FaSearch className="nav-icon search-icon" />
      <FaUser className="nav-icon" />
    </div>
  );
}

export default FooterNavigation;
