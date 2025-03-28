document.addEventListener("DOMContentLoaded", function() {
    fetch("index_data01.json")
        .then(response => response.json())
        .then(data => {
            const gallery = document.getElementById("image-gallery");

            data.forEach(imageData => {
                const img = document.createElement("img");
                img.src = imageData.src;
                img.alt = imageData.title;
                gallery.appendChild(img);

            });
        })
        .catch(error => console.error("Fejl ved indlæsning af billeder:", error));
});