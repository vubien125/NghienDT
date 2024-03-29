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

app.factory("$utility", ($window, $http) => {
    return {
        get $message() {
            return {
                product: {
                    error: {
                        OVER_QUANTITY() {
                            return "Đã vượt quá số lượng hàng tồn";
                        },
                    },
                },
            };
        },
        get $templateUrl() {
            return {
                getHomeTemplates: () => {
                    const templatePath = "pages/home";
                    return {
                        slider: `${templatePath}/slider.html`,
                        features: `${templatePath}/features.html`,
                        products: `${templatePath}/products.html`,
                        featuredProducts: `${templatePath}/featured-product.html`,
                        productsByCategory: `${templatePath}/product-by-category.html`,
                        productItem: `${templatePath}/product-item.html`,
                        bannerTop: `${templatePath}/banner-top.html`,
                        bannerMiddle: `${templatePath}/banner-middle.html`,
                        bannerBottom: `${templatePath}/banner-bottom.html`,
                    };
                },
                getProductTemplates: () => {
                    const templatePath = "pages/product";
                    return {
                        breadcrumb: `${templatePath}/breadcrumb.html`,
                        details: `${templatePath}/details.html`,
                        reviews: `${templatePath}/reviews.html`,
                        related: `${templatePath}/related.html`,
                    };
                },
            };
        },
        get $storage() {
            const local = $window.localStorage;
            const session = $window.sessionStorage;
            const json = {
                string: (value) => {
                    return JSON.stringify(value);
                },
                parse: (value) => {
                    try {
                        return JSON.parse(value);
                    } catch (err) {
                        console.log(err);
                    }
                },
            };
            class Local {
                set(key, value) {
                    local.setItem(key, json.string(value));
                }
                get(key) {
                    let value = json.parse(local.getItem(key));
                    return value ? value : this.remove(key);
                }
                remove(key) {
                    local.removeItem(key);
                }
                clear() {
                    local.clear();
                }
            }
            class Session {
                set(key, value) {
                    session.setItem(key, json.string(value));
                }
                get(key) {
                    let value = json.parse(session.getItem(key));
                    return value ? value : this.remove(key);
                }
                remove(key) {
                    session.removeItem(key);
                }
                clear() {
                    session.clear();
                }
            }
            return {
                local: new Local(),
                session: new Session(),
            };
        },
        get $url() {
            class UrlService {
                redirect(url) {
                    $window.location.href = url;
                }
                redirectToProductPage() {
                    this.redirect("/#!product");
                }
            }
            return new UrlService();
        },
        get $data() {
            const api = "http://localhost:8080/api";
            const categoriesUrl = `${api}/category`;
            const productsUrl = `${api}/product`;
            const apiUrls = {
                categories: categoriesUrl,
                products: productsUrl,
            };
            return {
                fetch($scope, { name, url }) {
                    if (!url) url = apiUrls[name];
                    $http.get(url).then((resp) => {
                        $scope[name] = resp.data;
                    }).catch((err) => console.log(err));
                },
            };
        },
        get $owlSlick() {
            return {
                configIndex: ($scope) => {
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

                    $scope.owlOptionsss = {
                        loop: true,
                        margin: 30,
                        dots: false,
                        autoplay: false,
                        nav: true,
                        navText: [
                            '<i class="lnr lnr-arrow-left"></i>',
                            '<i class="lnr lnr-arrow-right"></i>',
                        ],
                        stagePadding: 0,
                        smartSpeed: 700,
                        responsive: {
                            0: {
                                items: 1,
                            },
                            480: {
                                items: 2,
                            },
                            768: {
                                items: 3,
                            },
                            992: {
                                items: 4,
                            },
                            1024: {
                                items: 5,
                            },
                            1600: {
                                items: 6,
                            },
                        },
                    };
                },
                configProduct: ($scope) => {
                    $scope.slickConfigs = {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        fade: true,
                        arrows: false,
                        asNavFor: ".pro-nav",
                    };

                    $scope.slickConfigss = {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        prevArrow:
                            '<button type="button" class="arrow-prev"><i class="fa fa-long-arrow-left"></i></button>',
                        nextArrow:
                            '<button type="button" class="arrow-next"><i class="fa fa-long-arrow-right"></i></button>',
                        asNavFor: ".product-large-slider",
                        centerMode: true,
                        arrows: true,
                        centerPadding: 0,
                        focusOnSelect: true,
                    };

                    // product view mode change js
                    $(".product-view-mode a").on("click", function (e) {
                        e.preventDefault();

                        var shopProductWrap = $(".shop-product-wrap");
                        var viewMode = $(this).data("target");

                        $(".product-view-mode a").removeClass("active");
                        $(this).addClass("active");
                        shopProductWrap
                            .removeClass("grid list column_3")
                            .addClass(viewMode);
                    });

                    // modal fix
                    $(".modal").on("shown.bs.modal", function (e) {
                        $(".pro-nav").resize();
                    });
                },
            };
        },
    };
});

app.factory("$cart", ($utility) => {
    const $message = $utility.$message;
    const $local = $utility.$storage.local;
    class Cart {
        #items;
        #cart_local = "cart";
        constructor() {
            this.#items = new Map();
            this.getFromLocal();
        }

        get size() {
            return this.#items.size;
        }

        get total() {
            let total = 0;
            this.#items.forEach((item) => {
                total += item.price * item.quantity;
            });
            return total;
        }

        get values() {
            return [...this.#items.values()];
        }

        getItem(id) {
            return this.#items.get(id);
        }

        getItemQuantity(id) {
            const item = this.getItem(id);
            return item ? item.quantity : 0;
        }

        contains(productId) {
            return this.#items.has(productId);
        }

        addItem(product, quantityToAdd) {
            let item = this.getItem(product.id);
            let quantity;
            quantityToAdd = quantityToAdd ? quantityToAdd : 1;
            if (item) {
                quantity = item.quantity + quantityToAdd;
                if (quantity > product.quantity) {
                    alert($message.product.error.OVER_QUANTITY);
                    return;
                }
            } else {
                quantity = quantityToAdd;
            }
            this.#items.set(product.id, { ...product, quantity: quantity });
            this.saveToLocal();
        }

        removeItem(productId) {
            this.#items.delete(productId);
            this.saveToLocal();
        }

        saveToLocal() {
            console.log("save to local");
            $local.set(this.#cart_local, this.values);
        }

        getFromLocal() {
            const items = $local.get(this.#cart_local);
            if (items) items.forEach((item) => this.#items.set(item.id, item));
        }


    }
    return new Cart();
});

app.factory("$product", ($utility) => {
    const $session = $utility.$storage.session;
    return {
        set current(product) {
            $session.set("product", product);
        },
        get current() {
            return $session.get("product");
        },
    };
});
