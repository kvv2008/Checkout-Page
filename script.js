var slideIndex = 1;
    slideShow(slideIndex);

    function currentSlide(n){
        (slideShow(slideIndex=n))
    }

    function slideShow(){
        var i;
        var slides = document.getElementsByClassName("imgSlide");
        var dots = document.getElementsByClassName("pagination");

        for(i = 0; i < slides.length; i++){
            slides[i].style.display = ("none")
        }
        for(i = 0; i < dots.length; i++){
            dots[i].classList.remove("active")
        }

        slides[slideIndex - 1].style.display = ("block")
        dots[slideIndex - 1].classList.add("active")
    }