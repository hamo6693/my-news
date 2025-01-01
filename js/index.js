var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.slide-img img');
    for (let i = 0; i < images.length; i++) {
        if (images[i].style.height < 250) {
            images[i].style.height = '250px';
        }
    }
});

const mql = window.matchMedia("(max-width:992px)")

const handlerOrientionChange = (e) => {
  if(mql.matches) {
    console.log("1");
    
  }else{
    console.log("10");
    
  }
}
handlerOrientionChange()

mql.onchange = (e) => {
  handlerOrientionChange(e)
}

document.getElementById("year").innerHTML = new Date().getFullYear()