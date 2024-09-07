import { FaHeart } from 'react-icons/fa';

const PropertyCard = ({property , onClick }) => {
 

  


  
  return (
    <div className="property-card" onClick={onClick}>
      <div className="image-container">
        <FaHeart className="saved-icon" />
        <img 
          src={property.image} 
          alt={property.title} 
          className="property-image" 
        />
      </div>
      <div className="property-info">
        <h1 className="property-title">{property.title}</h1>
        <p className="property-location">{`📌 ${property.location}`}</p>
        <p className="property-rating">{`⭐ ${property.rating}`}</p>
        <p className="property-price">{`₹ ${property.price}`}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
