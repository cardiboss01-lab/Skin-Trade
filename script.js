/* GALLERY LIGHTBOX */

const galleryImages =
document.querySelectorAll(".portfolio-item img");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightbox-img");

const closeBtn =
document.querySelector(".close-lightbox");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = image.src;

    });

});

if(closeBtn){

    closeBtn.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

}

if(lightbox){

    lightbox.addEventListener("click", (e) => {

        if(e.target === lightbox){

            lightbox.style.display = "none";

        }

    });

}