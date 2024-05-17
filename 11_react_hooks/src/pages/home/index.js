import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPetDetails } from '../../api/petfinder';
import Hero from '../../components/hero';

const PetDetailsPage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function getPetsData() {
      try {
        const petsData = await getPetDetails(id);
        setData(petsData);
        setError(false);
      } catch (e) {
        setError(true);
      }
      setLoading(false);
    }

    getPetsData();
  }, [id]);

  return (
    <div>
      <Hero />
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <div>
          <h3>404: Who let the dogs out?</h3>
          <p>The pet you are looking for is not available. Try a different pet.</p>
        </div>
      ) : (
        <div className="pet-detail">
          <div className="pet-image-container">
            <img className="pet-image" src={data.photos[0]?.medium || '/missing-animal.png'} alt="" />
          </div>
          <div>
            <h2>{data.name}</h2>
            <h3>Breed: {data.breeds.primary}</h3>
            <p>Color: {data.colors.primary || 'Unknown'}</p>
            <p>Gender: {data.gender}</p>
            <h3>Description</h3>
            <p>{data.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PetDetailsPage;