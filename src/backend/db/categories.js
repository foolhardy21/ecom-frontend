import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

import adiM from './assets/adi-m.jpg'
import adiS from './assets/adi-s.jpg'
import airjM from './assets/airj-m.jpg'
import airjS from './assets/airj-s.jpg'
import nbM from './assets/nb-m.jpg'
import nbS from './assets/nb-s.jpg'
import pumaM from './assets/puma-m.jpg'
import pumaS from './assets/puma-s.jpg'

export const categories = [
  {
    _id: uuid(),
    categoryName: "adidas",
    categoryImg: {
      alt: 'adidas logo',
      srcSet: `${adiM} 250w, ${adiS} 150w`,
      sizes: '(max-width: 768px) 150px, 200px'
    }
  },
  {
    _id: uuid(),
    categoryName: "nike",
    categoryImg: {
      alt: 'air jordan logo',
      srcSet: `${airjM} 250w, ${airjS} 150w`,
      sizes: '(max-width: 768px) 150px, 200px'
    }
  },
  {
    _id: uuid(),
    categoryName: "new balance",
    categoryImg: {
      alt: 'new balance logo',
      srcSet: `${nbM} 250w, ${nbS} 150w`,
      sizes: '(max-width: 768px) 150px, 200px'
    }
  },
  {
    _id: uuid(),
    categoryName: "puma",
    categoryImg: {
      alt: 'puma logo',
      srcSet: `${pumaM} 250w, ${pumaS} 150w`,
      sizes: '(max-width: 768px) 150px, 200px'
    }
  },
];
