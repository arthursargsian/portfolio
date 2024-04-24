import brand1 from "../image/brand1.png";
import brand2 from "../image/brand2.png";
import brand3 from "../image/brand3.png";
import brand4 from "../image/brand4.png";
import brand5 from "../image/brand5.png";
import brand6 from "../image/brand6.png";

import worker1 from "../image/7.jpeg";
import worker2 from "../image/2jpeg.jpeg";
import worker3 from "../image/3jpeg.jpeg";
import worker4 from "../image/4jpeg.jpeg";
import worker5 from "../image/5jpeg.jpeg";
import worker6 from "../image/6jpeg.jpeg";
import worker7 from "../image/7jpeg.jpeg";
import worker8 from "../image/8jpeg.jpeg";

import image1 from "../image/car.png";
import image2 from "../image/spacejpg.jpg";
import image3 from "../image/camerajpg.jpg";

export const brands = [
    {id: 1, logo: brand1},
    {id: 2, logo: brand2},
    {id: 3, logo: brand3},
    {id: 4, logo: brand4},
    {id: 5, logo: brand5},
    {id: 6, logo: brand6},
];


export const workers: any = [
    {id: 1, avatar: worker1, name: "Erik Jonsson", position: "Design & Art Direction"},
    {id: 2, avatar: worker2, name: "Elena Miska", position: "Designer, art director & artist"},
    {id: 3, avatar: worker3, name: "Verena Michelitsch", position: "Independent designer & art director"},
    {id: 4, avatar: worker4, name: "Ayaka B. Ito", position: "Independent brand, graphic & type designer"},
    {id: 5, avatar: worker5, name: "Mackey Saturday", position: "Identity designer"},
    {id: 6, avatar: worker6, name: "Louise Mertens", position: "Illustrator & artist"},
    {id: 7, avatar: worker7, name: "Tina Smith", position: "Independent art director & designer"},
    {id: 8, avatar: worker8, name: "Tom Contino", position: "Founder, creative directo"},
];

export const data = [
    {
        id: 1,
        image: image1.src,
        title: "For creatives with exceptional taste and talent.",
        subtitle: "Semplice is for",
        description: "3D Designers",
    },
    {
        id: 2,
        image: image2.src,
        title: "For photographers who capture the world's beauty.",
        subtitle: "Semplice is for",
        description: "Writers",
    },
    {
        id: 3,
        image: image3.src,
        title: "For writers who craft compelling narratives.",
        subtitle: "Semplice is for",
        description: "Photographers",
    }
];
