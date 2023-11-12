import { useSelector } from "react-redux";
import Filter from "../../components/Filter/Filter";
import { selectFavorite } from "../../components/redux/selectors";
import Cars from "../../components/Car/Car";
const Favorites = () => {
  const favorites = useSelector(selectFavorite);

  return (
    <>
      <Filter />
      <Cars cars={favorites} />
    </>
  );
};

export default Favorites;
