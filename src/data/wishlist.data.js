import { am97M, am97S, jpsM, jpsS, forumlM, forumlS, keithcM, keithcS } from './wishlistImg.data'

export const sizes = '(max-width: 768px) 150px, 200px'

export const wishlistArr = [
    {
        id: 1,
        name: 'air max 97 se',
        company: 'nike',
        img: {
            alt: 'air max 97',
            srcSet: `${am97M} 200w, ${am97S} 150w`,
        },
        price: 19012,
        offerPrice: 16012,

    },
    {
        id: 2,
        name: 'japan s',
        company: 'asics',
        img: {
            alt: 'japan s',
            srcSet: `${jpsM} 200w, ${jpsS} 150w`,
        },
        price: 23100,
        offerPrice: 19100,
    },
    {
        id: 3,
        name: 'forum luxe md',
        company: 'adidas',
        img: {
            alt: 'forum luxe',
            srcSet: `${forumlM} 200w, ${forumlS} 150w`,
        },
        price: 20000
    },
    {
        id: 4,
        name: 'keith haring club c',
        company: 'reebok',
        img: {
            alt: 'keith haring club c',
            srcSet: `${keithcM} 200w, ${keithcS} 150w`,
        },
        price: 16500
    },
]