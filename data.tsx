import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 3,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 4,
        logo: <Rss size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 5,
        logo: <Twitch size={30} strokeWidth={1} />,
        src: "#!",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Técnico Programador",
        subtitle: "DNT Distribution Network Telecommunications",
        description: "Colabore con un equipo dinámico para desarrollar  la programacion y interfaces de usuario atractivas y funcionales que impulsen el éxito de nuestros clientes en el mundo de la Telecomunicación.",
        date: "JUL-2023",
    },
    {
        id: 2,
        title: "Servicios TI",
        subtitle: "Tricom",
        description: "Trabaje en proyectos emocionantes que desafían los límites de la creatividad y la tecnología.",
        date: "May 2015",
    },
    {
        id: 3,
        title: "Desarrollo Frontend",
        subtitle: "Iglesia Monte de DIOS",
        description: "Como desarrollador frontend, me dieron la  oportunidad de colaborar en un proyecto diverso y desafiante que te permitirán expandir tus habilidades y dejar mis huella en el mundo FrontEnd.",
        date: "Ago 2024",
    },
    {
        id: 4,
        title: "Especialista en front-end",
        subtitle: "Raul Santiago Dev.",
        description: "Únete a nosotros mientras creamos sitios web y aplicaciones interactivas que sorprenden y deleitan a nuestros clientes. Si tienes pasión por el diseño y la programación, y disfrutas colaborar en un entorno creativo, ¡queremos conocerte!        ",
        date: "SEP 2024",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 10,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 11,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 20,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 2,
        text: "Premios destacado",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "RS Web ",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Planificador de Gastos",
        image: "/gastos.png",
        urlGithub: "https://github.com/Ing-Raul-Santiago30/planificador-de-gasto",
        urlDemo: "https://proyecto-raul.netlify.app/",
    },
    {
        id: 2,
        title: "Carrito de Compra ",
        image: "/carritodecompra.png",
        urlGithub: "https://github.com/Ing-Raul-Santiago30/carrito",
        urlDemo: "https://astounding-bubblegum-6e7fb9.netlify.app/",
    },
    {
        id: 3,
        title: "Dashboard Mecanica",
        image: "/dashboard.png",
        urlGithub: "https://github.com/Ing-Raul-Santiago30/R.S-MECANICA-SOLUTION",
        urlDemo: "https://soluciones-mecanica-ingraul.netlify.app/",
    },
    {
        id: 4,
        title: "Juego Numero Secreto ",
        image: "/numero.png",
        urlGithub: "https://github.com/Ing-Raul-Santiago30/Juego-numero-Secreto",
        urlDemo: "https://ing-raul-santiago30.github.io/Juego-numero-Secreto/",
    },
    {
        id: 5,
        title: "Citas Pacientes",
        image: "/citas.png",
        urlGithub: "https://github.com/Ing-Raul-Santiago30/citas-react",
        urlDemo: "https://citas-ing-raul.netlify.app/",
    },
    {
        id: 6,
        title: "Calculadora Prestamo",
        image: "/cotizador.png",
        urlGithub: "https://github.com/Ing-Raul-Santiago30/Cotizar-de-prestamo",
        urlDemo: "https://cotizar-prestamo-ing-raul-santiago.netlify.app/",
    },
    {
        id: 7,
        title: "Fokus ",
        image: "/focus.png",
        urlGithub: "https://github.com/Ing-Raul-Santiago30/focus",
        urlDemo: "https://focus-6x4b2tddp-ing-raul-santiago30s-projects.vercel.app/",
    },
    {
        id: 8,
        title: "Buscador Bebida",
        image: "/bebida.png",
        urlGithub: "https://github.com/Ing-Raul-Santiago30/Bebidas-refrescante",
        urlDemo: "https://bebidas-refrescante-82xvpj8e8-ing-raul-santiago30s-projects.vercel.app/",
    },
   
];

export const dataTestimonials = [
    {
        id: 1,
        name: "Ramphys Tirana Brito",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/ra.jpg",
    },
   
    {
        id: 2,
        name: "Ingenierio Jeffry Santiago Montes de oca",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/santiago.jpg",
    },
    {
        id: 3,
        name: "Jeanke Rodriguez ",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/jeanke.jpg",
    },
    {
        id: 3,
        name: "Jose Manuel Checo Medrano  ",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/checo.jpg",
    },
];