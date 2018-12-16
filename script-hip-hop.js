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
const hiphopOriginTexts = ['1970 : Naissance du hip-hop', '1980 : Début de l’âge d’or du hip-hop, elle se définit par sa diversité, sa qualité, son innovation, et l’importance de ses contenus', '1982 : Sortie de “the message” de Grandmaster Flash qui engendre une révolution', '1984 : Création du hip-hop new school. Le new school a des rythmes influencé par le rock music38 et est noté pour son rap socio-politiques violents.', '1990 : La sortie de Fear of a Black Planet par Public Enemy joue un rôle clé dans la popularisation du hip-hop auprès du grand public. C’est l’année où le rap a explosé.']

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
            // if (i == 0)
            // { $rapOrigin.style.backgroundImage = `url('images/rap/rap-timeline/grandmaster-flash.jpg')` }
            // else if (i == 1)
            // { $rapOrigin.style.backgroundImage = `url('images/rap/rap-timeline/beastie-boys.jpg')` }
            // else if (i == 2)
            // { $rapOrigin.style.backgroundImage = `url('images/rap/rap-timeline/2pac.jpg')` }
            // else if (i == 3)
            // { $rapOrigin.style.backgroundImage = `url('images/rap/rap-timeline/notorious-big.png')` }
            // else if (i == 4)
            // { $rapOrigin.style.backgroundImage = `url('images/rap/rap-timeline/eminem.jpg')` }
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
const $jazzContent = $wrapperRapHistory.querySelector('.js-jazz-content')
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