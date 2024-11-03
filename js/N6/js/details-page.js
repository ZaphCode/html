import { getBreedDetails } from "./api.js";
import { displayBreedDetails, displayError } from "./ui.js";

const breedId = new URLSearchParams(window.location.search).get("id");

(async () => {
  try {
    if (!breedId) throw new Error("No se encontró el ID del gato");

    const breed = await getBreedDetails(breedId);

    displayBreedDetails(breed);
  } catch (error) {
    displayError("No se pudo cargar la información del gato");
  }
})();
