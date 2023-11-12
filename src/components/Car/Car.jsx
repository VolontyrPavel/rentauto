import { useState, useEffect } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";

import ModalWindow from "../../components/Modal/Modal";
import { Li, Img, Title, Description, ModalButton } from "./Car.styled";
import svg from "../../images/icons/sprite.svg";
import { addFavorite, delFavorite } from "../redux/Slice/favoriteSlice";
import { selectFavorite } from "../redux/selectors";

const Car = ({ car }) => {
  const {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    functionalities,
  } = car;

  //modal
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  //modal

  //favorite
  const [inFavorite, setInFavorite] = useState(false);

  const dispatch = useDispatch();
  const favoritesCar = useSelector(selectFavorite);

  useEffect(() => {
    setInFavorite(favoritesCar.findIndex((item) => item.id === id) !== -1);
  }, [favoritesCar, id]);

  const handleAddFavorite = () => {
    if (!inFavorite) {
      dispatch(addFavorite(car));
    } else {
      dispatch(delFavorite(id));
    }
  };
  //favorite

  return (
    <Li key={id}>
      <Img>
        <img src={img} alt="car" />
        <button type="button" favorite={inFavorite} onClick={handleAddFavorite}>
          <svg width="18" height="18">
            <use href={`${svg}#icon-heart`}></use>
          </svg>
        </button>
      </Img>
      <Title>
        <p>
          {make} <span>{model}</span>, {year}
        </p>
        <p>{rentalPrice}</p>
      </Title>
      <Description>
        <li>{address.split(",")[1]}</li>
        <li>{address.split(",")[2]}</li>
        <li>{rentalCompany}</li>
        <li></li>

        <li>{type}</li>
        <li>{model}</li>
        <li>{id}</li>
        <li>{functionalities.slice(0, 1)}</li>
      </Description>
      <>
        <ModalButton onClick={openModal}>Learn more</ModalButton>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <form>
            <button onClick={closeModal}>close</button>
            <ModalWindow car={car} />
          </form>
        </Modal>
      </>
    </Li>
  );
};

export default Car;
