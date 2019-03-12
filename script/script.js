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
