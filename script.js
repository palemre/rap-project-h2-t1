/*******************
 * I) DISC LOADER : DELETE AFTER ANIMATION FINISHED
 * II) HEADPHONE WARNING : DISPLAY AFTER DISC & DELETE AFTER ANIMATION FINISHED
 * III) RAP HISTORY : DISPLAY MAIN RAP WRAPPER + RAP'S ORIGIN
 * IV) NAV DOTS & AUDIO : FILL NAV DOTS & PLAYS AUDIO ON SCROLL
 * V) RAP'S HISTORY : RAP'S TYPES -> MESSAGE
 * VI) BACK IN TIME TUNNEL EFFECT FOR PASSING BETWEEN MUSIC TYPES : RAP HIP-HOP JAZZ
 ******************/

/*******************
******************** WEBSITE DISC LOADER
*******************/
const $discLoader = document.querySelector('.js-loader')
const discDisplay = setInterval(() =>
{
    $discLoader.remove()
    window.clearInterval(discDisplay)
}, 5000)

/*******************
******************** HEADPHONE WARNING + MAIN RAP WRAPPER DISPLAY
*******************/
const $headphone = document.querySelector('.js-headphone')
const $headphoneWarning = document.querySelector('.js-headphone-warning-text')
const $startButton = document.querySelector('.js-start-button')
//GET MAIN RAP ELEMENTS
const $wrapperRapHistory = document.querySelector('.js-wrapper-rap-history')
const $verticalDotsNav = document.querySelector('.js-vertical-dots-nav')
const $hamburgerMenuLines = document.querySelector('.js-hamburger-menu-lines')
const $rapOrigin = $wrapperRapHistory.querySelector('.js-rap-origin')
const $rapTypes = $wrapperRapHistory.querySelector('.js-rap-types')
const $rapMosaicBackgroundImage = $wrapperRapHistory.querySelector('.js-rap-history-background')

const offsetHeight = document.body.offsetHeight

const headphoneDisplay = setInterval(() =>
{
    $headphone.style.display = `inline-block`
    $headphoneWarning.style.display = `block`
    $startButton.style.display = `block`
    window.clearInterval(headphoneDisplay)
}, 5000)

$startButton.addEventListener('click', () =>
{
    $headphone.classList.add('headphone-warning-animation')
    $headphoneWarning.classList.add('headphone-warning-animation')
    $startButton.classList.add('headphone-warning-animation')
    const deleteHeadphoneWarning = setInterval(() =>
    {
        //DELETE HEADPHONE WARNING
        $headphone.remove()
        $headphoneWarning.remove()
        $startButton.remove()

        //RAP MAIN WRAPPER DISPLAY
        $wrapperRapHistory.style.display = `inline`
        $verticalDotsNav.style.display = `inline`
        $hamburgerMenuLines.style.display = `inline`
        $wrapperRapHistory.classList.add('display-wrapper-rap-history')
        $verticalDotsNav.classList.add('display-wrapper-rap-history')
        $hamburgerMenuLines.classList.add('display-wrapper-rap-history')

        //RAP MOSAIC BACKGROUND
        $rapMosaicBackgroundImage.style.height = `${offsetHeight}px`

        //RAP ORIGIN DISPLAY
        $rapOrigin.style.marginTop =`${offsetHeight}px`
        $rapOrigin.style.height =`${offsetHeight}px`

        //RAP TYPES DISPLAY
        // rapTypes.style.marginTop =`${offsetHeight}px`
        $rapTypes.style.height =`${offsetHeight}px`

        window.clearInterval(deleteHeadphoneWarning)
    }, 1000)
})


//RAP'S ORIGIN TIMELINE PULSE BUTTONS
const $pulseButtons = $rapOrigin.querySelectorAll('.js-pulse-button')
const $pulseButtonText = $rapOrigin.querySelector('.js-pulse-button-text')
let selectedButton = 0
const rapOriginTexts = ['1982 : The Message de Grandmaster Flash est la révolution annoncée. C’est le premier tube hip-hop ; une culture de rue qui était alors composée principalement de danse et de set.', '1982 : les Beastie Boys commencèrent eux aussi à se faire connaître, prouvant et montrant ainsi que la culture hip-hop était bien un mélange de culture et d\'influence noir et blanche.', '1996 : L’album All eyez on me 2Pac reconnu comme l’un des plus influent de l’histoire du hip-hop. Côté West-Coast en guerre avec la East-Coast des USA', '1997 : Life after Death : album sortie à titre posthume de Notorious B.I.G côté East-Coast. Il est l’un des seuls album de hip-hop le plus vendu tous les temps.', '2002 : Lose Yourself musique composée par Eminem présente sur la bande original de 8-Mile qui lui font gagner un Oscar et deux Grammy Awards.']

//CHANGE TEXT ACCORDING TO CLICKED BUTTON ON TIMELINE
$rapOrigin.addEventListener('click', () =>
{
    for (let i = 0; i < $pulseButtons.length; i++)
    {
        $pulseButtons[i].addEventListener('click', () =>
        {
            selectedButton = i
            $pulseButtons[i].style.backgroundColor = '#FFBA00'
            $pulseButtons[i].classList.add('pulse-button-animation')
            $pulseButtonText.innerHTML = rapOriginTexts[i]
            //CHANGE BACKGROUND IMAGE ACCORDING TO SELECTED POINT
            if (i == 0)
            { $rapOrigin.style.backgroundImage = `url('images/rap-timeline/grandmaster-flash.jpg')` }
            else if (i == 1)
            { $rapOrigin.style.backgroundImage = `url('images/rap-timeline/beastie-boys.jpg')` }
            else if (i == 2)
            { $rapOrigin.style.backgroundImage = `url('images/rap-timeline/2pac.jpg')` }
            else if (i == 3)
            { $rapOrigin.style.backgroundImage = `url('images/rap-timeline/notorious-big.png')` }
            else if (i == 4)
            { $rapOrigin.style.backgroundImage = `url('images/rap-timeline/eminem.jpg')` }
        })
        if (i != selectedButton)
        {
            $pulseButtons[i].style.backgroundColor = `#FFF`
            $pulseButtons[i].classList.remove('pulse-button-animation')
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
const $firstVerticalDot = $verticalDotsNav.querySelector('.first-dot')
const $secondVerticalDot = $verticalDotsNav.querySelector('.second-dot')
const $thirdVerticalDot = $verticalDotsNav.querySelector('.third-dot')
const $fourthVerticalDot = $verticalDotsNav.querySelector('.fourth-dot')
const $fifthVerticalDot = $verticalDotsNav.querySelector('.fifth-dot')
const $sixthVerticalDot = $verticalDotsNav.querySelector('.sixth-dot')

window.addEventListener('scroll', () =>
{
    percentOfScroll = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100

    if (percentOfScroll >= 0 && percentOfScroll < 15)
    {
        $firstVerticalDot.style.background = `#FFF`
        $secondVerticalDot.style.background = `transparent`
        $thirdVerticalDot.style.background = `transparent`
        $fourthVerticalDot.style.background = `transparent`
        $fifthVerticalDot.style.background = `transparent`
        $sixthVerticalDot.style.background = `transparent`
    }
    else if (percentOfScroll >= 15 && percentOfScroll < 30)
    {
        $firstVerticalDot.style.background = `transparent`
        $secondVerticalDot.style.background = `#FFF`
        $thirdVerticalDot.style.background = `transparent`
        $fourthVerticalDot.style.background = `transparent`
        $fifthVerticalDot.style.background = `transparent`
        $sixthVerticalDot.style.background = `transparent`
    }
    else if (percentOfScroll >= 30 && percentOfScroll < 45)
    {
        $firstVerticalDot.style.background = `transparent`
        $secondVerticalDot.style.background = `transparent`
        $thirdVerticalDot.style.background = `#FFF`
        $fourthVerticalDot.style.background = `transparent`
        $fifthVerticalDot.style.background = `transparent`
        $sixthVerticalDot.style.background = `transparent`
    }
    else if (percentOfScroll >= 45 && percentOfScroll < 60)
    {
        $firstVerticalDot.style.background = `transparent`
        $secondVerticalDot.style.background = `transparent`
        $thirdVerticalDot.style.background = `transparent`
        $fourthVerticalDot.style.background = `#FFF`
        $fifthVerticalDot.style.background = `transparent`
        $sixthVerticalDot.style.background = `transparent`
    }
    else if (percentOfScroll >= 60 && percentOfScroll < 75)
    {
        $firstVerticalDot.style.background = `transparent`
        $secondVerticalDot.style.background = `transparent`
        $thirdVerticalDot.style.background = `transparent`
        $fourthVerticalDot.style.background = `transparent`
        $fifthVerticalDot.style.background = `#FFF`
        $sixthVerticalDot.style.background = `transparent`
    }
    else if (percentOfScroll >= 75)
    {
        $firstVerticalDot.style.background = `transparent`
        $secondVerticalDot.style.background = `transparent`
        $thirdVerticalDot.style.background = `transparent`
        $fourthVerticalDot.style.background = `transparent`
        $fifthVerticalDot.style.background = `transparent`
        $sixthVerticalDot.style.background = `#FFF`
    }
})

/*******************
******************** RAP'S HISTORY : RAP'S TYPES
*******************/
//SELECT EACH RAPPER BACKGROUND IMAGE
const $rapperEminemBackground = $rapTypes.querySelector('.js-rapper-eminem')
const $rapperDrDreBackground = $rapTypes.querySelector('.js-rapper-dr-dre')
const $rapperNellyBackground = $rapTypes.querySelector('.js-rapper-nelly')
const $rapperSnoopDoggBackground = $rapTypes.querySelector('.js-rapper-snoop-dogg')

//SELECT EACH RAPPER DESCRIPTION TEXT
const $rapperEminemText = $rapTypes.querySelector('.js-rapper-eminem-text')
const $rapperDrDreText = $rapTypes.querySelector('.js-rapper-dr-dre-text')
const $rapperNellyText = $rapTypes.querySelector('.js-rapper-nelly-text')
const $rapperSnoopDoggText = $rapTypes.querySelector('.js-rapper-snoop-dogg-text')

//SET MOUSEOVER & MOUSEOUT LISTENER FOR DISPLAYING DESCRIPTION TEXT
$rapperEminemBackground.addEventListener('mouseover', () =>
{
    $rapperEminemBackground.classList.remove('rapper-background-animation-mouseout')
    $rapperEminemBackground.classList.add('rapper-background-animation-mouseover')
    $rapperEminemText.classList.remove('rapper-text-animation-mouseout')
    $rapperEminemText.classList.add('rapper-text-animation-mouseover')
})

$rapperEminemBackground.addEventListener('mouseout', () =>
{
    $rapperEminemBackground.classList.remove('rapper-background-animation-mouseover')
    $rapperEminemBackground.classList.add('rapper-background-animation-mouseout')
    $rapperEminemText.classList.remove('rapper-text-animation-mouseover')
    $rapperEminemText.classList.add('rapper-text-animation-mouseout')
})
$rapperDrDreBackground.addEventListener('mouseover', () =>
{
    $rapperDrDreBackground.classList.remove('rapper-background-animation-mouseout')
    $rapperDrDreBackground.classList.add('rapper-background-animation-mouseover')
    $rapperDrDreText.classList.remove('rapper-text-animation-mouseout')
    $rapperDrDreText.classList.add('rapper-text-animation-mouseover')
})

$rapperDrDreBackground.addEventListener('mouseout', () =>
{
    $rapperDrDreBackground.classList.remove('rapper-background-animation-mouseover')
    $rapperDrDreBackground.classList.add('rapper-background-animation-mouseout')
    $rapperDrDreText.classList.remove('rapper-text-animation-mouseover')
    $rapperDrDreText.classList.add('rapper-text-animation-mouseout')
})
$rapperNellyBackground.addEventListener('mouseover', () =>
{
    $rapperNellyBackground.classList.remove('rapper-background-animation-mouseout')
    $rapperNellyBackground.classList.add('rapper-background-animation-mouseover')
    $rapperNellyText.classList.remove('rapper-text-animation-mouseout')
    $rapperNellyText.classList.add('rapper-text-animation-mouseover')
})

$rapperNellyBackground.addEventListener('mouseout', () =>
{
    $rapperNellyBackground.classList.remove('rapper-background-animation-mouseover')
    $rapperNellyBackground.classList.add('rapper-background-animation-mouseout')
    $rapperNellyText.classList.remove('rapper-text-animation-mouseover')
    $rapperNellyText.classList.add('rapper-text-animation-mouseout')
})
$rapperSnoopDoggBackground.addEventListener('mouseover', () =>
{
    $rapperSnoopDoggBackground.classList.remove('rapper-background-animation-mouseout')
    $rapperSnoopDoggBackground.classList.add('rapper-background-animation-mouseover')
    $rapperSnoopDoggText.classList.remove('rapper-text-animation-mouseout')
    $rapperSnoopDoggText.classList.add('rapper-text-animation-mouseover')
})

$rapperSnoopDoggBackground.addEventListener('mouseout', () =>
{
    $rapperSnoopDoggBackground.classList.remove('rapper-background-animation-mouseover')
    $rapperSnoopDoggBackground.classList.add('rapper-background-animation-mouseout')
    $rapperSnoopDoggText.classList.remove('rapper-text-animation-mouseover')
    $rapperSnoopDoggText.classList.add('rapper-text-animation-mouseout')
})

/*******************
******************** RAP'S HISTORY : RAP'S MESSAGE
*******************/
const $rapMessage = $wrapperRapHistory.querySelector('.js-rap-message')
$rapMessage.style.height =`${offsetHeight}px`

/*******************
******************** BACK IN TIME TUNNEL EFFECT
*******************/
//TUNNEL FROM RAP TO HIP-HOP
// const $tunnelToHipHop = $rapTypes.querySelector('.tunnel-to-hip-hop')
// const $rapContent = $wrapperRapHistory.querySelector('.rap-content')
// const $hipHopContent = $wrapperRapHistory.querySelector('.hip-hop-content')

// $tunnelToHipHop.addEventListener('click', () =>
// {
//     document.body.style.overflow = `hidden`
//     $rapContent.style.transform = `translateZ(801px)`
//     const tunnelAnimation = setInterval(() =>
//     {
//         $rapContent.style.display = `none`
//         document.body.style.overflow = `visible`
//         window.clearInterval(tunnelAnimation)
//     }, 2000)
//     $rapContent.classList.add('block-animation')
// })

