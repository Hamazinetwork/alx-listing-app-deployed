import React from 'react'
import { PropertyProps } from '@/interfaces';
import Image from 'next/image';

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="property-card">
      <Image src={property.image} alt={property.name} layout="fill" // fill the container
          objectFit="cover" // crop the image nicely
          className="rounded-md"/>
      <h2>{property.name}</h2>
      <p>{property.rating}</p>
      <p>${property.price}</p>
    </div>
  );
};

export default PropertyCard;
