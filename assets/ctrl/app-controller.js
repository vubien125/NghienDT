const app = angular.module("myApp", ["ngRoute", "ui.bootstrap"]);
app.config(function ($routeProvider, $locationProvider) {
  // route
  $routeProvider
    .when("/", { templateUrl: "pages/home.html", controller: "home-ctrl" })
    .when("/shop", { templateUrl: "pages/shop.html", controller: "shop-ctrl" })
    .when("/product", {
      templateUrl: "pages/product.html",
      controller: "product-ctrl",
    })
    .when("/wishlist", {
      templateUrl: "pages/wishlist.html",
      controller: "wishlist-ctrl",
    })
    .when("/cart", { templateUrl: "pages/cart.html", controller: "cart-ctrl" })
    .when("/checkout", {
      templateUrl: "pages/checkout.html",
      controller: "checkout-ctrl",
    })

    .when("/my-account", {
      templateUrl: "pages/my-account.html",
      controller: "user-ctrl",
    })
    .when("/forgot-password", {
      templateUrl: "pages/forgot-password.html",
      controller: "user-ctrl",
    })
    .when("/register", {
      templateUrl: "pages/register.html",
      controller: "user-ctrl",
    })
    .when("/login", {
      templateUrl: "pages/login.html",
      controller: "user-ctrl",
    })

    .when("/contact-us", { templateUrl: "pages/contact-us.html" })
    .when("/404", { templateUrl: "pages/404.html" })
    .otherwise({ redirectTo: "/" });
});

app.directive("convertDate", function () {
  return {
    require: "ngModel",
    link: function (scope, element, attrs, ngModel) {
      ngModel.$formatters.push(function (fromModel) {
        fromModel = new Date(fromModel);
        return fromModel;
      });
      ngModel.$parsers.push(function (fromField) {
        fromField = fromField.getTime();
        return fromField;
      });
    },
  };
});

app.factory("myService", function () {
  var savedData = {};
  function set(data) {
    savedData = data;
  }
  function get() {
    return savedData;
  }
  return {
    set: set,
    get: get,
  };
});

app.controller("myCtrl", ($scope, $rootScope) => {
  $rootScope.cart = new Map();

  $scope.$on("addCart", (evt, data) => {
    let cart = $rootScope.cart;
    if (cart.has(data.id)) {
      let item = cart.get(data.id);
      item.quantity++;
    } else {
      cart.set(data.id, data);
    }

    $scope.total = getTotal(cart);
    $scope.cartArr = [...cart.values()];
  });
});

let getTotal = function (cart) {
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total;
};
