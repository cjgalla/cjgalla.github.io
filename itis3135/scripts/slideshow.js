let slideIndex = 1;
showSlides(slideIndex);

document.querySelector(".prev").addEventListener("click", () => plusSlides(-1));
document.querySelector(".next").addEventListener("click", () => plusSlides(1));

document.querySelectorAll(".image-link").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        let num = parseInt(this.getAttribute("data-slide"));
        currentSlide(num);
    });
});

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}
