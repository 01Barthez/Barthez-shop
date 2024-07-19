import heroImage1 from '../assets/hero/img1.png';
import heroImage2 from '../assets/hero/img2.png';
import heroImage3 from '../assets/hero/img3.png';
import productImage from '../assets/products/T-shirts.webp';
import productImage2 from '../assets/products/chaussures.webp';
import productImage1 from '../assets/products/pantalons.jpg';
import productImage3 from '../assets/products/sacs-de-classes.jpg';
import productImage4 from '../assets/products/equipements-foot.jpg';
import topProduct1 from '../assets/topProducts/img1.png'


type TMenu = {
    id: number;
    name: string;
    link: string;
}[];

export const Menu : TMenu = [
    {
        id : 1,
        name: "Home",
        link: "/#home"
    },
    
    {
        id : 2,
        name: "Products",
        link: "/#products"
    },
    
    {
        id : 3,
        name: "Services",
        link: "/#services",
    },

    {
        id : 4,
        name: "Promotion",
        link: "/#promotion"
    },

    {
        id : 5,
        name: "Contact",
        link: "/#contact"
    }
]

type TDropDownLink = {
    id: number;
    name: string;
    link: string;
}[];

export const DropDownLink: TDropDownLink = [
    {
        id: 1,
        name: "Trending Products",
        link: "/#"
    },

    {
        id: 2,
        name: "Best Selling",
        link: "/#"
    },

    {
        id: 3,
        name: "Top Rated",
        link: "/#"
    },
]

type THeroElementList = {
    id: number;
    img: any;
    title: string;
    description: string;
}[]

export const HeroElementList: THeroElementList = [
    {
        id: 1,
        img: heroImage1,
        title: "Updo 50% off on all Men's Wear",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iure, aliquam et consequatur alias sed dolores amet harum, pariatur animi assumenda. Neque, natus omnis iste animi at qui cum ipsa?"
    },

    {
        id: 2,
        img: heroImage2,
        title: "30% off on all Women's Wear",
        description: "Who's there lorem ipsum dolor sit amet consectetur adipisicing elit. Error iure, aliquam et consequatur alias sed dolores amet harum, pariatur animi assumenda. Neque, natus omnis iste animi at qui cum ipsa, pariatur animi assumenda. Neque, natus omnis iste animi at qui cum ipsa?"
    },

    {
        id: 3,
        img: heroImage3,
        title: "70% off on all Products sale",
        description: "consectetur adipisicing Error iure, aliquam et consequatur alias sed dolores amet harum, natus omniscum ipsa?"
    }
]

type TProductsData = {
    id: number;
    img: any;
    title: string;
    rating: number;
    color: string;
    AosDelay: string;
}[];

export const ProductsData: TProductsData = [
    {
        id: 1,
        img: productImage,
        title: "T-Shirt",
        rating: 5.0,
        color: "White",
        AosDelay: "0"
    },

    {
        id: 2,
        img: productImage1,
        title: "Pantalons Jeans",
        rating: 4.7,
        color: "Red",
        AosDelay: "200"
    },

    {
        id: 3,
        img: productImage2,
        title: "Chaussures",
        rating: 4.3,
        color: "Yellow",
        AosDelay: "400"
    },

    {
        id: 4,
        img: productImage3,
        title: "Sacs de classes",
        rating: 3.9,
        color: "Brown",
        AosDelay: "600"
    },

    {
        id: 5,
        img: productImage4,
        title: "Equipements de Football",
        rating: 4.8,
        color: "Pink",
        AosDelay: "800"
    }
]

type TTopProductData = {
    id: number,
    img: any;
    title: string;
    description: string;
}[];

export const TopProductData: TTopProductData = [
    {
        id: 1,
        img: topProduct1,
        title: 'wear',
        description: "Lorem ipsum dolor sit amet consectetur "
    },

    {
        id: 2,
        img: topProduct1,
        title: 'dresses',
        description: " elit. Voluptatibus ad vel sint reprehenderit doloremque necessitatibus"

    },
    
    {
        id: 3,
        img: topProduct1,
        title: 'wear',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ad vel sint reprehenderit doloremque necessitatibus voluptatem facere"

    }
]

export const TestimonialsData = [
    {
        id : 1,
        name : "George Pimentel",
        commentaire : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ad vel sint reprehenderit doloremque necessitatibus voluptatem facere",
        profile: heroImage1
    },

    {
        name : "Sarutobi",
        id : 2,
        commentaire : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ad vel sint reprehenderit doloremque necessitatibus voluptatem facere",
        profile: heroImage2
    },

    {
        id : 3,
        name : "Hermione ",
        commentaire : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ad vel sint reprehenderit doloremque necessitatibus voluptatem facere",
        profile: topProduct1
    }
] 

export const FooterLinks = [
    {
        id: 1,
        title: "Home",
        link: "/#"
    },

    {
        id: 2,
        title: "About",
        link: "/#about"
    },
    
    {
        id: 3,
        title: "Contact",
        link: "/#contact"
    },
    
    {
        id: 4,
        title: "Blog",
        link: "/#blog"
    }
]