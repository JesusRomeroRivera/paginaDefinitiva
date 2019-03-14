const $burgerButton=document.querySelector(".icon-menu");
const $menu=document.querySelector(".header-nav");

$burgerButton.addEventListener("click",hideShow);

function hideShow() {
  if ($burgerButton.classList.contains("is-active")) {
    $burgerButton.classList.remove("is-active");
    $menu.classList.remove("is-active");
    $menu.classList.add("not-active");
  }else{
    $burgerButton.classList.add("is-active");
    $menu.classList.add("is-active");
    $menu.classList.remove("not-active");
  }
}

const $images=document.querySelector(".images-image");
const $first=document.querySelector(".first");
const $second=document.querySelector(".second");

$first.addEventListener("click",primeraEscena);
$second.addEventListener("click",segundaEscena);

function primeraEscena() {
  $images.classList.add("primero");
  $images.classList.remove("segundo");
}

function segundaEscena() {
  $images.classList.remove("primero");
  $images.classList.add("segundo");

}
