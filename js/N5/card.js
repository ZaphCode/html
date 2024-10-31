const html = String.raw;

async function getCat() {
  const requestOptions = {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      "x-api-key":
        "live_8Qr7HIYlcGYktMlSJK2DiuAdRM67FtYjFxSxcQijDeNjIgdk1VrHLt4gTcYSrZSr",
    }),
    redirect: "follow",
  };

  const response = await fetch(
    "https://api.thecatapi.com/v1/breeds?limit=1&order=RANDOM",
    requestOptions
  );

  const data = await response.json();

  return data[0];
}

// * Main code
(async () => {
  const cat = await getCat();
  console.log(cat);

  document.getElementById("main").innerHTML = html`
    <h1 class="text-4xl font-bold text-center mt-10">Cat of the Day!</h1>
    <div
      class="grid grid-cols-1 gap-x-10 xl:gap-x-0 lg:w-4/5 md:grid-cols-2 w-full mx-auto mt-10"
    >
      <div class="bg-red-10 md:pl-12 flex flex-col justify-center items-center">
        <img
          src="${cat.image.url}"
          alt="${cat.name}"
          class="rounded-lg shadow-2xl max-w-sm"
        />
      </div>
      <div class="bg-blue-10 md:pl-5 py-4 w-3/4 mx-auto md:mx-0">
        <h2 class="text-4xl font-bold mt-7 md:mt-2">🐱 ${cat.name}</h2>
        <p class="text-gray-700 py-3 border-b-2">${cat.description}</p>
        <div class="flex flex-col gap-y-1.5 w-3/4">
          <h3 class="text-xl font-bold mt-4">Additional Info</h3>
          <p><b>Live range:</b> ${cat.life_span} years</p>
          <p><b>Behavior:</b> ${cat.temperament}</p>
          <p><b>Origin:</b> ${cat.origin}</p>
          <p><b>Weight:</b> ${cat.weight.metric} kg</p>
          <p><b>Affection level:</b> ${cat.affection_level}/5</p>
          <p>
            <b>Wikipedia link:</b>
            <a class="underline text-blue-400" href="${cat.wikipedia_url}"
              >More info</a
            >
          </p>
        </div>
      </div>
    </div>
  `;
})();
