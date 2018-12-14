/*******************
 * I) DISC LOADER : DELETE AFTER ANIMATION FINISHED
 * II) HEADPHONE WARNING : DISPLAY AFTER DISC & DELETE AFTER ANIMATION FINISHED
 * III) RAP HISTORY : DISPLAY MAIN RAP WRAPPER
 * IV) NAV DOTS & AUDIO : FILL NAV DOTS & PLAYS AUDIO ON SCROLL
 * V) BACK IN TIME TUNNEL EFFECT FOR PASSING BETWEEN MUSIC TYPES : RAP HIP-HOP JAZZ
 ******************/

/*******************
******************** WEBSITE DISC LOADER
*******************/
const discLoader = document.querySelector('.loader')
const discDisplay = setInterval(() =>
{
    discLoader.remove()
    window.clearInterval(discDisplay)
}, 5000)

/*******************
******************** HEADPHONE WARNING + MAIN RAP WRAPPER DISPLAY
*******************/
const headphone = document.querySelector('.headphone')
const headphoneWarning = document.querySelector('.headphone-warning-text')
const startButton = document.querySelector('.start-button')

const wrapperRapHistory = document.querySelector('.wrapper-rap-history')
const verticalDotsNav = document.querySelector('.vertical-dots-nav')
const hamburgerMenuLines = document.querySelector('.hamburger-menu-lines')
const rapOrigin = wrapperRapHistory.querySelector('.rap-origin')
const rapTypes = wrapperRapHistory.querySelector('.rap-types')
const rapMosaicBackgroundImage = wrapperRapHistory.querySelector('.rap-history-background')

const offsetHeight = document.body.offsetHeight

const headphoneDisplay = setInterval(() =>
{
    headphone.style.display = `inline-block`
    headphoneWarning.style.display = `block`
    startButton.style.display = `block`
    window.clearInterval(headphoneDisplay)
}, 5000)

startButton.addEventListener('click', () =>
{
    headphone.classList.add('headphone-warning-animation')
    headphoneWarning.classList.add('headphone-warning-animation')
    startButton.classList.add('headphone-warning-animation')
    const deleteHeadphoneWarning = setInterval(() =>
    {
        //DELETE HEADPHONE WARNING
        headphone.remove()
        headphoneWarning.remove()
        startButton.remove()

        //RAP MAIN WRAPPER DISPLAY
        wrapperRapHistory.style.display = `inline`
        verticalDotsNav.style.display = `inline`
        hamburgerMenuLines.style.display = `inline`
        wrapperRapHistory.classList.add('display-wrapper-rap-history')
        verticalDotsNav.classList.add('display-wrapper-rap-history')
        hamburgerMenuLines.classList.add('display-wrapper-rap-history')

        //RAP MOSAIC BACKGROUND
        rapMosaicBackgroundImage.style.height = `${offsetHeight}px`

        //RAP ORIGIN DISPLAY
        rapOrigin.style.marginTop =`${offsetHeight}px`
        rapOrigin.style.height =`${offsetHeight}px`

        //RAP TYPES DISPLAY
        // rapTypes.style.marginTop =`${offsetHeight}px`
        rapTypes.style.height =`${offsetHeight}px`

        window.clearInterval(deleteHeadphoneWarning)
    }, 1000)
})


//RAP'S ORIGIN TIMELINE PULSE BUTTONS
const pulseButtons = rapOrigin.querySelectorAll('.pulse-button')
const pulseButtonText = rapOrigin.querySelector('.pulse-button-text')
let selectedButton = 0
const rapOriginTexts = ['Le genre se développe en tant que mouvement culturel et artistique aux États-Unis, à New York, dans le South Bronx au début des années 1970.', 'Les premiers raps sont réalisés par des maîtres de cérémonies faisant des rimes simples pour mettre de l’ambiance en soirée. Ceux-ci sont italiens contrairement à ce que l’on pourrait croire.', 'Sortie de « Rapper’s Delight » du groupe Sugarhill Gag, qui devient le premier tube rap dans le monde.', 'Début de la popularité, explosion du rap dans le monde entier. C’est à cette période que le rap vas arriver en europe notamment en France et en Angleterre.', 'Sortie de “the message” de Grandmaster Flash qui engendre une révolution par sa nouvelle approche au rap']

//CHANGE TEXT ACCORDING TO CLICKED BUTTON ON TIMELINE
rapOrigin.addEventListener('click', () =>
{
    for (let i = 0; i < pulseButtons.length; i++)
    {
        pulseButtons[i].addEventListener('click', () =>
        {
            selectedButton = i
            pulseButtons[i].style.backgroundColor = '#FFBA00'
            pulseButtons[i].classList.add('pulse-button-animation')
            pulseButtonText.innerHTML = rapOriginTexts[i]
        })
        if (i != selectedButton)
        {
            pulseButtons[i].style.backgroundColor = `#FFF`
            pulseButtons[i].classList.remove('pulse-button-animation')
        }
    }
})

/*******************
******************** NAV DOTS FILL AND AUDIO ON SCROLL
*******************/
//SCROLL PERCENTAGE
const h = document.documentElement 
const b = document.body
const st = 'scrollTop'
const sh = 'scrollHeight'
let percentOfScroll

//EACH VERTICAL DOTS FOR FILLING ACCORDING TO SCROLL
const firstVerticalDot = verticalDotsNav.querySelector('.first-dot')
const secondVerticalDot = verticalDotsNav.querySelector('.second-dot')
const thirdVerticalDot = verticalDotsNav.querySelector('.third-dot')
const fourthVerticalDot = verticalDotsNav.querySelector('.fourth-dot')
const fifthVerticalDot = verticalDotsNav.querySelector('.fifth-dot')
const sixthVerticalDot = verticalDotsNav.querySelector('.sixth-dot')

window.addEventListener('scroll', () =>
{
    percentOfScroll = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100

    if (percentOfScroll >= 0 && percentOfScroll < 15)
    {
        firstVerticalDot.style.background = `#FFF`
        secondVerticalDot.style.background = `transparent`
        thirdVerticalDot.style.background = `transparent`
        fourthVerticalDot.style.background = `transparent`
        fifthVerticalDot.style.background = `transparent`
        sixthVerticalDot.style.background = `transparent`
    }
    else if (percentOfScroll >= 15 && percentOfScroll < 30)
    {
        firstVerticalDot.style.background = `transparent`
        secondVerticalDot.style.background = `#FFF`
        thirdVerticalDot.style.background = `transparent`
        fourthVerticalDot.style.background = `transparent`
        fifthVerticalDot.style.background = `transparent`
        sixthVerticalDot.style.background = `transparent`
    }
    else if (percentOfScroll >= 30 && percentOfScroll < 45)
    {
        firstVerticalDot.style.background = `transparent`
        secondVerticalDot.style.background = `transparent`
        thirdVerticalDot.style.background = `#FFF`
        fourthVerticalDot.style.background = `transparent`
        fifthVerticalDot.style.background = `transparent`
        sixthVerticalDot.style.background = `transparent`
    }
    else if (percentOfScroll >= 45 && percentOfScroll < 60)
    {
        firstVerticalDot.style.background = `transparent`
        secondVerticalDot.style.background = `transparent`
        thirdVerticalDot.style.background = `transparent`
        fourthVerticalDot.style.background = `#FFF`
        fifthVerticalDot.style.background = `transparent`
        sixthVerticalDot.style.background = `transparent`
    }
    else if (percentOfScroll >= 60 && percentOfScroll < 75)
    {
        firstVerticalDot.style.background = `transparent`
        secondVerticalDot.style.background = `transparent`
        thirdVerticalDot.style.background = `transparent`
        fourthVerticalDot.style.background = `transparent`
        fifthVerticalDot.style.background = `#FFF`
        sixthVerticalDot.style.background = `transparent`
    }
    else if (percentOfScroll >= 75)
    {
        firstVerticalDot.style.background = `transparent`
        secondVerticalDot.style.background = `transparent`
        thirdVerticalDot.style.background = `transparent`
        fourthVerticalDot.style.background = `transparent`
        fifthVerticalDot.style.background = `transparent`
        sixthVerticalDot.style.background = `#FFF`
    }
})

/*******************
******************** BACK IN TIME TUNNEL EFFECT
*******************/
//TUNNEL FROM RAP TO HIP-HOP
const tunnelToHipHop = rapTypes.querySelector('.tunnel-to-hip-hop')
const rapContent = wrapperRapHistory.querySelector('.rap-content')
const hipHopContent = wrapperRapHistory.querySelector('.hip-hop-content')

tunnelToHipHop.addEventListener('click', () =>
{
    document.body.style.overflow = `hidden`
    rapContent.style.transform = `translateZ(801px)`
    const tunnelAnimation = setInterval(() =>
    {
        rapContent.style.display = `none`
        document.body.style.overflow = `visible`
        window.clearInterval(tunnelAnimation)
    }, 2000)
    rapContent.classList.add('block-animation')
})