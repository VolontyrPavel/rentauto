import { NavLink } from "react-router-dom";

import Logo from "../Logo/Logo";

import { HeaderForm } from "./Header.styled";

const Header = () => {
  return (
    <HeaderForm>
      <nav>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
    </HeaderForm>
  );
};

export default Header;
