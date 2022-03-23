import c1m from '../assets/c1-m.jpg'
import c1s from '../assets/c1-s.jpg'
import c2m from '../assets/c2-m.jpg'
import c2s from '../assets/c2-s.jpg'

export const cartImgArr = [
    {
        id: 1,
        srcSet: `${c1m} 200w, ${c1s} 100w`,
        alt: 'air max pre day'
    },
    {
        id: 2,
        srcSet: `${c2m} 200w, ${c2s} 100w`,
        alt: 'superstar south park'
    },
]

export const sizes = '(max-width: 768px) 150px, 200px'