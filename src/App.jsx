

import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import pokedexIcon from './icons/pikachu.png'; // Importa el ícono PNG

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #070027;
  padding: 10px 20px;
`;

const Logo = styled.div`
  color: white;
  font-size: 1.5em;
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 40px; /* Ajusta el tamaño del ícono según sea necesario */
  height: 40px;
  margin-right: 8px;
`;

const NavItem = styled(NavLink)`
  margin: 0 15px;
  text-decoration: none;
  color: white;
  font-size: 1.2em;

  &.active {
    font-weight: bold;
    border-bottom: 2px solid white;
  }
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

const App = () => {
  return (
    <div>
      <Navbar>
        <Logo>
          <LogoImage src={pokedexIcon} alt="Pokedex Icon" />
          <span>PokeApp</span>
        </Logo>
        <NavItems>
          <NavItem to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavItem>
          <NavItem to="/pokemones" className={({ isActive }) => (isActive ? 'active' : '')}>Pokemones</NavItem>
        </NavItems>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default App;
