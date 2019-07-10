document.addEventListener('DOMContentLoaded', function () {
    const menus = document.querySelectorAll('.side-menu');
    M.Sidenav.init(menus, {
      edge: 'right'
    });
    // carousel
    const elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true,
    });
  });