document.addEventListener("DOMContentLoaded", function() {
    const previewImages = document.querySelectorAll(".preview-image");
    const imagePreviewContainer = document.getElementById("image-preview");
    const imagePreview = document.getElementById("preview-img");

    previewImages.forEach(image => {
        image.addEventListener("click", function() {
            const src = image.getAttribute("src");
            imagePreview.setAttribute("src", src);
            imagePreviewContainer.style.display = "flex";
        });
    });

    imagePreviewContainer.addEventListener("click", function() {
        imagePreviewContainer.style.display = "none";
    });
});


