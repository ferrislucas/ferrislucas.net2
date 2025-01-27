interface SiteConfig {
    name: string;
    site: string;
    description: string;
    author: string;
    title: string;
    image?: string;
    hero: {
        title?: string;
        text?: string;
        image?: {
            src: string;
            alt: string;
            caption?: string;
        };
        actions?: Array<{
            text: string;
            href: string;
        }>;
    };
}

const siteConfig: SiteConfig = {
    name: "Ferris Lucas",
    site: "https://ferrislucas.net",
    description: "Software Engineer and Technology Leader",
    author: "Ferris Lucas",
    title: "Ferris Lucas - Personal Website",
    hero: {
        title: "Hey, I'm Ferris 👋",
        text: "Software engineer and technology leader with a passion for building elegant solutions to complex problems. Currently exploring generative AI and its impact on software development.",
        image: {
            src: "/images/ferris-profile.jpg",
            alt: "Ferris Lucas wearing a tin foil hat",
            caption: "Tin foil protective headwear"
        },
        actions: [
            {
                text: "Email",
                href: "mailto:ferris@mydayoff.net"
            },
            {
                text: "GitHub",
                href: "https://github.com/ferrislucas"
            },
            {
                text: "LinkedIn",
                href: "https://www.linkedin.com/in/ferris-lucas"
            }
        ]
    }
};

export default siteConfig;