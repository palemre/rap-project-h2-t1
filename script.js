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
const rapTypes = document.querySelector('.rap-types')
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

        //RAP STYLE DISPLAY
        rapTypes.style.marginTop =`${offsetHeight}px`
        rapTypes.style.height =`${offsetHeight}px`

        window.clearInterval(deleteHeadphoneWarning)
    }, 1000)
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

window.addEventListener('scroll', () =>
{
    percentOfScroll = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100

    if (percentOfScroll >= 0 && percentOfScroll < 35)
    {
        firstVerticalDot.style.background = `#FFF`
        secondVerticalDot.style.background = `transparent`
        thirdVerticalDot.style.background = `transparent`
    }
    else if (percentOfScroll >= 35)
    {
        firstVerticalDot.style.background = `transparent`
        secondVerticalDot.style.background = `#FFF`
        thirdVerticalDot.style.background = `transparent`
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