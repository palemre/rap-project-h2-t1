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
//GET MAIN RAP ELEMENTS
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
const rapOriginTexts = ['1982 : The Message de Grandmaster Flash est la révolution annoncée. C’est le premier tube hip-hop ; une culture de rue qui était alors composée principalement de danse et de set.', '1982 : les Beastie Boys commencèrent eux aussi à se faire connaître, prouvant et montrant ainsi que la culture hip-hop était bien un mélange de culture et d\'influence noir et blanche.', '1996 : L’album All eyez on me 2Pac reconnu comme l’un des plus influent de l’histoire du hip-hop. Côté West-Coast en guerre avec la East-Coast des USA', '1997 : Life after Death : album sortie à titre posthume de Notorious B.I.G côté East-Coast. Il est l’un des seuls album de hip-hop le plus vendu tous les temps.', '2002 : Lose Yourself musique composée par Eminem présente sur la bande original de 8-Mile qui lui font gagner un Oscar et deux Grammy Awards.']

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
            //CHANGE BACKGROUND IMAGE ACCORDING TO SELECTED POINT
            if (i == 0)
            { rapOrigin.style.backgroundImage = `url('images/rap-timeline/grandmaster-flash.jpg')` }
            else if (i == 1)
            { rapOrigin.style.backgroundImage = `url('images/rap-timeline/beastie-boys.jpg')` }
            else if (i == 2)
            { rapOrigin.style.backgroundImage = `url('images/rap-timeline/2pac.jpg')` }
            else if (i == 3)
            { rapOrigin.style.backgroundImage = `url('images/rap-timeline/notorious-big.png')` }
            else if (i == 4)
            { rapOrigin.style.backgroundImage = `url('images/rap-timeline/eminem.jpg')` }
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