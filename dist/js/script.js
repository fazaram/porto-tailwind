// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// certs
const track = document.getElementById("carousel-container");
let index = 2; // Gambar utama awal ada di posisi ke-3 (index 2)

function moveCarousel() {
  index = (index + 1) % track.children.length;

  let images = [...track.children];

  // Reset semua ukuran dan opacity
  images.forEach((img) => {
    img.classList.remove("w-52", "mx-2");
    img.classList.add("w-24", "opacity-50");
  });

  // Atur gambar utama baru
  images[index].classList.remove("w-24", "opacity-50");
  images[index].classList.add("w-52", "mx-2");

  // Perbarui posisi tampilan agar tetap di tengah
  track.appendChild(images[0]);
}

setInterval(moveCarousel, 5000);
