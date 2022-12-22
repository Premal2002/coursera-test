let slideIndex = 0;
      showSlides();

      function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let slides1 = document.getElementsByClassName("mySlides1");
        let slides2 = document.getElementsByClassName("mySlides2");
        console.log(slides);
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
          slides1[i].style.display = "none";
          slides2[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
          slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = "block";
        slides1[slideIndex - 1].style.display = "block";
        slides2[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
      }