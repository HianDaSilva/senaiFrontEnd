document.addEventListener('DOMContentLoaded', function() {
    const characterInput = document.getElementById('characterInput');
    const fetchCharacterButton = document.getElementById('fetchCharacterButton');
    const characterDetails = document.getElementById('characterDetails');
    
    fetchCharacterButton.addEventListener('click', function() {
        const characterId = characterInput.value.trim().toLowerCase();
        if (characterId === '') {
            alert('Por favor, digite um ID.');
            return;
        }
        characterDetails.innerHTML = '';
        fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then(response => {
              if (!response .ok) {
                throw new Error('personagem não encontrado');
              } 
              return response.json(); 
            })
            .then(data => {
                const { id, name, status, species, gender, location, image } = data;
                const charId = id;
                const charName = name.charAt(0).toUpperCase() + name.slice(1);
                const charStatus = status.charAt(0) + status.slice(1);
                const charSpecie = species.charAt(0) + species.slice(1);
                const charGender = gender.charAt(0) + gender.slice(1);
                const charLocation = location.name;
                const charImage = image;
                
                characterDetails.innerHTML =`
                    <h2>${charName} (*${charId})</h2>
                    <p>status: ${charStatus}</p>
                    <p>especie: ${charSpecie}</p>
                    <p>genero: ${charGender}</p>
                    <p>localização: ${charLocation}</p>
                    <img src="${charImage}" alt="${charName} Image" class="char-img">
                    `;
            })
                     
    });
});