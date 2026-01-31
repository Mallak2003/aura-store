document.addEventListener('DOMContentLoaded', () => {
    // ========================================= //
    //          AURA v27.0 - JAVASCRIPT          //
    // ========================================= //

    // --- STATE MANAGEMENT --- //
    const state = {
        currentLang: 'ar',
        products: [
            { id: 'h001', name_key: 'product_name_h001', price: 49.99, image: 'assets/images/hoodie-blue.jpeg' },
            { id: 'h002', name_key: 'product_name_h002', price: 54.99, image: 'assets/images/hoodie-purple.jpeg' },
            { id: 'h003', name_key: 'product_name_h003', price: 49.99, image: 'assets/images/hoodie-brown.jpeg' },
            { id: 'h004', name_key: 'product_name_h004', price: 49.99, image: 'assets/images/hoodie-skyblue.jpeg' },
            { id: 'h005', name_key: 'product_name_h005', price: 49.99, image: 'assets/images/hoodie-gray.jpeg' },
            { id: 'h006', name_key: 'product_name_h006', price: 59.99, image: 'assets/images/hoodie-black.jpeg' },
            { id: 'h007', name_key: 'product_name_h007', price: 48.99, image: 'assets/images/hoodie-beige.jpeg' },
            { id: 'h008', name_key: 'product_name_h008', price: 52.99, image: 'assets/images/hoodie-pink.jpeg' },
            { id: 'h009', name_key: 'product_name_h009', price: 55.99, image: 'assets/images/hoodie-olive.jpeg' },
        ],
        translations: {
            ar: {
                // Titles
                title_home: "AURA | متجر الهودي العصري",
                title_product_loading: "تحميل المنتج... - AURA",
                title_cart: "سلة المشتريات - AURA",
                title_about: "من نحن - AURA",
                title_faq: "الأسئلة الشائعة - AURA",
                title_careers: "الوظائف - AURA",
                title_shipping: "الشحن والتسليم - AURA",
                title_success: "تم تأكيد الطلب - AURA",
                // Nav & Header
                nav_home: "الرئيسية",
                nav_shop: "المتجر",
                // Hero Section
                hero_title: "دفء الشتاء، بلمسة عصرية.",
                hero_desc: "اكتشف تشكيلتنا الجديدة من الهوديز المصممة لراحتك وأناقتك.",
                hero_btn: "تسوق الآن",
                // Shop Section
                featured_products_title: "اكتشف مجموعتنا",
                // Product Names
                product_name_h001: "هودي أزرق كلاسيكي",
                product_name_h002: "هودي بنفسجي فاخر",
                product_name_h003: "هودي بني ترابي",
                product_name_h004: "هودي أزرق سماوي",
                product_name_h005: "هودي رمادي رياضي",
                product_name_h006: "هودي أسود أنيق",
                product_name_h007: "هودي بيج هادئ",
                product_name_h008: "هودي زهري عصري",
                product_name_h009: "هودي زيتي مميز",
                // Product Detail
                loading_product: "جاري تحميل المنتج...",
                size_label: "اختر المقاس:",
                add_to_cart: "أضف إلى السلة",
                // Cart & Checkout
                cart_title: "سلة المشتريات",
                summary_title: "ملخص الطلب",
                summary_subtotal: "المجموع الفرعي",
                summary_total: "المجموع الكلي",
                checkout_btn: "الانتقال إلى الدفع",
                checkout_title: "تفاصيل الشحن",
                checkout_contact_info: "معلومات التواصل",
                checkout_shipping_address: "عنوان الشحن",
                back_to_cart_btn: "العودة إلى السلة",
                place_order_btn: "تأكيد الطلب والدفع",
                // Placeholders
                placeholder_email: "البريد الإلكتروني",
                placeholder_firstname: "الاسم الأول",
                placeholder_lastname: "الاسم الأخير",
                placeholder_address: "العنوان",
                placeholder_city: "المدينة",
                // Footer
                footer_links_company: "الشركة",
                footer_link_about: "من نحن",
                footer_link_careers: "الوظائف",
                footer_links_help: "مساعدة",
                footer_link_faq: "الأسئلة الشائعة",
                footer_link_shipping: "الشحن والتسليم",
                footer_copy: "© 2025 AURA. جميع الحقوق محفوظة.",
                // Static Pages
                about_title: "قصتنا",
                about_p1: "في AURA، نحن نؤمن بأن الراحة والأناقة يجب أن يسيرا جنبًا إلى جنب. بدأت رحلتنا بشغف لإنشاء الهودي المثالي - قطعة ملابس لا تبدو رائعة فحسب، بل تشعرك بالراحة المطلقة.",
                about_p2: "نحن نختار أجود أنواع الأقمشة ونصمم كل قطعة بعناية فائقة لتقديم جودة لا تضاهى وتصميم يدوم طويلاً.",
                faq_title: "الأسئلة الشائعة",
                faq_q1: "ما هي المواد المستخدمة في صناعة الهوديز؟",
                faq_a1: "نحن نستخدم مزيجاً من القطن الفاخر والبوليستر لضمان النعومة والدفء والمتانة.",
                faq_q2: "كم من الوقت يستغرق الشحن؟",
                faq_a2: "يستغرق الشحن المحلي من 3-5 أيام عمل، والشحن الدولي من 7-14 يوم عمل.",
                careers_title: "انضم إلى فريقنا",
                careers_p1: "نحن نبحث دائمًا عن أفراد موهوبين ومتحمسين للانضمام إلى عائلتنا. إذا كنت تشاركنا شغفنا بالجودة والإبداع، فنحن نود أن نسمع منك.",
                careers_p2: "حاليًا لا توجد وظائف شاغرة، ولكن يمكنك إرسال سيرتك الذاتية إلى `careers@aura.com` وسنتواصل معك عند توفر فرصة مناسبة.",
                shipping_title: "معلومات الشحن",
                shipping_p1: "نحن نشحن إلى جميع أنحاء العالم. يتم معالجة الطلبات في غضون 1-2 أيام عمل.",
                shipping_rates_title: "أسعار الشحن:",
                shipping_rate_1: "الشحن المحلي (3-5 أيام عمل ): $5.00",
                shipping_rate_2: "الشحن الدولي (7-14 يوم عمل): $20.00",
                // Success Page
                success_title: "شكراً لك!",
                success_p1: "لقد تم استلام طلبك بنجاح. ستصلك رسالة تأكيد عبر البريد الإلكتروني قريبًا.",
                success_btn: "العودة إلى الصفحة الرئيسية",
                // Toast Messages
                toast_added_to_cart: "تمت الإضافة إلى السلة بنجاح!",
                toast_item_removed: "تمت إزالة المنتج.",
                toast_cart_empty: "سلة المشتريات فارغة.",
            },
            en: {
                // Titles
                title_home: "AURA | The Modern Hoodie Store",
                title_product_loading: "Loading Product... - AURA",
                title_cart: "Shopping Cart - AURA",
                title_about: "About Us - AURA",
                title_faq: "FAQ - AURA",
                title_careers: "Careers - AURA",
                title_shipping: "Shipping & Delivery - AURA",
                title_success: "Order Confirmed - AURA",
                // Nav & Header
                nav_home: "Home",
                nav_shop: "Shop",
                // Hero Section
                hero_title: "Winter Warmth, Modern Touch.",
                hero_desc: "Discover our new collection of hoodies, designed for your comfort and style.",
                hero_btn: "Shop Now",
                // Shop Section
                featured_products_title: "Discover Our Collection",
                // Product Names
                product_name_h001: "Classic Blue Hoodie",
                product_name_h002: "Luxury Purple Hoodie",
                product_name_h003: "Earthy Brown Hoodie",
                product_name_h004: "Sky Blue Hoodie",
                product_name_h005: "Sporty Gray Hoodie",
                product_name_h006: "Elegant Black Hoodie",
                product_name_h007: "Calm Beige Hoodie",
                product_name_h008: "Trendy Pink Hoodie",
                product_name_h009: "Signature Olive Hoodie",
                // Product Detail
                loading_product: "Loading product...",
                size_label: "Select Size:",
                add_to_cart: "Add to Cart",
                // Cart & Checkout
                cart_title: "Shopping Cart",
                summary_title: "Order Summary",
                summary_subtotal: "Subtotal",
                summary_total: "Total",
                checkout_btn: "Proceed to Checkout",
                checkout_title: "Shipping Details",
                checkout_contact_info: "Contact Information",
                checkout_shipping_address: "Shipping Address",
                back_to_cart_btn: "Back to Cart",
                place_order_btn: "Confirm & Pay",
                // Placeholders
                placeholder_email: "Email",
                placeholder_firstname: "First Name",
                placeholder_lastname: "Last Name",
                placeholder_address: "Address",
                placeholder_city: "City",
                // Footer
                footer_links_company: "Company",
                footer_link_about: "About Us",
                footer_link_careers: "Careers",
                footer_links_help: "Help",
                footer_link_faq: "FAQ",
                footer_link_shipping: "Shipping & Delivery",
                footer_copy: "© 2025 AURA. All rights reserved.",
                // Static Pages
                about_title: "Our Story",
                about_p1: "At AURA, we believe comfort and style should go hand-in-hand. Our journey began with a passion for creating the perfect hoodie – a piece of clothing that not only looks great but feels absolutely comfortable.",
                about_p2: "We select the finest fabrics and design each piece with meticulous care to deliver unparalleled quality and a design that lasts.",
                faq_title: "Frequently Asked Questions",
                faq_q1: "What materials are the hoodies made of?",
                faq_a1: "We use a premium blend of cotton and polyester to ensure softness, warmth, and durability.",
                faq_q2: "How long does shipping take?",
                faq_a2: "Domestic shipping takes 3-5 business days, and international shipping takes 7-14 business days.",
                careers_title: "Join Our Team",
                careers_p1: "We are always looking for talented and passionate individuals to join our family. If you share our passion for quality and creativity, we would love to hear from you.",
                careers_p2: "There are currently no open positions, but you can send your resume to `careers@aura.com` and we will contact you when a suitable opportunity arises.",
                shipping_title: "Shipping Information",
                shipping_p1: "We ship worldwide. Orders are processed within 1-2 business days.",
                shipping_rates_title: "Shipping Rates:",
                shipping_rate_1: "Domestic Shipping (3-5 business days): $5.00",
                shipping_rate_2: "International Shipping (7-14 business days): $20.00",
                // Success Page
                success_title: "Thank You!",
                success_p1: "Your order has been successfully received. You will receive a confirmation email shortly.",
                success_btn: "Back to Home",
                // Toast Messages
                toast_added_to_cart: "Added to cart successfully!",
                toast_item_removed: "Item removed.",
                toast_cart_empty: "Your cart is empty.",
            }
        }
    };

    // --- UTILITY FUNCTIONS --- //
    const saveState = (key, value) => localStorage.setItem(key, JSON.stringify(value));
    const loadState = (key) => JSON.parse(localStorage.getItem(key));

    const showToast = (messageKey) => {
        const toast = document.getElementById('toast-notification');
        const messageSpan = document.getElementById('toast-message');
        if (toast && messageSpan) {
            messageSpan.textContent = state.translations[state.currentLang][messageKey];
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 3000);
        }
    };

    // --- TRANSLATION --- //
    const applyTranslations = () => {
        const lang = state.currentLang;
        const translations = state.translations[lang];
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[key]) {
                // Preserve child elements like icons
                const icon = element.querySelector('i');
                if (icon) {
                    element.innerHTML = `${translations[key]} ${icon.outerHTML}`;
                } else {
                    element.innerHTML = translations[key];
                }
            }
        });

        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (translations[key]) {
                element.placeholder = translations[key];
            }
        });

        const langSwitchBtn = document.getElementById('lang-switch-btn');
        if (langSwitchBtn) {
            langSwitchBtn.textContent = lang === 'ar' ? 'EN' : 'AR';
        }
    };

    const toggleLanguage = () => {
        state.currentLang = state.currentLang === 'ar' ? 'en' : 'ar';
        saveState('auraLang', state.currentLang);
        applyTranslations();
    };

    // --- CART LOGIC --- //
    const getCart = () => loadState('auraCart') || [];
    const saveCart = (cart) => saveState('auraCart', cart);

    const updateCartCount = () => {
        const cart = getCart();
        document.querySelectorAll('.cart-count').forEach(el => {
            el.textContent = cart.length;
        });
    };

    const addToCart = (productId, size) => {
        const cart = getCart();
        const newItem = {
            cartItemId: `${productId}-${size}-${Date.now()}`, // Unique ID for each item instance
            productId,
            size,
            quantity: 1
        };
        cart.push(newItem);
        saveCart(cart);
        updateCartCount();
        showToast('toast_added_to_cart');
    };

    const removeFromCart = (cartItemId) => {
        let cart = getCart();
        cart = cart.filter(item => item.cartItemId !== cartItemId);
        saveCart(cart);
        updateCartCount();
        if (document.body.classList.contains('cart-page')) {
            renderCartPage();
        }
        showToast('toast_item_removed');
    };

    // --- RENDER FUNCTIONS --- //
    const renderProductGrid = (container) => {
        if (!container) return;
        container.innerHTML = '';
        state.products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <a href="product.html?id=${product.id}" class="product-image-container">
                    <img src="${product.image}" alt="${state.translations[state.currentLang][product.name_key]}" class="product-image">
                </a>
                <div class="product-info">
                    <h3 class="product-name" data-translate="${product.name_key}">${state.translations[state.currentLang][product.name_key]}</h3>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                </div>
            `;
            container.appendChild(productCard);
        });
    };

    const renderProductDetail = (container) => {
        if (!container) return;
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        const product = state.products.find(p => p.id === productId);

        if (!product) {
            container.innerHTML = `<h1 data-translate="loading_product">Product not found.</h1>`;
            return;
        }

        document.title = `${state.translations[state.currentLang][product.name_key]} - AURA`;

        container.innerHTML = `
            <div class="product-detail-image-wrapper">
                <img src="${product.image}" alt="${state.translations[state.currentLang][product.name_key]}" class="product-detail-image">
            </div>
            <div class="product-detail-info">
                <h1 class="product-name" data-translate="${product.name_key}">${state.translations[state.currentLang][product.name_key]}</h1>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <div class="product-options">
                    <div class="option-group">
                        <label class="option-label" data-translate="size_label">${state.translations[state.currentLang].size_label}</label>
                        <div class="size-selector">
                            <div class="size-option" data-size="S">S</div>
                            <div class="size-option" data-size="M">M</div>
                            <div class="size-option" data-size="L">L</div>
                            <div class="size-option" data-size="XL">XL</div>
                        </div>
                    </div>
                </div>
                <button class="btn btn-primary add-to-cart-btn" id="add-to-cart-btn" disabled>
                    <span data-translate="add_to_cart">${state.translations[state.currentLang].add_to_cart}</span>
                </button>
            </div>
        `;

        let selectedSize = null;
        const sizeSelector = container.querySelector('.size-selector');
        const addToCartBtn = container.querySelector('#add-to-cart-btn');

        sizeSelector.addEventListener('click', (e) => {
            if (e.target.classList.contains('size-option')) {
                sizeSelector.querySelectorAll('.size-option').forEach(opt => opt.classList.remove('selected'));
                e.target.classList.add('selected');
                selectedSize = e.target.dataset.size;
                addToCartBtn.disabled = false;
            }
        });

        addToCartBtn.addEventListener('click', () => {
            if (selectedSize) {
                addToCart(product.id, selectedSize);
            }
        });
    };

    const renderCartPage = () => {
        const cart = getCart();
        const cartItemsList = document.querySelector('.cart-items-list');
        const summarySubtotal = document.getElementById('summary-subtotal');
        const summaryTotal = document.getElementById('summary-total');
        const goToDetailsBtn = document.getElementById('go-to-details-btn');

        if (!cartItemsList) return;

        cartItemsList.innerHTML = '';
        let subtotal = 0;

        if (cart.length === 0) {
            cartItemsList.innerHTML = `<p data-translate="toast_cart_empty">${state.translations[state.currentLang].toast_cart_empty}</p>`;
            goToDetailsBtn.disabled = true;
        } else {
            cart.forEach(item => {
                const product = state.products.find(p => p.id === item.productId);
                if (product) {
                    const itemElement = document.createElement('div');
                    itemElement.className = 'cart-item';
                    itemElement.innerHTML = `
                        <img src="${product.image}" alt="${state.translations[state.currentLang][product.name_key]}" class="cart-item-img">
                        <div class="cart-item-details">
                            <span class="item-name" data-translate="${product.name_key}">${state.translations[state.currentLang][product.name_key]}</span>
                            <span class="item-meta">Size: ${item.size}</span>
                            <span class="item-price">$${product.price.toFixed(2)}</span>
                        </div>
                        <button class="remove-item-btn" data-cart-item-id="${item.cartItemId}" data-translate="remove_btn">إزالة</button>
                    `;
                    cartItemsList.appendChild(itemElement);
                    subtotal += product.price;
                }
            });
            goToDetailsBtn.disabled = false;
        }

        summarySubtotal.textContent = `$${subtotal.toFixed(2)}`;
        summaryTotal.textContent = `$${subtotal.toFixed(2)}`; // Assuming no shipping/taxes yet

        document.querySelectorAll('.remove-item-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const cartItemId = e.target.dataset.cartItemId;
                removeFromCart(cartItemId);
            });
        });
    };

    // --- PAGE-SPECIFIC INITIALIZATION --- //
    const initHomePage = () => {
        const productGrid = document.querySelector('.product-grid');
        renderProductGrid(productGrid);

        // Smooth scroll for "Shop Now" button
        const shopNowBtn = document.querySelector('.hero-section .btn');
        const shopSection = document.getElementById('shop');
        if (shopNowBtn && shopSection) {
            shopNowBtn.addEventListener('click', (e) => {
                e.preventDefault();
                shopSection.scrollIntoView({ behavior: 'smooth' });
            });
        }
    };

    const initProductDetailPage = () => {
        const productDetailContainer = document.getElementById('product-detail-container');
        renderProductDetail(productDetailContainer);
    };

    const initCartPage = () => {
        const cartView = document.getElementById('cart-view');
        const checkoutView = document.getElementById('checkout-details-view');
        const goToDetailsBtn = document.getElementById('go-to-details-btn');
        const backToCartBtn = document.getElementById('back-to-cart-btn');
        const checkoutForm = document.getElementById('checkout-form');

        renderCartPage();

        goToDetailsBtn.addEventListener('click', () => {
            cartView.classList.add('hidden');
            checkoutView.classList.remove('hidden');
        });

        backToCartBtn.addEventListener('click', () => {
            checkoutView.classList.add('hidden');
            cartView.classList.remove('hidden');
        });

        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real app, you would process payment here.
            // For this demo, we'll just clear the cart and redirect.
            saveCart([]); // Clear the cart
            window.location.href = 'success.html';
        });
    };

    // --- GLOBAL INITIALIZATION --- //
    const initGlobal = () => {
        // Load language preference
        state.currentLang = loadState('auraLang') || 'ar';

        // Nav menu logic
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        const navClose = document.getElementById('nav-close');
        if (navToggle) {
            navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'));
        }
        if (navClose) {
            navClose.addEventListener('click', () => navMenu.classList.remove('show-menu'));
        }

        // Header scroll effect
        const header = document.querySelector('.main-header');
        if (header && !header.classList.contains('header-scrolled')) { // Only add if not static
            window.addEventListener('scroll', () => {
                if (window.scrollY >= 50) {
                    header.classList.add('header-scrolled');
                } else {
                    header.classList.remove('header-scrolled');
                }
            });
        }

        // Language switch
        const langSwitchBtn = document.getElementById('lang-switch-btn');
        if (langSwitchBtn) {
            langSwitchBtn.addEventListener('click', toggleLanguage);
        }

        // Apply initial state
        updateCartCount();
        applyTranslations();
    };

    // --- SCRIPT EXECUTION --- //
    initGlobal();

    const body = document.body;
    if (body.classList.contains('home-page')) {
        initHomePage();
    } else if (body.classList.contains('product-detail-page')) {
        initProductDetailPage();
    } else if (body.classList.contains('cart-page')) {
        initCartPage();
    }
});
