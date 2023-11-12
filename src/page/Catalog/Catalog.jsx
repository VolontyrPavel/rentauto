import { useEffect, useState } from "react";

import { useLazyGetAllCarsQuery } from "../../components/redux/api";

import Filter from "../../components/Filter/Filter";
import Car from "../../components/Car/Car";

import { Ul, Button } from "./Catalog.styled";

const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [filter, setFilter] = useState({
    brand: null,
    price: null,
    mileage: { from: "", to: "" },
  });

  const [fetchAllCars] = useLazyGetAllCarsQuery();

  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const filterCars = (cars) => {
        return cars.filter(
          (car) =>
            (filter.price
              ? +car.rentalPrice.slice(1, car.rentalPrice.length) <
                +filter.price.slice(1, filter.price.length)
              : true) &&
            (filter.mileage.from ? car.mileage > +filter.mileage.from : true) &&
            (filter.mileage.to ? car.mileage < +filter.mileage.to : true)
        );
      };

      const data = await fetchAllCars({ page, brand: filter.brand }).unwrap();

      if (page === 1) {
        setCars(filterCars(data));
      } else {
        setCars((cars) => [...cars, ...filterCars(data)]);
      }

      if (data.length < 12) {
        setIsLastPage(true);
      } else {
        setIsLastPage(false);
      }

      if (data.length > 0 && filterCars(data).length === 0) {
        setPage((page) => page + 1);
      }
    };

    fetch();
  }, [page, filter, fetchAllCars]);

  return (
    <>
      <Filter setFilter={setFilter} setPage={setPage} />
      <Ul>
        {cars.map((car) => (
          <Car key={car.id} car={car} />
        ))}
      </Ul>
      {(!isLastPage || (!isLastPage && cars.length > 0)) && (
        <Button onClick={() => setPage(page + 1)}>Load more</Button>
      )}
    </>
  );
};

export default Catalog;
