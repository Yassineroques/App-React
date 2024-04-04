import PropTypes from "prop-types";

function PokemonCard({pokemon}) {


  PokemonCard.PropTypes = {
    pokemon : PropTypes.shape({
      name : PropTypes.string.isRequired,
      imgSrc : PropTypes.string.isRequired
    }).isRequired
  }

  

  return (
    <figure>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>???</p>}

      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}


export default PokemonCard;