import am97M from '../assets/1-m.jpg'
import am97S from '../assets/1-s.jpg'
import jpsM from '../assets/2-m.jpg'
import jpsS from '../assets/2-s.jpg'
import forumlM from '../assets/3-m.jpg'
import forumlS from '../assets/3-s.jpg'
import keithcM from '../assets/4-m.jpg'
import keithcS from '../assets/4-s.jpg'

export const wishlistImgArr = [
    {
        id: 1,
        alt: 'air max 97',
        srcSet: `${am97M} 200w, ${am97S} 150w`,
    },
    {
        id: 2,
        alt: 'japan s',
        srcSet: `${jpsM} 200w, ${jpsS} 150w`,
    },
    {
        id: 3,
        alt: 'forum luxe',
        srcSet: `${forumlM} 200w, ${forumlS} 150w`,
    },
    {
        id: 4,
        alt: 'keith haring club c',
        srcSet: `${keithcM} 200w, ${keithcS} 150w`,
    }

]

export const sizes = '(max-width: 768px) 150px, 200px'
