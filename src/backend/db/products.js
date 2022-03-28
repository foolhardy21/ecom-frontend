import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */
import p1M from './assets/p1-m.jpg'
import p1S from './assets/p1-s.jpg'
import p2M from './assets/p2-m.jpg'
import p2S from './assets/p2-s.jpg'
import p3M from './assets/p3-m.jpg'
import p3S from './assets/p3-s.jpg'
import p4M from './assets/p4-m.jpg'
import p4S from './assets/p4-s.jpg'
import p5M from './assets/p5-m.jpg'
import p5S from './assets/p5-s.jpg'

const productsImgArr = [
  {
    alt: 'nike zoom',
    srcSet: `${p1M} 200w, ${p1S} 150w`,
    sizes: '(max-width: 768px) 150px, 200px'
  },
  {
    alt: 'air jordan 36',
    srcSet: `${p2M} 200w, ${p2S} 150w`,
    sizes: '(max-width: 768px) 150px, 200px'
  },
  {
    alt: 'air max 97',
    srcSet: `${p3M} 200w, ${p3S} 150w`,
    sizes: '(max-width: 768px) 150px, 200px'
  },
  {
    alt: 'fontaka waffle',
    srcSet: `${p4M} 200w, ${p4S} 150w`,
    sizes: '(max-width: 768px) 150px, 200px'
  },
  {
    alt: 'air max 90',
    srcSet: `${p5M} 200w, ${p5S} 150w`,
    sizes: '(max-width: 768px) 150px, 200px'
  },
]

export const products = [
  {
    _id: uuid(),
    name: 'zoom freak 3',
    company: 'nike',
    size: [9, 10, 11],
    price: 11995,
    offerPrice: 10000,
    img: {
      srcSet: productsImgArr[0].srcSet,
      alt: productsImgArr[0].alt,
      sizes: productsImgArr[0].sizes
    },
    rating: 4,
    gender: 'male',
    stock: 3
  },
  {
    _id: uuid(),
    name: 'air jordan 36',
    company: 'nike',
    size: [9, 10, 11],
    price: 14995,
    img: {
      srcSet: productsImgArr[1].srcSet,
      alt: productsImgArr[1].alt,
      sizes: productsImgArr[0].sizes
    },
    rating: 5,
    gender: 'male',
    stock: 30
  },
  {
    _id: uuid(),
    name: 'air max 97 se',
    company: 'nike',
    size: [9, 10, 11],
    price: 9996,
    img: {
      srcSet: productsImgArr[2].srcSet,
      alt: productsImgArr[2].alt,
      sizes: productsImgArr[0].sizes
    },
    rating: 3,
    gender: 'male',
    stock: 18
  },
  {
    _id: uuid(),
    name: 'fontaka waffle',
    company: 'nike',
    size: [9, 10],
    price: 6778,
    offerPrice: 5000,
    img: {
      srcSet: productsImgArr[3].srcSet,
      alt: productsImgArr[3].alt,
      sizes: productsImgArr[0].sizes
    },
    rating: 4,
    gender: 'female',
    stock: 25
  },
  {
    _id: uuid(),
    name: 'air max 90 se',
    company: 'nike',
    size: [9, 10],
    price: 12345,
    img: {
      srcSet: productsImgArr[4].srcSet,
      alt: productsImgArr[4].alt,
      sizes: productsImgArr[0].sizes
    },
    rating: 5,
    gender: 'female',
    stock: 20
  },
]
