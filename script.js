/* =========================================================
   TAMIN GROUP
   Main JavaScript
   ========================================================= */


document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       PAGE LOADER
    ===================================================== */

    const loader = document.querySelector(".page-loader");

    window.addEventListener("load", () => {

        setTimeout(() => {
            loader.classList.add("hidden");
        }, 700);

    });


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuClose = document.querySelector(".menu-close");

    const mobileLinks = document.querySelectorAll(
        ".mobile-menu nav a"
    );


    function openMenu() {

        mobileMenu.classList.add("active");
        document.body.classList.add("menu-open");

    }


    function closeMenu() {

        mobileMenu.classList.remove("active");
        document.body.classList.remove("menu-open");

    }


    if (menuToggle) {
        menuToggle.addEventListener("click", openMenu);
    }


    if (menuClose) {
        menuClose.addEventListener("click", closeMenu);
    }


    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {
            closeMenu();
        });

    });


    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeMenu();
        }

    });


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements = document.querySelectorAll(
        ".section-heading, " +
        ".intro-content, " +
        ".direction-card, " +
        ".project-card, " +
        ".process-item, " +
        ".impact-content, " +
        ".timeline-item, " +
        ".final-cta-inner"
    );


    revealElements.forEach(element => {
        element.classList.add("reveal");
    });


    const revealObserver = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }

    );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =====================================================
       DIRECTION CARD STAGGER
    ===================================================== */

    const directionCards =
        document.querySelectorAll(".direction-card");


    directionCards.forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 0.04}s`;

    });


    /* =====================================================
       PROJECT CARD STAGGER
    ===================================================== */

    const projectCards =
        document.querySelectorAll(".project-card");


    projectCards.forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 0.05}s`;

    });


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".desktop-nav a");


    const sectionObserver = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }


                const currentId =
                    entry.target.getAttribute("id");


                navLinks.forEach(link => {

                    const href =
                        link.getAttribute("href");


                    if (href === `#${currentId}`) {

                        link.classList.add("active");

                    } else {

                        link.classList.remove("active");

                    }

                });

            });

        },

        {
            threshold: 0.35
        }

    );


    sections.forEach(section => {

        sectionObserver.observe(section);

    });


    /* =====================================================
       HEADER SCROLL EFFECT
    ===================================================== */

    const header =
        document.querySelector(".site-header");


    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 80) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        },
        {
            passive: true
        }
    );


    /* =====================================================
       SMOOTH ANCHOR SCROLL
    ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(anchor => {

        anchor.addEventListener(
            "click",
            event => {

                const targetId =
                    anchor.getAttribute("href");


                if (
                    targetId === "#" ||
                    targetId === ""
                ) {
                    return;
                }


                const target =
                    document.querySelector(targetId);


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


    /* =====================================================
       PARALLAX HERO
    ===================================================== */

    const heroGrid =
        document.querySelector(".hero-grid");

    const heroOrbOne =
        document.querySelector(".hero-orb-one");

    const heroOrbTwo =
        document.querySelector(".hero-orb-two");


    window.addEventListener(
        "scroll",
        () => {

            if (window.innerWidth < 700) {
                return;
            }


            const scroll =
                window.scrollY;


            if (heroGrid) {

                heroGrid.style.transform =
                    `translateY(${scroll * 0.12}px)`;

            }


            if (heroOrbOne) {

                heroOrbOne.style.transform =
                    `translateY(${scroll * 0.08}px)`;

            }


            if (heroOrbTwo) {

                heroOrbTwo.style.transform =
                    `translateY(${scroll * -0.06}px)`;

            }

        },
        {
            passive: true
        }
    );


    /* =====================================================
       PROJECT IMAGE MOVEMENT
    ===================================================== */

    const projectImages =
        document.querySelectorAll(".project-image");


    projectImages.forEach(image => {

        image.addEventListener(
            "mousemove",
            event => {

                if (window.innerWidth < 900) {
                    return;
                }


                const rect =
                    image.getBoundingClientRect();


                const x =
                    event.clientX - rect.left;


                const y =
                    event.clientY - rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) / centerY) * -1.5;


                const rotateY =
                    ((x - centerX) / centerX) * 1.5;


                image.style.transform =
                    `scale(1.025) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

            }
        );


        image.addEventListener(
            "mouseleave",
            () => {

                image.style.transform =
                    "scale(1) rotateX(0deg) rotateY(0deg)";

            }
        );

    });


    /* =====================================================
       MAGNETIC BUTTON EFFECT
    ===================================================== */

    const buttons =
        document.querySelectorAll(
            ".button, .header-button"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "mousemove",
            event => {

                if (window.innerWidth < 900) {
                    return;
                }


                const rect =
                    button.getBoundingClientRect();


                const x =
                    event.clientX - rect.left;


                const y =
                    event.clientY - rect.top;


                const moveX =
                    (x - rect.width / 2) * 0.08;


                const moveY =
                    (y - rect.height / 2) * 0.08;


                button.style.transform =
                    `translate(${moveX}px, ${moveY}px)`;

            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                button.style.transform =
                    "translate(0, 0)";

            }
        );

    });


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const yearElements =
        document.querySelectorAll(
            "[data-current-year]"
        );


    yearElements.forEach(element => {

        element.textContent =
            new Date().getFullYear();

    });


    /* =====================================================
       CONSOLE BRAND MESSAGE
    ===================================================== */

    console.log(
        "%c TAMIN GROUP ",
        "background:#11110f;color:#d1b982;font-size:20px;padding:10px;"
    );

    console.log(
        "Technology • Business • Impact"
    );

});
