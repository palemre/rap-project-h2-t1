/*******************
 * I)    DISC LOADER : DELETE AFTER ANIMATION FINISHED
 * II)   HEADPHONE WARNING : DISPLAY AFTER DISC & DELETE AFTER ANIMATION FINISHED
 * III   RAP HISTORY : DISPLAY MAIN RAP WRAPPER + RAP'S ORIGIN
 * IV)   NAV DOTS : FILL NAV DOTS ON SCROLL & CLICK + KEYBOARD PRESS SCROLL TO DOT'S SECTION
 * V)    RAP'S HISTORY : RAP'S TYPES -> MESSAGE & IMPACTS
 * VI)   BACK IN TIME TUNNEL EFFECT FOR PASSING BETWEEN MUSIC TYPES : RAP -> HIP-HOP
 * VII   DISPLAY HIP-HOP'S HISTORY INTRO
 * VIII) FULLSCREEN NAVIGATION MENU (RAP / HIP-HOP / JAZZ / ABOUT)
 * IX)   CURSOR PARALLAX ON MUSIC TYPE INTRO'S
 * X)    BACKGROUND MUSIC CONTROLLER
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
const $hipHopMosaicBackgroundImage = $wrapperRapHistory.querySelector('.js-hip-hop-history')

const $backgroundMusicController = document.querySelector('.play-pause-box')

//BACKGROUND AUDIOS
const audioRap = new Audio('./musics/background-rap-music.mp3');
const audioHipHop = new Audio('./musics/background-hip-hop-music.mp3');
const audioJazz = new Audio('./musics/background-jazz-music.mp3');

const offsetHeight = document.body.offsetHeight
const offsetWidth = document.body.offsetWidth

const headphoneDisplay = setInterval(() =>
{
    $headphone.style.display = `inline-block`
    $headphoneWarning.style.display = `block`
    $startButton.style.display = `block`
    window.clearInterval(headphoneDisplay)
}, 5000)

$startButton.addEventListener('click', () =>
{
    //DISPLAY CONTROLLER & START RAP AUDIO
    $backgroundMusicController.style.display = `block`
    audioRap.play();

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

        //MUSIC STYLE MOSAIC BACKGROUND
        $rapMosaicBackgroundImage.style.height = `${offsetHeight}px`
        $hipHopMosaicBackgroundImage.style.height = `${offsetHeight}px`

        //RAP ORIGIN DISPLAY
        $rapOrigin.style.height =`${offsetHeight}px`

        //RAP TYPES DISPLAY
        $rapTypes.style.height =`${offsetHeight}px`

        window.clearInterval(deleteHeadphoneWarning)
    }, 1000)
})


//RAP'S ORIGIN TIMELINE PULSE BUTTONS
const $timelineLineFillerRap = document.querySelector('.timeline-line-filler.rap-filler')
const $pulseButtonsRap = $rapOrigin.querySelectorAll('.js-pulse-button-rap')
const $pulseButtonsRapInner = $rapOrigin.querySelectorAll('.js-timeline-button-rap')

const $pulseButtonText = $rapOrigin.querySelector('.js-pulse-button-text')
const rapOriginTexts = [`Le genre se développe en tant que <span class="important-text">mouvement culturel et artistique</span> aux États-Unis, à New York, dans le <span class="important-text">South Bronx</span> au début des années <span class="important-text">1970</span>.`,
`1982 : les <span class="important-text">Beastie Boys</span> commencèrent à se faire connaître, prouvant que le rap, issu du <span class="important-text">hip-hop</span> était bien un mélange de culture et d'influence noir et blanche.`,
`1996 : L’album All eyez on me <span class="important-text">2Pac</span> reconnu comme l’un des plus influent de l’histoire du hip-hop. Gang West-Coast en <span class="important-text">guerre</span> avec la East-Coast des USA`,
`1997 : <span class="important-text">Life after Death</span> : album sorti à titre posthume de Notorious B.I.G côté East-Coast. Il est l’un des seuls album de <span class="important-text">hip-hop le plus vendu tous les temps</span>.`,
'2002 : <span class="important-text">Lose Yourself</span> musique composée par Eminem présente sur la bande original de 8-Mile qui lui font gagner un <span class="important-text">Oscar et deux Grammy Awards</span>.']

//CHANGE TEXT ACCORDING TO CLICKED BUTTON ON TIMELINE
$rapOrigin.addEventListener('click', () =>
{
    for (let i = 0; i < $pulseButtonsRap.length; i++)
    {
        $pulseButtonsRap[i].addEventListener('click', () =>
        {
            $pulseButtonsRapInner[i].style.backgroundColor = '#FFF'
            $pulseButtonsRap[i].classList.add('pulse-button-animation')
            $pulseButtonText.innerHTML = rapOriginTexts[i]
            //CHANGE BACKGROUND IMAGE ACCORDING TO SELECTED POINT
            if (i == 0)
            {
                $timelineLineFillerRap.style.transform = `scaleX(1)`
                $pulseButtonsRapInner[i].style.backgroundColor = '#FFBA00'
                $pulseButtonsRapInner[i+1].style.backgroundColor = '#F0F0F0'
                $pulseButtonsRapInner[i+2].style.backgroundColor = '#F0F0F0'
                $pulseButtonsRapInner[i+3].style.backgroundColor = '#F0F0F0'
                $pulseButtonsRapInner[i+4].style.backgroundColor = '#F0F0F0'
                $rapOrigin.style.backgroundImage = `url('./images/rap/rap-timeline/grandmaster-flash.png')`
            }
            else if (i == 1)
            {
                $timelineLineFillerRap.style.transform = `scaleX(3)`
                $pulseButtonsRapInner[i-1].style.backgroundColor = '#FFBA00'
                $pulseButtonsRapInner[i].style.backgroundColor = '#FFBA00'
                $pulseButtonsRapInner[i+1].style.backgroundColor = '#F0F0F0'
                $pulseButtonsRapInner[i+2].style.backgroundColor = '#F0F0F0'
                $pulseButtonsRapInner[i+3].style.backgroundColor = '#F0F0F0'
                $rapOrigin.style.backgroundImage = `url('./images/rap/rap-timeline/beastie-boys.png')`
            }
            else if (i == 2)
            {
                $timelineLineFillerRap.style.transform = `scaleX(5)`
                $pulseButtonsRapInner[i-2].style.backgroundColor = '#FFBA00'
                $pulseButtonsRapInner[i-1].style.backgroundColor = '#FFBA00'
                $pulseButtonsRapInner[i].style.backgroundColor = '#FFBA00'
                $pulseButtonsRapInner[i+1].style.backgroundColor = '#F0F0F0'
                $pulseButtonsRapInner[i+2].style.backgroundColor = '#F0F0F0'
                $rapOrigin.style.backgroundImage = `url('./images/rap/rap-timeline/2pac.png')`
            }
            else if (i == 3)
            {
                $timelineLineFillerRap.style.transform = `scaleX(7)`
                $pulseButtonsRapInner[i-3].style.backgroundColor = '#FFBA00'
                $pulseButtonsRapInner[i-2].style.backgroundColor = '#FFBA00'
                $pulseButtonsRapInner[i-1].style.backgroundColor = '#FFBA00'
                $pulseButtonsRapInner[i].style.backgroundColor = '#FFBA00'
                $pulseButtonsRapInner[i+1].style.backgroundColor = '#F0F0F0'
                $rapOrigin.style.backgroundImage = `url('./images/rap/rap-timeline/notorious-big.png')`
            }
            else if (i == 4)
            {
                $timelineLineFillerRap.style.transform = `scaleX(9)`
                $pulseButtonsRapInner[i-4].style.backgroundColor = '#FFBA00'
                $pulseButtonsRapInner[i-3].style.backgroundColor = '#FFBA00'
                $pulseButtonsRapInner[i-2].style.backgroundColor = '#FFBA00'
                $pulseButtonsRapInner[i-1].style.backgroundColor = '#FFBA00'
                $pulseButtonsRapInner[i].style.backgroundColor = '#FFBA00'
                $rapOrigin.style.backgroundImage = `url('./images/rap/rap-timeline/eminem.png')`
            }
        })
    }
})

/*******************
******************** FILL NAV DOTS ON SCROLL & CLICK + KEYBOARD PRESS SCROLL TO DOT'S SECTION
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

window.addEventListener('scroll', () =>
{
    percentOfScroll = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100
    if (percentOfScroll >= 0 && percentOfScroll < 20)
    {
        $firstVerticalDot.style.background = `#FFF`
        $secondVerticalDot.style.background = `transparent`
        $thirdVerticalDot.style.background = `transparent`
        $fourthVerticalDot.style.background = `transparent`
        $fifthVerticalDot.style.background = `transparent`
    }
    else if (percentOfScroll >= 20 && percentOfScroll < 40)
    {
        $firstVerticalDot.style.background = `transparent`
        $secondVerticalDot.style.background = `#FFF`
        $thirdVerticalDot.style.background = `transparent`
        $fourthVerticalDot.style.background = `transparent`
        $fifthVerticalDot.style.background = `transparent`
    }
    else if (percentOfScroll >= 40 && percentOfScroll < 60)
    {
        $firstVerticalDot.style.background = `transparent`
        $secondVerticalDot.style.background = `transparent`
        $thirdVerticalDot.style.background = `#FFF`
        $fourthVerticalDot.style.background = `transparent`
        $fifthVerticalDot.style.background = `transparent`
    }
    else if (percentOfScroll >= 60 && percentOfScroll < 85)
    {
        $firstVerticalDot.style.background = `transparent`
        $secondVerticalDot.style.background = `transparent`
        $thirdVerticalDot.style.background = `transparent`
        $fourthVerticalDot.style.background = `#FFF`
        $fifthVerticalDot.style.background = `transparent`
    }
    else if (percentOfScroll >= 85)
    {
        $firstVerticalDot.style.background = `transparent`
        $secondVerticalDot.style.background = `transparent`
        $thirdVerticalDot.style.background = `transparent`
        $fourthVerticalDot.style.background = `transparent`
        $fifthVerticalDot.style.background = `#FFF`
    }
})

//ON CLICK GO TO CLICKED DOT'S SECTION
$firstVerticalDot.addEventListener('click', () =>
{
    window.scroll(0,0)
})
$secondVerticalDot.addEventListener('click', () =>
{
    window.scroll(0,0)
    window.scrollBy(0, document.body.offsetHeight)
})
$thirdVerticalDot.addEventListener('click', () =>
{
    window.scroll(0,0)
    window.scrollBy(0, document.body.offsetHeight*2)
})
$fourthVerticalDot.addEventListener('click', () =>
{
    window.scroll(0,0)
    window.scrollBy(0, document.body.offsetHeight*3)
})
$fifthVerticalDot.addEventListener('click', () =>
{
    window.scroll(0,0)
    window.scrollBy(0, document.body.offsetHeight*4)
})

//KEYBOARD SUPPORT FOR SCROLL PROGRESSION
window.addEventListener('keydown', (_button) =>
{
    if(_button.keyCode == '38')
    { window.scrollBy(0, -document.body.offsetHeight) }
    else if(_button.keyCode == '40')
    { window.scrollBy(0, document.body.offsetHeight) }
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
    $rapperEminemBackground.classList.remove('artist-background-animation-mouseout')
    $rapperEminemBackground.classList.add('artist-background-animation-mouseover')
    $rapperEminemText.classList.remove('artist-text-animation-mouseout')
    $rapperEminemText.classList.add('artist-text-animation-mouseover')
})
$rapperEminemBackground.addEventListener('mouseout', () =>
{
    $rapperEminemBackground.classList.remove('artist-background-animation-mouseover')
    $rapperEminemBackground.classList.add('artist-background-animation-mouseout')
    $rapperEminemText.classList.remove('artist-text-animation-mouseover')
    $rapperEminemText.classList.add('artist-text-animation-mouseout')
})
$rapperDrDreBackground.addEventListener('mouseover', () =>
{
    $rapperDrDreBackground.classList.remove('artist-background-animation-mouseout')
    $rapperDrDreBackground.classList.add('artist-background-animation-mouseover')
    $rapperDrDreText.classList.remove('artist-text-animation-mouseout')
    $rapperDrDreText.classList.add('artist-text-animation-mouseover')
})
$rapperDrDreBackground.addEventListener('mouseout', () =>
{
    $rapperDrDreBackground.classList.remove('artist-background-animation-mouseover')
    $rapperDrDreBackground.classList.add('artist-background-animation-mouseout')
    $rapperDrDreText.classList.remove('artist-text-animation-mouseover')
    $rapperDrDreText.classList.add('artist-text-animation-mouseout')
})
$rapperNellyBackground.addEventListener('mouseover', () =>
{
    $rapperNellyBackground.classList.remove('artist-background-animation-mouseout')
    $rapperNellyBackground.classList.add('artist-background-animation-mouseover')
    $rapperNellyText.classList.remove('artist-text-animation-mouseout')
    $rapperNellyText.classList.add('artist-text-animation-mouseover')
})
$rapperNellyBackground.addEventListener('mouseout', () =>
{
    $rapperNellyBackground.classList.remove('artist-background-animation-mouseover')
    $rapperNellyBackground.classList.add('artist-background-animation-mouseout')
    $rapperNellyText.classList.remove('artist-text-animation-mouseover')
    $rapperNellyText.classList.add('artist-text-animation-mouseout')
})
$rapperSnoopDoggBackground.addEventListener('mouseover', () =>
{
    $rapperSnoopDoggBackground.classList.remove('artist-background-animation-mouseout')
    $rapperSnoopDoggBackground.classList.add('artist-background-animation-mouseover')
    $rapperSnoopDoggText.classList.remove('artist-text-animation-mouseout')
    $rapperSnoopDoggText.classList.add('artist-text-animation-mouseover')
})
$rapperSnoopDoggBackground.addEventListener('mouseout', () =>
{
    $rapperSnoopDoggBackground.classList.remove('artist-background-animation-mouseover')
    $rapperSnoopDoggBackground.classList.add('artist-background-animation-mouseout')
    $rapperSnoopDoggText.classList.remove('artist-text-animation-mouseover')
    $rapperSnoopDoggText.classList.add('artist-text-animation-mouseout')
})

/*******************
******************** RAP'S HISTORY : RAP'S MESSAGE
*******************/
const $rapMessage = $wrapperRapHistory.querySelector('.js-rap-message')
$rapMessage.style.height =`${offsetHeight}px`

/*******************
******************** RAP'S HISTORY : RAP'S IMPACTS
*******************/
const $rapImpacts = $wrapperRapHistory.querySelector('.js-rap-impacts')
$rapImpacts.style.height =`${offsetHeight}px`

/*******************
******************** BACK IN TIME TUNNEL EFFECT : RAP TO HIP-HOP
*******************/
//TUNNEL FROM RAP TO HIP-HOP
const $tunnelToHipHop = $rapImpacts.querySelector('.js-tunnel-to-hip-hop')
let $rapMainContainerToDisplay = $wrapperRapHistory.querySelector('.rap-main-container-to-display')
let $hipHopContent = $wrapperRapHistory.querySelector('.js-hip-hop-content')

//SELECT HIP-HOP CONTENTS
const $hiphopOrigin = $wrapperRapHistory.querySelector('.js-hip-hop-origin')

$tunnelToHipHop.addEventListener('click', () =>
{
    //CHECK IF PLAY BUTTON IS ON
    if ($backgroundMusicController.classList.contains('playing'))
    {
        //PLAY AUDIO OF HIP-HOP
        audioJazz.pause()
        audioRap.pause()
        audioHipHop.play()
    }

    document.body.style.overflow = `hidden`
    $rapMainContainerToDisplay.classList.add('tunnel-animation')
    $rapMainContainerToDisplay.style.transform = `translateZ(801px)`
    $hipHopContent.style.transform = `translateZ(0)`
    const tunnelAnimation = setInterval(() =>
    {
        $rapMainContainerToDisplay.style.display = `none`
        $hipHopContent.style.display = `inline`
        document.body.style.overflow = `visible`
        window.clearInterval(tunnelAnimation)
        window.scroll(0, 0);
    }, 1500)
    $rapMainContainerToDisplay.classList.add('tunnel-animation')
    $hipHopContent.classList.add('tunnel-animation-in')

    //DIPLAY HIP-HOP HISTORY'S CONTENT
    $hiphopOrigin.style.height =`${offsetHeight}px`
    $hiphopOrigin.style.width =`${offsetWidth}px`
})

/*******************
******************** FULLSCREEN NAVIGATION MENU (RAP / HIP-HOP / JAZZ / ABOUT)
*******************/
//SELECT EACH ITEM IN NAV
const $navDisplayRap = document.querySelector('.nav-display-rap')
const $navDisplayHipHop = document.querySelector('.nav-display-hip-hop')
const $navDisplayJazz = document.querySelector('.nav-display-jazz')
const $navDisplayAbout = document.querySelector('.nav-display-about')
const $hamburgerMenu = document.querySelector('#hamburger-menu')
const $aboutBox = document.querySelector('.about-box')
const $closeAboutBox = document.querySelector('.close-about-box')

//ACCESS TO RAP'S PAGE
$navDisplayRap.addEventListener('click', () =>
{
    $hamburgerMenu.checked = false
    //IF THE CURRENT PAGE IS HIP-HOP
    if ($hipHopContent.style.display != 'none')
    {
        $jazzContent.style.display = `none`
        document.body.style.overflow = `hidden`
        $hipHopMainContainerToDisplay.classList.add('tunnel-animation')
        $hipHopMainContainerToDisplay.style.transform = `translateZ(802px)`
        $rapMainContainerToDisplay.style.transform = `translateZ(0)`
        const tunnelAnimation = setInterval(() =>
        {
            $hipHopMainContainerToDisplay.style.display = `none`
            $rapMainContainerToDisplay.style.display = `inline`
            document.body.style.overflow = `visible`
            window.clearInterval(tunnelAnimation)
            window.scroll(0, 0);
        }, 1500)
        $hipHopMainContainerToDisplay.classList.add('tunnel-animation')
        $rapMainContainerToDisplay.classList.add('tunnel-animation-in')
    
        //DIPLAY RAP'S HISTORY'S CONTENT
        $rapOrigin.style.height =`${offsetHeight}px`
        $rapMosaicBackgroundImage.style.height =`${offsetHeight}px`
    }
    //IF THE CURRENT PAGE IS JAZZ
    else if ($jazzContent.style.display != 'none')
    {
        $hipHopContent.style.display = `none`
        document.body.style.overflow = `hidden`
        $jazzContent.classList.add('tunnel-animation')
        $jazzContent.style.transform = `translateZ(803px)`
        $rapMainContainerToDisplay.style.transform = `translateZ(0)`
        const tunnelAnimation = setInterval(() =>
        {
            $jazzContent.style.display = `none`
            $rapMainContainerToDisplay.style.display = `inline`
            document.body.style.overflow = `visible`
            window.clearInterval(tunnelAnimation)
            window.scroll(0, 0);
        }, 1500)
        $jazzContent.classList.add('tunnel-animation')
        $rapMainContainerToDisplay.classList.add('tunnel-animation-in')
    
        //DIPLAY RAP'S HISTORY'S CONTENT
        $rapOrigin.style.height =`${offsetHeight}px`
        $rapMosaicBackgroundImage.style.height =`${offsetHeight}px`
    }
    //IF THE CURRENT PAGE IS RAP NOTHING TO DO
    //PLAY BACKGROUND RAP MUSIC
    audioJazz.pause()
    audioHipHop.pause()
    audioRap.play()
})

//ACCESS TO HIP-HOP'S PAGE
$navDisplayHipHop.addEventListener('click', () =>
{
    $hamburgerMenu.checked = false
    //IF THE CURRENT PAGE IS RAP
    if ($rapMainContainerToDisplay.style.display != 'none')
    {
        $jazzContent.style.display = `none`
        document.body.style.overflow = `hidden`
        $rapMainContainerToDisplay.classList.add('tunnel-animation')
        $rapMainContainerToDisplay.style.transform = `translateZ(802px)`
        $hipHopContent.style.transform = `translateZ(0)`
        const tunnelAnimation = setInterval(() =>
        {
            $rapMainContainerToDisplay.style.display = `none`
            $hipHopContent.style.display = `inline`
            document.body.style.overflow = `visible`
            window.clearInterval(tunnelAnimation)
            window.scroll(0, 0);
        }, 1500)
        $rapMainContainerToDisplay.classList.add('tunnel-animation')
        $hipHopContent.classList.add('tunnel-animation-in')
    
        //DIPLAY HIP-HOP'S HISTORY'S CONTENT
        $hiphopOrigin.style.height =`${offsetHeight}px`
        $hiphopOrigin.style.width =`${offsetWidth}px`
    }
    //IF THE CURRENT PAGE IS JAZZ
    else if ($jazzContent.style.display != 'none')
    {
        $rapMainContainerToDisplay.style.display = `none`
        document.body.style.overflow = `hidden`
        $jazzContent.classList.add('tunnel-animation')
        $jazzContent.style.transform = `translateZ(803px)`
        $hipHopContent.style.transform = `translateZ(0)`
        const tunnelAnimation = setInterval(() =>
        {
            $jazzContent.style.display = `none`
            $hipHopContent.style.display = `inline`
            document.body.style.overflow = `visible`
            window.clearInterval(tunnelAnimation)
            window.scroll(0, 0);
        }, 1500)
        $jazzContent.classList.add('tunnel-animation')
        $hipHopContent.classList.add('tunnel-animation-in')
    
        //DIPLAY RAP'S HISTORY'S CONTENT
        $hiphopOrigin.style.height =`${offsetHeight}px`
        $hiphopOrigin.style.width =`${offsetWidth}px`
    }
    //IF THE CURRENT PAGE IS HIP-HOP NOTHING TO DO
    //PLAY BACKGROUND HIP-HOP MUSIC
    audioJazz.pause()
    audioRap.pause()
    audioHipHop.play()
})

//ACCESS TO JAZZ'S PAGE
$navDisplayJazz.addEventListener('click', () =>
{
    $hamburgerMenu.checked = false
    //IF THE CURRENT PAGE IS RAP
    if ($rapMainContainerToDisplay.style.display != 'none')
    {
        $hipHopContent.style.display = `none`
        document.body.style.overflow = `hidden`
        $rapMainContainerToDisplay.classList.add('tunnel-animation')
        $rapMainContainerToDisplay.style.transform = `translateZ(802px)`
        $jazzContent.style.transform = `translateZ(0)`
        const tunnelAnimation = setInterval(() =>
        {
            $rapMainContainerToDisplay.style.display = `none`
            $jazzContent.style.display = `inline`
            document.body.style.overflow = `visible`
            window.clearInterval(tunnelAnimation)
            window.scroll(0, 0);
        }, 1500)
        $rapMainContainerToDisplay.classList.add('tunnel-animation')
        $jazzContent.classList.add('tunnel-animation-in')
    
        //DIPLAY HIP-HOP'S HISTORY'S CONTENT
        $jazzOrigin.style.height =`${offsetHeight}px`
        $jazzMosaicBackgroundImage.style.height =`${offsetHeight}px`
    }
    //IF THE CURRENT PAGE IS HIP-HOP
    else if ($hipHopContent.style.display != 'none')
    {
        $rapMainContainerToDisplay.style.display = `none`
        document.body.style.overflow = `hidden`
        $hipHopMainContainerToDisplay.classList.add('tunnel-animation')
        $hipHopMainContainerToDisplay.style.transform = `translateZ(802px)`
        $jazzContent.style.transform = `translateZ(0)`
        const tunnelAnimation = setInterval(() =>
        {
            $hipHopMainContainerToDisplay.style.display = `none`
            $jazzContent.style.display = `inline`
            document.body.style.overflow = `visible`
            window.clearInterval(tunnelAnimation)
            window.scroll(0, 0);
        }, 1500)
        $hipHopMainContainerToDisplay.classList.add('tunnel-animation')
        $jazzContent.classList.add('tunnel-animation-in')
    
        //DIPLAY RAP'S HISTORY'S CONTENT
        $jazzOrigin.style.height =`${offsetHeight}px`
        $jazzMosaicBackgroundImage.style.height =`${offsetHeight}px`
    }
    //IF THE CURRENT PAGE IS JAZZ NOTHING TO DO
    //PLAY BACKGROUND JAZZ MUSIC
    audioRap.pause()
    audioHipHop.pause()
    audioJazz.play()
})

//DISPLAY ABOUT BOX
$navDisplayAbout.addEventListener('click', () =>
{
    $aboutBox.style.display = `flex`
    $aboutBox.classList.remove('about-box-animation-out')
    $aboutBox.classList.add('about-box-animation-in')
})

//CLOSE ABOUT BOX
$closeAboutBox.addEventListener('click', () =>
{
    $aboutBox.classList.remove('about-box-animation-in')
    $aboutBox.classList.add('about-box-animation-out')
    $aboutBox.style.display = `none`
})

/*******************
******************** CURSOR PARALLAX ON MUSIC TYPE INTRO'S
*******************/
let windowWidth = window.innerWidth
let windowHeight = window.innerHeight
window.addEventListener('resize', () =>
{
    windowWidth = window.innerWidth
    windowHeight = window.innerHeight
})

//CURSOR PARALLAX
const cursorParallaxes = document.querySelectorAll('.cursor-parallax')
window.addEventListener('mousemove', (_event) =>
{
    const ratioX = _event.clientX / windowWidth - 0.5
    const ratioY = _event.clientY / windowHeight - 0.5
    for(const cursorParallax of cursorParallaxes)
    {
        const depth = parseFloat(cursorParallax.dataset.cursorDepth)
        const translateX = - ratioX * depth * 100
        const translateY = - ratioY * depth * 100
        cursorParallax.style.transform = `translate(${translateX}%, ${translateY}%)`
    }
})

/*******************
******************** BACKGROUND MUSIC CONTROLLER
*******************/
//CROSS-BROWSER AUDIO LOOP
audioRap.addEventListener('ended', () =>
{
    audioRap.currentTime = 0;
    audioRap.play();
});
audioHipHop.addEventListener('ended', () =>
{
    audioHipHop.currentTime = 0;
    audioHipHop.play();
});
audioJazz.addEventListener('ended', () =>
{
    audioJazz.currentTime = 0;
    audioJazz.play();
});

$backgroundMusicController.addEventListener('click', () =>
{
    //CHECK IF MUSIC IS PLAYING
    if ($backgroundMusicController.classList.contains('playing'))
    {
        $backgroundMusicController.classList.remove('playing')
        $backgroundMusicController.classList.add('paused')

        //CHECK WHICH PAGE IS DISPLAYED FOR PAUSING CORRESPONDING MUSIC
        if ($rapMainContainerToDisplay.style.display != `none`)
        { audioRap.pause() }
        else if ($hipHopMainContainerToDisplay.style.display != `none`)
        { audioHipHop.pause() }
        else if ($jazzContent.style.display != `none`)
        { audioJazz.pause() }
    }
    else
    {
        $backgroundMusicController.classList.remove('paused')
        $backgroundMusicController.classList.add('playing')

        if ($rapMainContainerToDisplay.style.display != `none`)
        { audioRap.play() }
        else if ($hipHopMainContainerToDisplay.style.display != `none`)
        { audioHipHop.play() }
        else if ($jazzContent.style.display != `none`)
        { audioJazz.play() }
    }
})

