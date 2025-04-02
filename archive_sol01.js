document.addEventListener("DOMContentLoaded", function() {
    fetch("index_data01.json")
        .then(response => response.json())
        .then(data => {
            const gallery = document.getElementById("image-gallery");

            data.forEach(imageData => {
                const imgWrapper = document.createElement("div");
                imgWrapper.classList.add("image-container");

                const img = document.createElement("img");
                img.src = imageData.src;
                img.alt = imageData.title;

                const tooltip = document.createElement("div");
                tooltip.classList.add("tooltip");
                tooltip.textContent = imageData.title;

                imgWrapper.appendChild(img);
                imgWrapper.appendChild(tooltip);
                gallery.appendChild(imgWrapper);
            });
        })
        .catch(error => console.error("Fejl ved indlæsning af billeder:", error));
});
