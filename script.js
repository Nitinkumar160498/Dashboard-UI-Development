$(document).ready(function () {
    const sideNav = $(".sidenav");
    const menuToggle = $(".menu-toggle");

    menuToggle.click(function () {
        sideNav.toggleClass("open");
    });
});