//* TYPE: page-index
export interface iDataProps {
    head: iHead;
    footer: iFooter;
    hero: iHero;
    about: iAbout;
    product: iProduct;
    location: iLocation;
    testimony: iTestimony;
}

//* TYPE: component-header
export interface iHead {
    title: string;
}

//* TYPE: component-footer-obj
export interface iFooterObj {
    footer: iFooter;
}

//* TYPE: component-footer
export interface iFooter {
    co_desc: string;
    pg_links: {
        title: string;
        links: {
            id: number;
            name: string;
        }[]
    }
    service: {
        title: string;
        services: {
            id: number;
            name: string;
        }[]
    }
    footnote: {
        copyright: string;
        sos_med: {
            title: string;
            links: {
                id: number;
                title: string;
            }[]
        }
    }
    made: {
        title: string;
        link: {
            name: string;
            url: string;
        }
    }
}

//* TYPE: component-section-hero
export interface iSHero {
    hero: iHero
}

export interface iHero {
    title: string;
    desc1: string;
    desc2: string;
    info: string;
    ais_lmg?: string;
    socials: {
        id: number;
        name: string;
    }[]
    since: string;
}

//* TYPE: component-section-about
export interface iSAbout {
    about: iAbout
}

export interface iAbout {
    mini_title: string;
    title: string;
    desc: string;
    img: string;
    sells: {
        id: number;
        title: string;
        desc: string;
    }[]
}

//* TYPE: component-section-product
export interface iSProduct {
    product: iProduct
}

export interface iProduct {
    mini_title: string;
    title: string;
    desc: string;
    img: {
        id: number;
        src: string;
    }[]
}

//* TYPE: component-section-location
export interface iSLocation {
    location: iLocation
}

export interface iLocation {
    mini_title: string;
    title: string;
    // lokasi: {
    //     title: string;
    //     full_address: {
    //         id: number;
    //         address: string;
    //     }[]
    // }
    // schedules: {
    //     title: string;
    //     schedule: {
    //         id: number;
    //         day: string;
    //         time: string;
    //     }[]
    // }
}

//* TYPE: component-section-testimony
export interface iSTestimony {
    testimony: iTestimony
}

export interface iTestimony {
    mini_title: string;
    title: string;
    testimonials: {
        id: number;
        name: string;
        img: string;
        desc: string;
    }[]
}

//* TYPE: component-others
export interface iBlob {
    className: string;
}

export interface iLogo {
    logo_wrap?: string;
    logo_img?: string;
}