import React, { useState } from 'react'

type Theme = 'dark' | 'light'

export default function ThemeToggle() {

    const { handleClick, theme } = useThemeToggle()

    return (
        <button 
            className='relative flex items-center gap-6 bg-sky-200 dark:bg-sky-950 text-sky-950 dark:text-sky-50 px-3 py-2 rounded-full border border-transparent hover:border-sky-300 dark:hover:border-sky-800 active:bg-sky-300 dark:active:bg-sky-800'
            onClick={handleClick}
        >
            <SelectedModeIcon theme={theme} />
            <DarkModeIcon />
            <LightModeIcon />
        </button>
    )
}



function DarkModeIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='relative'>
            <path d="M9.02055 18C6.49813 18 4.36394 17.127 2.61796 15.3811C0.871987 13.6351 -0.000667805 11.5013 3.83429e-07 8.97964C3.83429e-07 6.67444 0.751713 4.67392 2.25514 2.9781C3.75856 1.28227 5.6796 0.292702 8.01826 0.0093962C8.43588 -0.0407169 8.76162 0.109622 8.99549 0.460414C9.22936 0.811206 9.221 1.1787 8.97043 1.5629C8.68645 1.99722 8.4733 2.45659 8.33098 2.94101C8.18865 3.42544 8.11782 3.93492 8.11849 4.46946C8.11849 5.97285 8.64469 7.25074 9.69709 8.30311C10.7495 9.35549 12.0274 9.88168 13.5308 9.88168C14.0487 9.88168 14.5625 9.80651 15.0723 9.65617C15.5822 9.50583 16.0372 9.29702 16.4374 9.02975C16.7882 8.79589 17.1474 8.78353 17.5149 8.99267C17.8824 9.20181 18.0411 9.53155 17.991 9.9819C17.7571 12.2871 16.7759 14.1998 15.0473 15.7199C13.3187 17.24 11.3098 18 9.02055 18ZM9.02055 15.9955C10.4906 15.9955 11.8102 15.5902 12.9796 14.7797C14.1489 13.9692 15.0008 12.9129 15.5354 11.6106C15.2013 11.6941 14.8672 11.7609 14.5331 11.811C14.199 11.8611 13.8649 11.8862 13.5308 11.8862C11.4761 11.8862 9.72615 11.1636 8.28086 9.71831C6.83557 8.27305 6.11326 6.52343 6.11393 4.46946C6.11393 4.13537 6.13898 3.80129 6.1891 3.4672C6.23921 3.13311 6.30603 2.79903 6.38955 2.46494C5.08659 2.99948 4.02985 3.8514 3.21933 5.02071C2.40882 6.19001 2.0039 7.50966 2.00457 8.97964C2.00457 10.9173 2.68946 12.5711 4.05925 13.9408C5.42903 15.3106 7.0828 15.9955 9.02055 15.9955Z" fill="currentColor"/>
        </svg>
    )
}



function LightModeIcon() {
    return (
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='relative'>
            <path d="M10.1426 14C12.3517 14 14.1426 12.2091 14.1426 10C14.1426 7.79086 12.3517 6 10.1426 6C7.93344 6 6.14258 7.79086 6.14258 10C6.14258 12.2091 7.93344 14 10.1426 14Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M18.1426 10H19.1426M1.14258 10H2.14258M10.1426 18V19M10.1426 1V2M15.7996 15.657L16.5066 16.364M3.77858 3.636L4.48558 4.343M4.48558 15.657L3.77858 16.364M16.5066 3.636L15.7996 4.343" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
    )

}



function SelectedModeIcon({theme} : {theme : Theme}) {
    return (
        <span className={`
            absolute top-0 bottom-0 w-1/2 inline-block rounded-full 
            ${theme === 'dark' ? 'left-0' : ''} 
            ${theme === 'light' ? 'left-1/2' : ''}
            bg-sky-300 dark:bg-sky-800 transition-all duration-200
        `} />
    )
}




function useThemeToggle() {

    const htmlElement = document.querySelector('html')

    let currentTheme: Theme

    const themeIsNull    = localStorage.getItem('theme') === null
    const themeIsInvalid = localStorage.getItem('theme') !== 'dark' && localStorage.getItem('theme') !== 'light' 
    
    if( themeIsNull || themeIsInvalid ) {
        currentTheme = 'dark'
        localStorage.setItem('theme', 'dark')
    } else {
        currentTheme = localStorage.getItem('theme') as Theme
    }

    if( currentTheme === 'dark') {
        htmlElement?.classList.add('dark')
    } else {
        htmlElement?.classList.remove('dark')
    }

    const [theme, setTheme] = useState<Theme>(currentTheme)
    
    function handleClick() {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme( newTheme )
        localStorage.setItem('theme', newTheme)
    }

    return { handleClick, theme }
}