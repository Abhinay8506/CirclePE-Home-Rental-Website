import React from "react";
import SearchBar from "./components/SearchBar";
import PropertyCard from "./components/PropertyCard";
import FooterNavigation from "./components/FooterNavigation";
import { useNavigate } from 'react-router-dom';

import image from './assets/image2.png';
import images from './assets/IMAGE.png';
const Home = () => {

  const navigate = useNavigate();

  const handlePropertyClick = (property) => {
    navigate('/property-details', { state: { property } });
  };

  const dummyData = [
    {
      image: image,
      title: "Sky Dandelions Apartment",
      price: "22,000",
      location: "Sector 28, Gurgaon",
      rating: "4.9",
    },
    {
      image: images,
      title: "Wings Tower",
      price: "17,000",
      location: "Sector 27, Gurgaon",
      rating: "4.9",
    },
    {
      image: image,
      title: "Wayside Modern House",
      price: "18,000",
      location: "MG Road, Gurgaon",
      rating: "4.4",
    },
    {
      image: images,
      title: "Sky Dandelions Apartment",
      price: "22,000",
      location: "Sector 28, Gurgaon",
      rating: "4.9",
    },
    {
      image: image,
      title: "Sky Dandelions Apartment",
      price: "22,000",
      location: "Sector 28, Gurgaon",
      rating: "4.9",
    },
    {
      image: images,
      title: "Sky Dandelions Apartment",
      price: "22,000",
      location: "Sector 28, Gurgaon",
      rating: "4.9",
    },
    {
      image: image,
      title: "Sky Dandelions Apartment",
      price: "22,000",
      location: "Sector 28, Gurgaon",
      rating: "4.9",
    },
    {
      image: images,
      title: "Sky Dandelions Apartment",
      price: "22,000",
      location: "Sector 28, Gurgaon",
      rating: "4.9",
    },
  ];

  return (
    <div className="app-container">
      <SearchBar />
      <div className="property-list">

        {dummyData.map((property, index) => (
           
          <PropertyCard key={index} property={property} onClick={()=>handlePropertyClick(property)}/>
          
        ))}
        
       
      </div>
      <FooterNavigation />
    </div>
  );
};

export default Home;
