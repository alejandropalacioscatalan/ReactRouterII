import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  text-align: center;
  display:flex;
  flex-direction: column;
  justifi-contents: center;
  align-items:center;
`;

const SubCard = styled.div`
  display:flex;
  flex-direction: row;
  justifi-contents: center;
  align-items:center;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 3em;
  text-transform: capitalize;
`;

const StatsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const StatItem = styled.li`
  margin: 10px 0;
  font-size: 1.6em;
`;

const StatName = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => response.json())
      .then(data => setPokemon(data));
  }, [name]);

  if (!pokemon) {
    return <div>Cargando...</div>;
  }

  const { id, stats } = pokemon;
  const highResImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  const statsMap = {
    hp: 'HP',
    attack: 'Attack',
    defense: 'Defense',
    'special-attack': 'Special Attack',
    'special-defense': 'Special Defense',
    speed: 'Speed'
  };

  return (
    <Card>
      <Title>{pokemon.name}</Title>
      <SubCard>
        <Image src={highResImageUrl} alt={pokemon.name} />
        <StatsList>
          {stats
            .filter(stat => statsMap[stat.stat.name])
            .map(stat => (
              <StatItem key={stat.stat.name}>
                <StatName>{statsMap[stat.stat.name]}</StatName>
                {stat.base_stat}
              </StatItem>
            ))}
        </StatsList>
      </SubCard>
      
    </Card>
  );
};

export default PokemonDetail;
