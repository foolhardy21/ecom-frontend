import p1M from '../assets/p1-m.jpg'
import p1S from '../assets/p1-s.jpg'
import p2M from '../assets/p2-m.jpg'
import p2S from '../assets/p2-s.jpg'
import p3M from '../assets/p3-m.jpg'
import p3S from '../assets/p3-s.jpg'
import p4M from '../assets/p4-m.jpg'
import p4S from '../assets/p4-s.jpg'
import p5M from '../assets/p5-m.jpg'
import p5S from '../assets/p5-s.jpg'

export const productsImgArr = [
    {
        id: 1,
        alt: 'nike zoom',
        srcSet: `${p1M} 200w, ${p1S} 150w`,
        sizes: '(max-width: 768px) 150px, 200px'
    },
    {
        id: 2,
        alt: 'air jordan 36',
        srcSet: `${p2M} 200w, ${p2S} 150w`,
        sizes: '(max-width: 768px) 150px, 200px'
    },
    {
        id: 3,
        alt: 'air max 97',
        srcSet: `${p3M} 200w, ${p3S} 150w`,
        sizes: '(max-width: 768px) 150px, 200px'
    },
    {
        id: 4,
        alt: 'fontaka waffle',
        srcSet: `${p4M} 200w, ${p4S} 150w`,
        sizes: '(max-width: 768px) 150px, 200px'
    },
    {
        id: 5,
        alt: 'air max 90',
        srcSet: `${p5M} 200w, ${p5S} 150w`,
        sizes: '(max-width: 768px) 150px, 200px'
    },
]