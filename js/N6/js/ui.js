const catGrid = document.getElementById("catGrid");
const catDetails = document.getElementById("catDetails");
const html = String.raw;

export function showBreeds(breeds) {
  catGrid.innerHTML = "";

  breeds.forEach((breed) => {
    const catCard = document.createElement("div");

    catCard.classList.add("cat-card");
    catCard.innerHTML = html`
      <img
        src="${breed.image?.url || "https://via.placeholder.com/150"}"
        alt="${breed.name}"
      />
      <h3>${breed.name}</h3>
      <p>${breed.temperament || "Temperamento no disponible"}</p>
      <a
        class="see-details-button"
        href="details.html?id=${breed.reference_image_id}"
        target="_blank"
        >Ver detalles
      </a>
    `;
    catGrid.appendChild(catCard);
  });
}

export function updateButtons(currentPage, breedCount, limit) {
  document.getElementById("prevPage").disabled = currentPage === 1;
  document.getElementById("nextPage").disabled = breedCount < limit;
}

export function displayBreedDetails(breed) {
  catDetails.innerHTML = html`
    <img id="catImage" src="${breed.image_url}" alt="${breed.name}" />
    <div>
      <h1 id="catName">${breed.name}</h1>
      <p>
        <strong>Temperamento:</strong>
        <span id="catTemperament">${breed.temperament}</span>
      </p>
      <p>
        <strong>Años de vida:</strong>
        <span id="catLifeSpan">${breed.life_span}</span>
      </p>
      <p>
        <strong>Descripción:</strong>
        <span id="catDescription">${breed.description}</span>
      </p>
      <p>
        <strong>Amigable con niños:</strong>
        <span id="childFriendly">${breed.child_friendly}</span>
      </p>
      <p>
        <strong>Amigable con perros:</strong>
        <span id="catFriendly">${breed.dog_friendly}</span>
      </p>
      <p><strong>Origen:</strong> <span id="origin">${breed.origin}</span></p>
      <p>
        <strong>Enlace a Wikipedia:</strong>
        <a id="wikiLink" href="${breed.wikipedia_url}" target="_blank"
          >Más información</a
        >
      </p>
    </div>
  `;
}

export function displayError(message) {
  catDetails.innerHTML = html`<div class="error-container">
    <img
      src="https://c8.alamy.com/comp/KABE3F/404-error-page-not-found-concept-and-a-broken-or-dead-link-symbol-KABE3F.jpg"
      alt="error"
    />
    <p>${message}</p>
  </div>`;
}
