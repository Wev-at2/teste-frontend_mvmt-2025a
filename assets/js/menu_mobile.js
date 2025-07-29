export function setupMenu() {
    const btnMobile = document.getElementById("btn-mobile");
    const headerNav = document.getElementById("header-nav");
    const menuItems = document.querySelectorAll(".wc-header__menu--nav_item a");
    const sectionHero = document.querySelector("main");

    function openMenu(event) {
        if (event.type === "touchstart") event.preventDefault();
        headerNav.classList.add("active");
        btnMobile.setAttribute("aria-expanded", true);
        btnMobile.setAttribute("aria-label", "Fechar Menu");
        document.body.style.overflow = "hidden";
        btnMobile.style.visibility = "hidden"; 

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);
    }

    function closeMenu() {
        headerNav.classList.remove("active");
        btnMobile.setAttribute("aria-expanded", false);
        btnMobile.setAttribute("aria-label", "Abrir Menu");
        document.body.style.overflow = "";
        btnMobile.style.visibility = "";

        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("touchstart", handleClickOutside);
    }

    function handleClickOutside(event) {
        if (!headerNav.contains(event.target)) {
            closeMenu();
        }
    }

    function closeMenuOnOptionSelect() {
        closeMenu();
    }

    menuItems.forEach((menuItem) => {
        menuItem.addEventListener("click", closeMenuOnOptionSelect);
    });

    btnMobile.addEventListener("click", openMenu);
    btnMobile.addEventListener("touchstart", openMenu);
}
