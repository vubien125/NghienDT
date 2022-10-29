app.controller("index-ctrl", ($scope, $rootScope, $window, $cart) => {
  $scope.removeCartItem = (item) => {
    $cart.removeItem(item.id);
  };

  $scope.$on("viewProduct", (evt, item) => {
    $window.location.href = "/#!product";
    $scope.$broadcast("viewProduct", item);
  });
  function customCarousel() {
    $scope.owlOptions = {
      loop: true,
      dots: false,
      margin: 30,
      nav: true,
      navText: [
        '<i class="lnr lnr-arrow-left"></i>',
        '<i class="lnr lnr-arrow-right"></i>',
      ],
      autoplay: false,
      stagePadding: 0,
      smartSpeed: 700,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        480: {
          items: 2,
          nav: false,
        },
        768: {
          items: 3,
        },
        992: {
          items: 4,
        },
        1024: {
          items: 4,
        },
        1600: {
          items: 7,
        },
      },
    };

    $scope.owlOptionss = {
      items: 3,
      loop: true,
      dots: false,
      margin: 30,
      nav: true,
      navText: [
        '<i class="lnr lnr-arrow-left"></i>',
        '<i class="lnr lnr-arrow-right"></i>',
      ],
      autoplay: false,
      stagePadding: 0,
      smartSpeed: 700,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        480: {
          items: 1,
          nav: false,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1024: {
          items: 3,
        },
        1600: {
          items: 4,
        },
      },
    };

    $scope.slickConfig = {
      arrows: false,
      autoplay: false,
      autoplaySpeed: 5000,
      dots: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      fade: true,
      infinite: true,
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            dots: true,
          },
        },
      ],
    };
  }
  customCarousel();
});
