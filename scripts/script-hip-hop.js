/*******************
 * I) HIP-HOP'S ORIGIN
 * II) HIP-HOP'S TYPES
 * III) HIP-HOP'S MESSAGE
 * IV) HIP-HOP'S IMPACTS
 * V) BACK IN TIME TUNNEL EFFECT FOR PASSING BETWEEN MUSIC TYPES : HIP-HOP -> JAZZ
 ******************/
/*******************
******************** HIP-HOP'S ORIGIN TIMELINE
*******************/
//HIP-HOP'S ORIGIN TIMELINE PULSE BUTTONS
const $pulseButtonsHipHop = $hiphopOrigin.querySelectorAll('.js-pulse-button-hip-hop')
const $pulseButtonTextHipHop = $hiphopOrigin.querySelector('.js-pulse-button-text-hip-hop')
let selectedButtonHipHop = 0
const hiphopOriginTexts = ['1984 : Run DMC par DMC et REV RUN sont l’un des premiers groupes à avoir sorti un album sur le hip-hop devenant un incontournable du genre.', '1987 : Paid in full - par Eric B & Rakim, la sortie de cette album marque l’age d’or du hip hop et il figure dans la liste des ‘500 plus grands albums de tous les temps’ par le magazine Rolling Stones.', '1988 : Public enemy - It takes A nation Of Millions to hold Us Back. Le deuxième album de Public Enemy présente un vrai discours révolutionnaire sur l’état de la nation.', '1996 : The Score de The Fugees ont transformé le hip hop en pop, et on marqué l’histoire par leurs sublimes reprises ainsi que leurs chansons ‘conscientes’', '2004 : The College Drop out par Kanye West, c’est un album ayant reçu 10 nominations aux Grammy Award en 2005. Cet album a marqué l’histoire du rap par son analyse encore pertinente de l’Occident.']

//CHANGE TEXT ACCORDING TO CLICKED BUTTON ON TIMELINE
$hiphopOrigin.addEventListener('click', () =>
{
    for (let i = 0; i < $pulseButtonsHipHop.length; i++)
    {
        $pulseButtonsHipHop[i].addEventListener('click', () =>
        {
            selectedButtonHipHop = i
            $pulseButtonsHipHop[i].style.backgroundColor = '#7762E8'
            $pulseButtonsHipHop[i].classList.add('pulse-button-animation-hip-hop')
            $pulseButtonTextHipHop.innerHTML = hiphopOriginTexts[i]
            //CHANGE BACKGROUND IMAGE ACCORDING TO SELECTED POINT
            if (i == 0)
            { $hiphopOrigin.style.backgroundImage = `url('./images/hip-hop/hip-hop-timeline/run-dmc.png')` }
            else if (i == 1)
            { $hiphopOrigin.style.backgroundImage = `url('./images/hip-hop/hip-hop-timeline/paid-in-full.png')` }
            else if (i == 2)
            { $hiphopOrigin.style.backgroundImage = `url('./images/hip-hop/hip-hop-timeline/public-enemy.png')` }
            else if (i == 3)
            { $hiphopOrigin.style.backgroundImage = `url('./images/hip-hop/hip-hop-timeline/the-fugees.png')` }
            else if (i == 4)
            { $hiphopOrigin.style.backgroundImage = `url('./images/hip-hop/hip-hop-timeline/college-droput-hero.png')` }
        })
        if (i != selectedButtonHipHop)
        {
            $pulseButtonsHipHop[i].style.backgroundColor = `#FFF`
            $pulseButtonsHipHop[i].classList.remove('pulse-button-animation-hip-hop')
        }
    }
})

/*******************
******************** HIP-HOP'S TYPES
*******************/
//RAP TYPES DISPLAY
const $hipHopTypes = $wrapperRapHistory.querySelector('.js-hip-hop-types')
$hipHopTypes.style.height =`${offsetHeight}px`

//SELECT EACH ARTIST BACKGROUND IMAGE
const $artistMiaBackground = $hipHopTypes.querySelector('.js-artist-mia')
const $artistMcHammerBackground = $hipHopTypes.querySelector('.js-artist-mc-hammer')
const $artistDjShadowBackground = $hipHopTypes.querySelector('.js-artist-dj-shadow')
const $artistDjKoolHercBackground = $hipHopTypes.querySelector('.js-artist-dj-kool-herc')

//SELECT EACH ARTIST DESCRIPTION TEXT
const $artistMiaText = $hipHopTypes.querySelector('.js-artist-mia-text')
const $artistMcHammerText = $hipHopTypes.querySelector('.js-artist-mc-hammer-text')
const $artistDjShadowText = $hipHopTypes.querySelector('.js-artist-dj-shadow-text')
const $artistDjKoolHerc = $hipHopTypes.querySelector('.js-artist-dj-kool-herc-text')

//SET MOUSEOVER & MOUSEOUT LISTENER FOR DISPLAYING DESCRIPTION TEXT
$artistMiaBackground.addEventListener('mouseover', () =>
{
    $artistMiaBackground.classList.remove('artist-background-animation-mouseout')
    $artistMiaBackground.classList.add('artist-background-animation-mouseover')
    $artistMiaText.classList.remove('artist-text-animation-mouseout')
    $artistMiaText.classList.add('artist-text-animation-mouseover')
})
$artistMiaBackground.addEventListener('mouseout', () =>
{
    $artistMiaBackground.classList.remove('artist-background-animation-mouseover')
    $artistMiaBackground.classList.add('artist-background-animation-mouseout')
    $artistMiaText.classList.remove('artist-text-animation-mouseover')
    $artistMiaText.classList.add('artist-text-animation-mouseout')
})
$artistMcHammerBackground.addEventListener('mouseover', () =>
{
    $artistMcHammerBackground.classList.remove('artist-background-animation-mouseout')
    $artistMcHammerBackground.classList.add('artist-background-animation-mouseover')
    $artistMcHammerText.classList.remove('artist-text-animation-mouseout')
    $artistMcHammerText.classList.add('artist-text-animation-mouseover')
})
$artistMcHammerBackground.addEventListener('mouseout', () =>
{
    $artistMcHammerBackground.classList.remove('artist-background-animation-mouseover')
    $artistMcHammerBackground.classList.add('artist-background-animation-mouseout')
    $artistMcHammerText.classList.remove('artist-text-animation-mouseover')
    $artistMcHammerText.classList.add('artist-text-animation-mouseout')
})
$artistDjShadowBackground.addEventListener('mouseover', () =>
{
    $artistDjShadowBackground.classList.remove('artist-background-animation-mouseout')
    $artistDjShadowBackground.classList.add('artist-background-animation-mouseover')
    $artistDjShadowText.classList.remove('artist-text-animation-mouseout')
    $artistDjShadowText.classList.add('artist-text-animation-mouseover')
})
$artistDjShadowBackground.addEventListener('mouseout', () =>
{
    $artistDjShadowBackground.classList.remove('artist-background-animation-mouseover')
    $artistDjShadowBackground.classList.add('artist-background-animation-mouseout')
    $artistDjShadowText.classList.remove('artist-text-animation-mouseover')
    $artistDjShadowText.classList.add('artist-text-animation-mouseout')
})
$artistDjKoolHercBackground.addEventListener('mouseover', () =>
{
    $artistDjKoolHercBackground.classList.remove('artist-background-animation-mouseout')
    $artistDjKoolHercBackground.classList.add('artist-background-animation-mouseover')
    $artistDjKoolHerc.classList.remove('artist-text-animation-mouseout')
    $artistDjKoolHerc.classList.add('artist-text-animation-mouseover')
})
$artistDjKoolHercBackground.addEventListener('mouseout', () =>
{
    $artistDjKoolHercBackground.classList.remove('artist-background-animation-mouseover')
    $artistDjKoolHercBackground.classList.add('artist-background-animation-mouseout')
    $artistDjKoolHerc.classList.remove('artist-text-animation-mouseover')
    $artistDjKoolHerc.classList.add('artist-text-animation-mouseout')
})

/*******************
******************** HIP-HOP'S MESSAGE
*******************/
const $hipHopMessage = $wrapperRapHistory.querySelector('.js-hip-hop-message')
$hipHopMessage.style.height =`${offsetHeight}px`

/*******************
******************** HIP-HOP'S IMPACTS
*******************/
const $hipHopImpacts = $wrapperRapHistory.querySelector('.js-hip-hop-impacts')
$hipHopImpacts.style.height =`${offsetHeight}px`

/*******************
******************** BACK IN TIME TUNNEL EFFECT : HIP-HOP TO JAZZ
*******************/
//TUNNEL FROM HIP-HOP TO JAZZ
const $jazzOrigin = $wrapperRapHistory.querySelector('.js-jazz-origin')
const $tunnelToJazz = $hipHopImpacts.querySelector('.js-tunnel-to-jazz')
const $hipHopMainContainerToDisplay = $wrapperRapHistory.querySelector('.hip-hop-main-container-to-display')
let $jazzContent = $wrapperRapHistory.querySelector('.js-jazz-content')
const $jazzMosaicBackgroundImage = $wrapperRapHistory.querySelector('.js-jazz-history')

//SELECT JAZZ CONTENTS
$tunnelToJazz.addEventListener('click', () =>
{
    document.body.style.overflow = `hidden`
    $hipHopMainContainerToDisplay.classList.add('tunnel-animation')
    $hipHopMainContainerToDisplay.style.transform = `translateZ(802px)`
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

    //DIPLAY JAZZ HISTORY'S CONTENT
    $jazzOrigin.style.height =`${offsetHeight}px`
    $jazzMosaicBackgroundImage.style.height =`${offsetHeight}px`
})