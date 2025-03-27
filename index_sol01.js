function generateImages() {
    fetch("index_data01.json")
        .then(response => response.json())
        .then(data => {
            const imagesContainer = document.getElementById("container1");
            imagesContainer.innerHTML = "";

            for (let i = 0; i < 1; i++) {
                const randomIndex = Math.floor(Math.random() * data.length); // Vælg tilfældigt billede
                const imageData = data[randomIndex];

                const img = document.createElement("img");
                img.src = imageData.src;
                img.alt = imageData.title;
                img.height = 400;
                img.classList.add("show"); // Tilføjer fade-in effekt

                imagesContainer.appendChild(img);
            }
        })
        .catch(error => console.error("Fejl ved indlæsning af billeder:", error));
}

function generateImages02() {
    fetch("index_data01.json")
        .then(response => response.json())
        .then(data => {
            const imagesContainer = document.getElementById("container2");
            imagesContainer.innerHTML = "";

            for (let i = 0; i < 1; i++) {
                const randomIndex = Math.floor(Math.random() * data.length); // Vælg tilfældigt billede
                const imageData = data[randomIndex];

                const img = document.createElement("img");
                img.src = imageData.src;
                img.alt = imageData.title;
                img.height = 400;
                img.classList.add("show"); // Tilføjer fade-in effekt

                imagesContainer.appendChild(img);
            }
        })
        .catch(error => console.error("Fejl ved indlæsning af billeder:", error));
}
