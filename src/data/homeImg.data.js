import adiM from '../assets/adi-m.jpg'
import adiS from '../assets/adi-s.jpg'
import airjM from '../assets/airj-m.jpg'
import airjS from '../assets/airj-s.jpg'
import heroM from '../assets/hero-m.jpg'
import heroS from '../assets/hero-s.jpg'
import nbM from '../assets/nb-m.jpg'
import nbS from '../assets/nb-s.jpg'
import pumaM from '../assets/puma-m.jpg'
import pumaS from '../assets/puma-s.jpg'

export const heroImgArr = [
    {
        id: 1,
        alt: 'adidas logo',
        srcSet: `${adiM} 1280w, ${adiS} 720w`,
        sizes: '(max-width: 768px) 720px, 1280px'
    },
    {
        id: 2,
        alt: 'air jordan logo',
        srcSet: `${airjM} 1280w, ${airjS} 720w`,
        sizes: '(max-width: 768px) 720px, 1280px'
    },
    {
        id: 3,
        alt: 'hero image',
        srcSet: `${heroM} 1280w, ${heroS} 720w`,
        sizes: '(max-width: 768px) 720px, 1280px'
    },
    {
        id: 4,
        alt: 'new balance logo',
        srcSet: `${nbM} 1280w, ${nbS} 720w`,
        sizes: '(max-width: 768px) 720px, 1280px'
    },
    {
        id: 5,
        alt: 'adidas logo',
        srcSet: `${pumaM} 1280w, ${pumaS} 720w`,
        sizes: '(max-width: 768px) 720px, 1280px'
    },
]