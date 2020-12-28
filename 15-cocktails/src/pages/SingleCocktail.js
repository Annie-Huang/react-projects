import React from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();
  // use local environment instead of AppContext.
  // This component is quite independent, not everything has to come from appContext.
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  // Need to watch on id, in case user enter another url for singleCocktail directly,
  // in which case, the SingleCocktail component is not destroy, it's simple re-redner.
  React.useEffect(() => {
    setLoading(true);

    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
          setCocktail(data.drinks[0]);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCocktail();
  }, [id]);

  return (
    <div>
      <h2>{id}</h2>
    </div>
  );
};

export default SingleCocktail;
