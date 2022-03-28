import heroM from './assets/hero-m.jpg'
import heroS from './assets/hero-s.jpg'

export const heroImg = {
    id: 1,
    srcSet: `${heroM} 1280w, ${heroS} 720w`,
    sizes: '(max-width: 720px) 720w, 1280w',
    alt: 'shoe rack'
}
