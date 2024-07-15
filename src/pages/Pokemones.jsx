import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 1em;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 200px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  background-color: #070027;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #311d8b;
  }
`;

const Pokemones = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then(response => response.json())
      .then(data => setPokemons(data.results));
  }, []);

  const handleSelectChange = (event) => {
    setSelectedPokemon(event.target.value);
  };

  const handleButtonClick = () => {
    if (selectedPokemon) {
      navigate(`/pokemones/${selectedPokemon}`);
    }
  };

  return (
    <Container>
      <h2>Selecciona un Pokemon</h2>
      <Select onChange={handleSelectChange} value={selectedPokemon}>
        <option value="">Pokemones</option>
        {pokemons.map(pokemon => (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </Select>
      <Button onClick={handleButtonClick}>Ver Detalles</Button>
    </Container>
  );
};

export default Pokemones;
