fetch("index_data01.json")
    .then(response => response.json())
    .then(data => {
        const imageContainer = document.getElementById("image-container");

        data.forEach(image => {
            const img = document.createElement("img");
            img.src = image.src;
            img.alt = image.title;
            img.width = 150;

            const caption = document.createElement("p");
            caption.textContent = image.title;

            const div = document.createElement("div");
            div.appendChild(img);
            div.appendChild(caption);
            
            imageContainer.appendChild(div);
        });
    })
    .catch(error => console.error("Fejl ved indlæsning af billeder:", error));
