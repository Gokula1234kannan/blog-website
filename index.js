const menuicon =document.getElementById("menu-icon2");
const menu =document.getElementById("menu-icon");

menuicon?.addEventListener("click", () => {
  if(menu?.className === "hidden"){
    menu.classList.remove("hidden")
  }else{
    menu.classList.add("hidden");
  }
});