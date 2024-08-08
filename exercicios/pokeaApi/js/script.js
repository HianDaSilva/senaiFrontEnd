document.addEventListener('DOMContentLoaded', function() {
    const pokemonInput = document.getElementById('pokemonInput');
    const fetchPokemonButton = document.getElementById('fetchPokemonButton');
    const pokemonDetails = document.getElementById('pokemonDetails');
    
    fetchPokemonButton.addEventListener('click', function() {
        const pokemonNameOrId = pokemonInput.value.trim().toLowerCase();
        if (pokemonNameOrId === '') {
            alert('Por favor, digite o nome ou ID do pokemon.');
            return;
        }
        pokemonDetails.innerHTML = "";
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}/`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Pokemon não encontrado');
                }
                return response.json();
            })
            .then(data =>{
                const { name, id, types, abilities, sprites } = data;
                const pokemonName = name.charAt(0).toUpperCase() + name.slice(1);
                const pokemonId = id;
                const pokemonType = types.map(type => type.type.name).join(', ');
                const pokemonAbilities = abilities.map(ability => ability.ability.name).join(', ');
                const pokemonImage = sprites.front_default;
                
                pokemonDetails.innerHTML = `
                    <h2>${pokemonName} (#${pokemonId})</h2>
                    <p><strong>Tipo:</strong> ${pokemonType}</p>
                    <p><strong>Habilidades:</strong> ${pokemonAbilities}</p>
                    <img src="${pokemonImage}" alt="${pokemonName} Image" class="pokemon-img">
                    `;
            })
            .catch(error => {
                console.error('Erro ao buscar informações do pokemon:', error);
                pokemonDetails.innerHTML = `<p>Pokemon não encontardo. Verifique o nome ou ID e tente novamente`
            });
    });
});