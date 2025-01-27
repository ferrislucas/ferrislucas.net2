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
    title: "Ferris Lucas",
    hero: {
        title: "Hey, I'm Ferris 👋",
        text: "I'm a software engineer exploring the intersection of AI and product development.",
        image: {
            src: "/images/ferris-profile.jpg",
            alt: "Ferris Lucas wearing a tin foil hat",
            caption: ""
        },
        actions: []
    }
};

export default siteConfig;