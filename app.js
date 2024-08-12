// const getPokemon = async () => {
//   try {
//     const pokemonName = document
//       .getElementById("searchName")
//       .ariaValueMax.toLowerCase();
//     const pokemonData = await fetch(
//       `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
//     );
//     if (!pokemonData.ok) {
//       throw new Error("Could not find the pokemon. Search again!!");
//     }

//     const data = await pokemonData.json();
//     const pokemonImage = data.sprites.front_default;

//     const displayPokemon = document.getElementById("pokemonImg");
//     displayPokemon.src = pokemonImage;
//     displayPokemon.style.display = "block";
//   } catch (error) {
//     console.log(error);
//   }
// };

const getPokemon = async () => {
  try {
    // Use .value to get the value of the input field
    const pokemonName = document
      .getElementById("searchName")
      .value.toLowerCase();

    // Fetch the Pokemon data using the entered name
    const pokemonData = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    // Check if the response is okay
    if (!pokemonData.ok) {
      throw new Error("Could not find the pokemon. Search again!!");
    }

    // Parse the response as JSON
    const data = await pokemonData.json();

    // Get the Pokemon's front image URL
    const pokemonImage = data.sprites.front_default;

    // Set the src of the image element to display the Pokemon
    const displayPokemon = document.getElementById("pokemonImg");
    displayPokemon.src = pokemonImage;
    displayPokemon.style.display = "block";
  } catch (error) {
    console.log(error);
  }
};
