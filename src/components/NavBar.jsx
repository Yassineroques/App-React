function NavBar ({handleClickDec, handleClickInc, pokemonIndex, pokemonList}) {
    if (pokemonList[pokemonIndex].name == "pikachu") {
        window.alert("pika pikachu")
    }

    return (
        <>
          <div>
            {pokemonIndex > 0 ? <button onClick={handleClickDec}>Précedent</button> : <button disabled>Précedent</button>}
            {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClickInc}>Suivant</button> : <button disabled>Suivant</button>}
          </div>
        </>
      )

}


export default NavBar;