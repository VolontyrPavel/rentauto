import logo from "../../images/icons/sprite.svg";

const Logo = () => {
  return (
    <svg width="61" height="64">
      <use href={`${logo}#icon-carRent`}></use>
    </svg>
  );
};

export default Logo;
