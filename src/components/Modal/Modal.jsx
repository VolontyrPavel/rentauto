const ModalWindow = ({ car }) => {
  const {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    type,
    functionalities,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    mileage,
  } = car;

  return (
    <div>
      <img src={img} alt='car'></img>
      <p>
        {make} <span>{model}</span>, {year}
      </p>
      <ul>
        <li>{address.split(",")[1]}</li>
        <li>{address.split(",")[2]}</li>
        <li>Id: {id}</li>
        <li>Year: {year}</li>
        <li>type: {type}</li>
        <li>Fuel consumption: {fuelConsumption}</li>
        <li>Engine Size: {engineSize}</li>
      </ul>
      <p>{description}</p>
      <p>Accessories and functionalities:</p>
      <ul>
        {accessories.map((item, index) => (
          <li key={"i" + index}>{item}</li>
        ))}

        {functionalities.map((item, index) => (
          <li key={"i" + index}>{item}</li>
        ))}
      </ul>
      <p>Rental Conditions:</p>
      <ul>
        <li>
          Minimum age:<span>age</span>
        </li>
        <li>
          Mileage:<span>{mileage}</span>
        </li>
        <li>
          Price:<span>{rentalPrice}</span>
        </li>
      </ul>
      <button href="tel:+380730000000">Rental car</button>
    </div>
  );
};

export default ModalWindow;
