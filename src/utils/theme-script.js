// for theme toggling
const root = document.documentElement;
const themeToggleBtn = document.querySelector('#btn-theme')

// to get the stored theme
const checkTheme = () => localStorage.getItem('theme') === 'light' ? 'light' : 'dark'

const setLightTheme = () => {
    root.style.setProperty('--clr-primary','#ffffff')
    root.style.setProperty('--clr-off-primary','#CCCAC9')
    root.style.setProperty('--clr-secondary','#000000')
    root.style.setProperty('--clr-off-secondary','#323232')
    localStorage.setItem('theme', 'light')
}

const setDarkTheme = () => {
    root.style.setProperty('--clr-primary','#000000')
    root.style.setProperty('--clr-off-primary','#323232')
    root.style.setProperty('--clr-secondary','#ffffff')
    root.style.setProperty('--clr-off-secondary','#CCCAC9')
    localStorage.setItem('theme', 'dark')
}

// theme data stored only for first render
const storeThemeDataForFirstRender = () => {
    if(localStorage.getItem('firstTime') === false || !localStorage.getItem('firstTime')) {
        localStorage.setItem('theme', 'light')
        localStorage.setItem('firstTime', 'true')
    }
}

// set stored theme for every render
const setStoredTheme = () => {
    if( checkTheme() === 'light' ) {
        setLightTheme()
        themeToggleBtn.innerText = 'bedtime'
    }
    else {
        setDarkTheme()
        themeToggleBtn.innerText = 'light_mode'
    }
}

// for theme toggling
themeToggleBtn.addEventListener('click', (e) => {
    if( checkTheme() === 'light' ) {
        setDarkTheme()
        e.target.innerText = 'light_mode'
    }
    else {
        setLightTheme()
        e.target.innerText = 'bedtime'
    }
})

// check if current render is the first render or not
if(!localStorage.getItem('firstTime') || localStorage.getItem('firstTime') === false) {
    storeThemeDataForFirstRender()
}

// stored theme is set for every page
setStoredTheme()