import { wishlistImgArr, sizes } from './wishlistImg.data'

export const wishlistArr = [
    {
        id: 1,
        name: 'air max 97 se',
        company: 'nike',
        img: {
            alt: wishlistImgArr[0].alt,
            srcSet: wishlistImgArr[0].srcSet,
            sizes: sizes
        },
        price: 19012,
        offerPrice: 16012,

    },
    {
        id: 2,
        name: 'japan s',
        company: 'asics',
        img: {
            alt: wishlistImgArr[1].alt,
            srcSet: wishlistImgArr[1].srcSet,
            sizes: sizes
        },
        price: 23100,
        offerPrice: 19100,
    },
    {
        id: 3,
        name: 'forum luxe md',
        company: 'adidas',
        img: {
            alt: wishlistImgArr[2].alt,
            srcSet: wishlistImgArr[2].srcSet,
            sizes: sizes
        },
        price: 20000
    },
    {
        id: 4,
        name: 'keith haring club c',
        company: 'reebok',
        img: {
            alt: wishlistImgArr[3].alt,
            srcSet: wishlistImgArr[3].srcSet,
            sizes: sizes
        },
        price: 16500
    },
]