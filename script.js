/* =========================================================
   JAQ — MAIN SCRIPT
   RU / KZ + MOBILE MENU + ACTIVE NAVIGATION
========================================================= */


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuLinks =
    document.querySelectorAll(".mobile-menu__nav a");


function setMenuState(isOpen) {

    if (!menuButton || !mobileMenu) {
        return;
    }

    menuButton.classList.toggle(
        "is-open",
        isOpen
    );

    mobileMenu.classList.toggle(
        "is-open",
        isOpen
    );

    document.body.classList.toggle(
        "menu-open",
        isOpen
    );

    menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    mobileMenu.setAttribute(
        "aria-hidden",
        String(!isOpen)
    );
}


if (menuButton && mobileMenu) {

    menuButton.addEventListener(
        "click",
        () => {

            const isOpen =
                !mobileMenu.classList.contains(
                    "is-open"
                );

            setMenuState(isOpen);
        }
    );


    mobileMenuLinks.forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                setMenuState(false);
            }
        );
    });


    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {

                setMenuState(false);
            }
        }
    );
}


/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {

    /* =====================================================
       RUSSIAN
    ===================================================== */

    ru: {

        /* HEADER */

        "nav.houses":
            "Дома",

        "nav.baths":
            "Бани",

        "nav.welding":
            "Сварочный цех",

        "nav.projects":
            "Проекты",

        "nav.about":
            "О компании",

        "nav.contacts":
            "Контакты",

        "nav.quote":
            "Получить расчёт",


        /* HERO */

        "hero.eyebrow":
            "ПРОИЗВОДСТВО И СТРОИТЕЛЬСТВО",

        "hero.title":
            "Создаём.<br>Производим.<br>Устанавливаем.",

        "hero.description":
            "Модульные дома, бани и металлоконструкции под задачи заказчика.",

        "hero.projects":
            "Смотреть проекты",

        "hero.quote":
            "Получить расчёт",


        "hero.feature.experience":
            "лет опыта",

        "hero.feature.production":
            "свои и партнёрские мощности",

        "hero.feature.full":
            "от проекта до монтажа",


        /* DIRECTIONS */

        "directions.eyebrow":
            "НАПРАВЛЕНИЯ",

        "directions.title":
            "Производство для разных задач",

        "directions.description":
            "От современных модульных домов и бань до изделий из металла по индивидуальному заказу.",


        /* MAIN DIRECTIONS */

        "direction.houses":
            "Модульные дома",

        "direction.houses.description":
            "Современные дома для жизни, отдыха и загородного участка.",

        "direction.baths":
            "Бани",

        "direction.baths.description":
            "Готовые решения и бани под индивидуальные задачи.",

        "direction.welding":
            "Сварочный цех",

        "direction.welding.description":
            "Изготавливаем металлоконструкции и изделия под заказ.",

        "direction.more":
            "Узнать больше →",


        /* METAL PRODUCTS */

        "metal.eyebrow":
            "МЕТАЛЛИЧЕСКИЕ ИЗДЕЛИЯ",

        "metal.title":
            "Изделия из металла",

        "metal.description":
            "Изготавливаем изделия для дома, участка, бизнеса и городской среды.",

        "metal.canopies":
            "Навесы",

        "metal.benches":
            "Лавочки",

        "metal.railings":
            "Перила",

        "metal.takhtan":
            "Топчаны",

        "metal.gates":
            "Ворота",

        "metal.bbq":
            "Мангалы",

        "metal.swings":
            "Качели",

        "metal.doors":
            "Двери",

        "metal.awnings":
            "Козырьки",

        "metal.bins":
            "Мусорные ящики",

        "metal.slidingGates":
            "Откатные ворота",

        "metal.grilles":
            "Решётки",

        "metal.tables":
            "Столы и стулья",

        /* METAL CATALOG */

        "metal.canopyTitle":
            "Навесы",

        "metal.benchesTitle":
            "Лавочки",

        "metal.railingsTitle":
            "Перила",

        "metal.takhtanTitle":
            "Топчаны",

        "metal.gatesTitle":
            "Ворота",

        "metal.bbqTitle":
            "Мангалы",

        "metal.swingsTitle":
            "Качели",

        "metal.tablesTitle":
            "Столы и стулья",

        "metal.price":
            "Узнать стоимость →",

        "metal.note":
            "Изготавливаем изделия по индивидуальным размерам и требованиям заказчика.",

        "metal.button":
            "Получить расчёт",


        /* HOW WE WORK */

        "process.eyebrow":
            "КАК МЫ РАБОТАЕМ",

        "process.title":
            "От идеи до готового объекта.",

        "process.description":
            "Берём проект на себя: от первого обращения и расчёта до производства, доставки и монтажа.",

        "process.step1.title":
            "Заявка",

        "process.step1.description":
            "Вы рассказываете, что хотите построить или изготовить.",

        "process.step2.title":
            "Обсуждение",

        "process.step2.description":
            "Уточняем задачи, размеры, комплектацию и подготавливаем расчёт.",

        "process.step3.title":
            "Производство",

        "process.step3.description":
            "Изготавливаем объект на подходящих производственных площадках JAQ и проверенных партнёров.",

        "process.step4.title":
            "Доставка и монтаж",

        "process.step4.description":
            "Доставляем готовое изделие и выполняем монтаж на объекте.",

        "process.cta.label":
            "НУЖЕН РАСЧЁТ?",

        "process.cta.title":
            "Обсудим ваш проект.",

        "process.cta.button":
            "Написать в WhatsApp",


        /* ADVANTAGES */

        "advantages.eyebrow":
            "ПОЧЕМУ JAQ",

        "advantages.title":
            "Работаем на результат.",

        "advantages.description":
            "Подбираем оптимальное решение под задачу, бюджет и сроки проекта.",

        "advantages.card1.title":
            "Полный цикл",

        "advantages.card1.description":
            "Помогаем пройти путь от идеи и расчёта до готового объекта.",

        "advantages.card2.title":
            "Индивидуальные решения",

        "advantages.card2.description":
            "Подбираем размеры, материалы и комплектацию под конкретную задачу.",

        "advantages.card3.title":
            "Надёжные партнёры",

        "advantages.card3.description":
            "При необходимости подключаем проверенных специалистов и производственных партнёров.",

        "advantages.card4.title":
            "Реальные проекты",

        "advantages.card4.description":
            "Показываем реальные объекты и изделия, а не стоковые фотографии.",

        "advantages.footer":
            "Расскажите о задаче — подберём подходящее решение.",

        "advantages.button":
            "Обсудить проект →",


        /* BATH PROJECTS */

        "baths.eyebrow":
            "БАНИ",

        "baths.title":
            "Реализованные проекты бань",

        "baths.description":
            "Реальные объекты JAQ. Бани можно адаптировать под ваши задачи, участок и комплектацию.",

        "baths.project":
            "БАНЯ",

        "baths.name1":
            "Баня 01",

        "baths.name2":
            "Баня 02",

        "baths.name3":
            "Баня 03",

        "baths.name4":
            "Баня 04",

        "baths.price":
            "Узнать стоимость →",

        "baths.note":
            "Стоимость зависит от проекта, площади, комплектации и условий монтажа.",

        "baths.button":
            "Получить расчёт",


        /* HOUSE PROJECTS */

        "houses.eyebrow":
            "МОДУЛЬНЫЕ ДОМА",

        "houses.title":
            "Реализованные проекты",

        "houses.description":
            "Реальные объекты JAQ. Каждый проект можно адаптировать под ваши задачи и участок.",

        "houses.project":
            "МОДУЛЬНЫЙ ДОМ",

        "houses.price":
            "Узнать стоимость →",

        "houses.note":
            "Стоимость зависит от проекта, площади, комплектации и условий монтажа.",

        "houses.button":
            "Получить расчёт",


        /* ABOUT */

        "about.eyebrow":
            "JAQ COMPANY",

        "about.title":
            "Производство,<br>которому можно доверять.",

        "about.description":
            "Создаём современные модульные дома, бани и металлоконструкции. Работаем с проектом, производством, доставкой и монтажом.",

        "about.button":
            "Обсудить проект",

        "about.fact.experience":
            "лет опыта",

        "about.fact.production":
            "производство и партнёрская сеть",

        "about.fact.team":
            "команда полного цикла",

        "about.fact.individual":
            "возможности индивидуального проекта",


        /* PRODUCTION */

        "production.eyebrow":
            "ПРОИЗВОДСТВО И РАБОТА С ПАРТНЁРАМИ",

        "production.title":
            "Создаём не только дома.",

        "production.description":
            "В сварочном цехе изготавливаем металлические конструкции и изделия по индивидуальным задачам.",

        "production.link":
            "Обсудить задачу →",


        /* CONTACT */

        "contact.eyebrow":
            "СВЯЗЬ С JAQ",

        "contact.title":
            "Есть идея?<br>Давайте реализуем её.",

        "contact.description":
            "Расскажите о вашей задаче — обсудим проект и подготовим расчёт.",

        "contact.quote":
            "Получить расчёт",

        "contact.whatsapp":
            "WhatsApp",


        /* FOOTER */

        "footer.description":
            "Производство и строительство",

        "footer.top":
            "Наверх ↑"
    },


    /* =====================================================
       KAZAKH
    ===================================================== */

    kz: {

        /* HEADER */

        "nav.houses":
            "Үйлер",

        "nav.baths":
            "Моншалар",

        "nav.welding":
            "Дәнекерлеу цехы",

        "nav.projects":
            "Жобалар",

        "nav.about":
            "Компания туралы",

        "nav.contacts":
            "Байланыс",

        "nav.quote":
            "Есеп алу",


        /* HERO */

        "hero.eyebrow":
            "ӨНДІРІС ЖӘНЕ ҚҰРЫЛЫС",

        "hero.title":
            "Жасаймыз.<br>Өндіреміз.<br>Орнатамыз.",

        "hero.description":
            "Тапсырыс берушінің міндеттеріне сай модульді үйлер, моншалар және металл конструкциялар.",

        "hero.projects":
            "Жобаларды көру",

        "hero.quote":
            "Есеп алу",


        "hero.feature.experience":
            "жыл тәжірибе",

        "hero.feature.production":
            "өз және серіктестік мүмкіндіктер",

        "hero.feature.full":
            "жобадан монтажға дейін",


        /* DIRECTIONS */

        "directions.eyebrow":
            "БАҒЫТТАР",

        "directions.title":
            "Әртүрлі міндеттерге арналған өндіріс",

        "directions.description":
            "Заманауи модульді үйлер мен моншалардан бастап, тапсырыс бойынша жасалатын металл бұйымдарға дейін.",


        /* MAIN DIRECTIONS */

        "direction.houses":
            "Модульді үйлер",

        "direction.houses.description":
            "Тұруға, демалуға және қала сыртындағы учаскеге арналған заманауи үйлер.",

        "direction.baths":
            "Моншалар",

        "direction.baths.description":
            "Дайын шешімдер және жеке тапсырмаларға арналған моншалар.",

        "direction.welding":
            "Дәнекерлеу цехы",

        "direction.welding.description":
            "Тапсырыс бойынша металл конструкциялар мен бұйымдар жасаймыз.",

        "direction.more":
            "Толығырақ →",


        /* METAL PRODUCTS */

        "metal.eyebrow":
            "МЕТАЛЛ БҰЙЫМДАРЫ",

        "metal.title":
            "Металлдан жасалған бұйымдар",

        "metal.description":
            "Үйге, аулаға, бизнеске және қалалық ортаға арналған бұйымдар жасаймыз.",

        "metal.canopies":
            "Қалқалар",

        "metal.benches":
            "Орындықтар",

        "metal.railings":
            "Тұтқалар",

        "metal.takhtan":
            "Тақтандар",

        "metal.gates":
            "Қақпалар",

        "metal.bbq":
            "Мангалдар",

        "metal.swings":
            "Әткеншектер",

        "metal.doors":
            "Есіктер",

        "metal.awnings":
            "Козыректер",

        "metal.bins":
            "Қоқыс жәшіктері",

        "metal.slidingGates":
            "Жылжымалы қақпалар",

        "metal.grilles":
            "Торлар",

        "metal.tables":
            "Үстелдер мен орындықтар",


        /* METAL CATALOG */

        "metal.canopyTitle":
            "Қалқалар",

        "metal.benchesTitle":
            "Орындықтар",

        "metal.railingsTitle":
            "Тұтқалар",

        "metal.takhtanTitle":
            "Тақтандар",

        "metal.gatesTitle":
            "Қақпалар",

        "metal.bbqTitle":
            "Мангалдар",

        "metal.swingsTitle":
            "Әткеншектер",

        "metal.tablesTitle":
            "Үстелдер мен орындықтар",

        "metal.price":
            "Бағасын білу →",

        "metal.note":
            "Бұйымдарды тапсырыс берушінің жеке өлшемдері мен талаптарына сәйкес дайындаймыз.",

        "metal.button":
            "Есеп алу",


        /* HOW WE WORK */

        "process.eyebrow":
            "БІЗ ҚАЛАЙ ЖҰМЫС ІСТЕЙМІЗ",

        "process.title":
            "Идеядан дайын нысанға дейін.",

        "process.description":
            "Алғашқы өтініш пен есептеуден бастап өндіру, жеткізу және монтажға дейінгі жұмысты өз мойнымызға аламыз.",

        "process.step1.title":
            "Өтініш",

        "process.step1.description":
            "Не салғыңыз немесе не жасатқыңыз келетінін айтасыз.",

        "process.step2.title":
            "Талқылау",

        "process.step2.description":
            "Міндеттерді, өлшемдерді, жинақталуын нақтылап, есеп дайындаймыз.",

        "process.step3.title":
            "Өндіріс",

        "process.step3.description":
            "Нысанды JAQ өндірістік алаңдарында және тексерілген серіктестердің мүмкіндіктерін пайдаланып дайындаймыз.",

        "process.step4.title":
            "Жеткізу және монтаж",

        "process.step4.description":
            "Дайын бұйымды жеткізіп, нысанда монтаж жұмыстарын орындаймыз.",

        "process.cta.label":
            "ЕСЕП КЕРЕК ПЕ?",

        "process.cta.title":
            "Жобаңызды талқылайық.",

        "process.cta.button":
            "WhatsApp-қа жазу",


        /* ADVANTAGES */

        "advantages.eyebrow":
            "НЕГЕ JAQ",

        "advantages.title":
            "Нәтижеге жұмыс істейміз.",

        "advantages.description":
            "Жобаның міндетіне, бюджетіне және мерзіміне сай тиімді шешім таңдаймыз.",

        "advantages.card1.title":
            "Толық цикл",

        "advantages.card1.description":
            "Идея мен есептеуден бастап дайын нысанға дейінгі барлық кезеңде көмектесеміз.",

        "advantages.card2.title":
            "Жеке шешімдер",

        "advantages.card2.description":
            "Нақты міндетке сәйкес өлшемдерді, материалдарды және жинақталуын таңдаймыз.",

        "advantages.card3.title":
            "Сенімді серіктестер",

        "advantages.card3.description":
            "Қажет болған жағдайда тексерілген мамандар мен өндірістік серіктестерді тартамыз.",

        "advantages.card4.title":
            "Нақты жобалар",

        "advantages.card4.description":
            "Стоктық суреттерді емес, JAQ-тың нақты нысандары мен бұйымдарын көрсетеміз.",

        "advantages.footer":
            "Міндетіңізді айтыңыз — сізге лайықты шешім таңдаймыз.",

        "advantages.button":
            "Жобаны талқылау →",


        /* BATH PROJECTS */

        "baths.eyebrow":
            "МОНШАЛАР",

        "baths.title":
            "Жүзеге асқан монша жобалары",

        "baths.description":
            "JAQ жүзеге асырған нақты нысандар. Моншаларды сіздің міндеттеріңізге, учаскеңізге және жинақталуына бейімдеуге болады.",

        "baths.project":
            "МОНША",

        "baths.name1":
            "Монша 01",

        "baths.name2":
            "Монша 02",

        "baths.name3":
            "Монша 03",

        "baths.name4":
            "Монша 04",

        "baths.price":
            "Бағасын білу →",

        "baths.note":
            "Бағасы жобаға, аумағына, жинақталуына және монтаж шарттарына байланысты.",

        "baths.button":
            "Есеп алу",


        /* HOUSE PROJECTS */

        "houses.eyebrow":
            "МОДУЛЬДІ ҮЙЛЕР",

        "houses.title":
            "Жүзеге асқан жобалар",

        "houses.description":
            "JAQ жүзеге асырған нақты нысандар. Әр жобаны сіздің міндеттеріңіз бен учаскеңізге бейімдеуге болады.",

        "houses.project":
            "МОДУЛЬДІ ҮЙ",

        "houses.price":
            "Бағасын білу →",

        "houses.note":
            "Бағасы жобаға, аумағына, жабдықталуына және монтаж шарттарына байланысты.",

        "houses.button":
            "Есеп алу",


        /* ABOUT */

        "about.eyebrow":
            "JAQ COMPANY",

        "about.title":
            "Сенуге болатын<br>өндіріс.",

        "about.description":
            "Заманауи модульді үйлер, моншалар және металл конструкцияларын жасаймыз. Жобалау, өндіру, жеткізу және монтаж жұмыстарын орындаймыз.",

        "about.button":
            "Жобаны талқылау",

        "about.fact.experience":
            "жыл тәжірибе",

        "about.fact.production":
            "өндіріс және серіктестер желісі",

        "about.fact.team":
            "толық цикл командасы",

        "about.fact.individual":
            "жеке жоба мүмкіндіктері",


        /* PRODUCTION */

        "production.eyebrow":
            "ӨНДІРІС ЖӘНЕ СЕРІКТЕСТЕРМЕН ЖҰМЫС",

        "production.title":
            "Біз тек үй жасамаймыз.",

        "production.description":
            "Дәнекерлеу цехында жеке тапсырмалар бойынша металл конструкциялар мен бұйымдар жасаймыз.",

        "production.link":
            "Тапсырманы талқылау →",


        /* CONTACT */

        "contact.eyebrow":
            "JAQ-ПЕН БАЙЛАНЫС",

        "contact.title":
            "Идеяңыз бар ма?<br>Оны бірге жүзеге асырайық.",

        "contact.description":
            "Тапсырмаңыз туралы айтып беріңіз — жобаны талқылап, есеп дайындаймыз.",

        "contact.quote":
            "Есеп алу",

        "contact.whatsapp":
            "WhatsApp",


        /* FOOTER */

        "footer.description":
            "Өндіріс және құрылыс",

        "footer.top":
            "Жоғары ↑"
    }
};


/* =========================================================
   LANGUAGE FUNCTIONS
========================================================= */

function getSavedLanguage() {

    const savedLanguage =
        localStorage.getItem("jaq-language");

    if (
        savedLanguage === "ru" ||
        savedLanguage === "kz"
    ) {
        return savedLanguage;
    }

    return "ru";
}


function setActiveLanguage(language) {

    document
        .querySelectorAll(
            ".language-switcher__button"
        )
        .forEach((button) => {

            const buttonLanguage =
                button.textContent
                    .trim()
                    .toLowerCase();

            button.classList.toggle(
                "is-active",
                buttonLanguage === language
            );
        });
}


function applyTranslations(language) {

    const dictionary =
        translations[language];

    if (!dictionary) {
        return;
    }


    /* HTML LANGUAGE */

    document.documentElement.lang =
        language === "kz"
            ? "kk"
            : "ru";


    /* TRANSLATED ELEMENTS */

    document
        .querySelectorAll("[data-i18n]")
        .forEach((element) => {

            const key =
                element.dataset.i18n;

            if (
                Object.prototype.hasOwnProperty.call(
                    dictionary,
                    key
                )
            ) {

                element.innerHTML =
                    dictionary[key];
            }
        });


    /* ACTIVE LANGUAGE */

    setActiveLanguage(language);


    /* SAVE LANGUAGE */

    localStorage.setItem(
        "jaq-language",
        language
    );
}


/* =========================================================
   LANGUAGE BUTTONS
========================================================= */

document
    .querySelectorAll(
        ".language-switcher__button"
    )
    .forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                const selectedLanguage =
                    button.textContent
                        .trim()
                        .toLowerCase();

                if (
                    selectedLanguage === "ru" ||
                    selectedLanguage === "kz"
                ) {

                    applyTranslations(
                        selectedLanguage
                    );
                }
            }
        );
    });


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const sections =
            document.querySelectorAll(
                "#house-projects, " +
                "#bath-projects, " +
                "#metal-products, " +
                "#process, " +
                "#advantages, " +
                "#about, " +
                "#production, " +
                "#contacts"
            );


        const navLinks =
            document.querySelectorAll(
                ".nav a, .mobile-menu__nav a"
            );


        const setActiveLink = (id) => {

            navLinks.forEach((link) => {

                const href =
                    link.getAttribute("href");

                link.classList.toggle(
                    "is-active",
                    href === `#${id}`
                );
            });
        };


        if (
            "IntersectionObserver"
            in window
        ) {

            const observer =
                new IntersectionObserver(
                    (entries) => {

                        const visibleSections =
                            entries
                                .filter(
                                    (entry) =>
                                        entry.isIntersecting
                                )
                                .sort(
                                    (a, b) =>
                                        b.intersectionRatio -
                                        a.intersectionRatio
                                );


                        if (
                            visibleSections.length > 0
                        ) {

                            setActiveLink(
                                visibleSections[0]
                                    .target
                                    .id
                            );
                        }
                    },
                    {
                        rootMargin:
                            "-20% 0px -60% 0px",

                        threshold:
                            [
                                0.1,
                                0.25,
                                0.5,
                                0.75
                            ]
                    }
                );


            sections.forEach((section) => {

                observer.observe(section);
            });
        }
    }
);


/* =========================================================
   INITIAL LANGUAGE
========================================================= */

applyTranslations(
    getSavedLanguage()
);