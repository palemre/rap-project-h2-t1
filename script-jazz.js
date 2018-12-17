/*******************
 * I) JAZZ'S ORIGIN
 * II) JAZZ'S TYPES
 ******************/
/*******************
******************** JAZZ'S ORIGIN TIMELINE
*******************/
//JAZZ'S ORIGIN TIMELINE PULSE BUTTONS
const $pulseButtonsJazz = $jazzOrigin.querySelectorAll('.js-pulse-button-jazz')
const $pulseButtonTextJazz = $jazzOrigin.querySelector('.js-pulse-button-text-jazz')
let selectedButtonJazz = 0
const jazzOriginTexts = ['1938 : Benny Goodman a réalisé selon Bruce Eder le concert de jazz le plus important de l’histoire : cette fête est devenue le «coming out» du jazz dans le monde de la musique «respectable».', '1939 : Body and Soul par Coleman Hawkins, est un enregistrement très populaire et une source d’inspiration pour de nombreux musiciens. Ce morceau devient fondateur du genre be-bop', '1957 : John Coltrane est considéré comme le saxophoniste le plus révolutionnaire et influant de l’histoire du Jazz. Son album Blue Train va engendrer la popularité du hard bop.', '1959 :  Kind of Blue de Miles Davis est l’album de jazz le plus vendu de tous les temps. Il est considéré pour nombreux comme l’un des albums les plus influents jamais enregistrés dans l’histoire du jazz.', '1969 : Franck Zappa a sorti son album Hot Rats qui deviendra pionnier du genre Jazz-Rock. L’album est cité dans l’ouvrage de référence de Robert Dimery «les 1001 albums qu’il faut avoir écoutés dans sa vie».']

//CHANGE TEXT ACCORDING TO CLICKED BUTTON ON TIMELINE
$jazzOrigin.addEventListener('click', () =>
{
    for (let i = 0; i < $pulseButtonsJazz.length; i++)
    {
        $pulseButtonsJazz[i].addEventListener('click', () =>
        {
            selectedButtonJazz = i
            $pulseButtonsJazz[i].style.backgroundColor = '#BF3333'
            $pulseButtonsJazz[i].classList.add('pulse-button-animation-jazz')
            $pulseButtonTextJazz.innerHTML = jazzOriginTexts[i]
            //CHANGE BACKGROUND IMAGE ACCORDING TO SELECTED POINT
            if (i == 0)
            { $jazzOrigin.style.backgroundImage = `url('images/jazz/jazz-timeline/benny.jpg')` }
            else if (i == 1)
            { $jazzOrigin.style.backgroundImage = `url('images/jazz/jazz-timeline/coleman-hawkins.jpg')` }
            else if (i == 2)
            { $jazzOrigin.style.backgroundImage = `url('images/jazz/jazz-timeline/john-coltrane.jpg')` }
            else if (i == 3)
            { $jazzOrigin.style.backgroundImage = `url('images/jazz/jazz-timeline/kindofblue-session.png')` }
            else if (i == 4)
            { $jazzOrigin.style.backgroundImage = `url('images/jazz/jazz-timeline/franck-zappa.jpg')` }
        })
        if (i != selectedButtonJazz)
        {
            $pulseButtonsJazz[i].style.backgroundColor = `#FFF`
            $pulseButtonsJazz[i].classList.remove('pulse-button-animation-jazz')
        }
    }
})

// /*******************
// ******************** JAZZ'S TYPES
// *******************/
// //JAZZ TYPES DISPLAY
// const $jazzTypes = $wrapperRapHistory.querySelector('.js-jazz-types')
// $jazzTypes.style.height =`${offsetHeight}px`

// //SELECT EACH ARTIST BACKGROUND IMAGE
// const $artistMiaBackground = $hipHopTypes.querySelector('.js-artist-mia')
// const $artistMcHammerBackground = $hipHopTypes.querySelector('.js-artist-mc-hammer')
// const $artistDjShadowBackground = $hipHopTypes.querySelector('.js-artist-dj-shadow')
// const $artistDjKoolHercBackground = $hipHopTypes.querySelector('.js-artist-dj-kool-herc')

// //SELECT EACH ARTIST DESCRIPTION TEXT
// const $artistMiaText = $hipHopTypes.querySelector('.js-artist-mia-text')
// const $artistMcHammerText = $hipHopTypes.querySelector('.js-artist-mc-hammer-text')
// const $artistDjShadowText = $hipHopTypes.querySelector('.js-artist-dj-shadow-text')
// const $artistDjKoolHerc = $hipHopTypes.querySelector('.js-artist-dj-kool-herc-text')

// //SET MOUSEOVER & MOUSEOUT LISTENER FOR DISPLAYING DESCRIPTION TEXT
// $artistMiaBackground.addEventListener('mouseover', () =>
// {
//     $artistMiaBackground.classList.remove('artist-background-animation-mouseout')
//     $artistMiaBackground.classList.add('artist-background-animation-mouseover')
//     $artistMiaText.classList.remove('artist-text-animation-mouseout')
//     $artistMiaText.classList.add('artist-text-animation-mouseover')
// })
// $artistMiaBackground.addEventListener('mouseout', () =>
// {
//     $artistMiaBackground.classList.remove('artist-background-animation-mouseover')
//     $artistMiaBackground.classList.add('artist-background-animation-mouseout')
//     $artistMiaText.classList.remove('artist-text-animation-mouseover')
//     $artistMiaText.classList.add('artist-text-animation-mouseout')
// })
// $artistMcHammerBackground.addEventListener('mouseover', () =>
// {
//     $artistMcHammerBackground.classList.remove('artist-background-animation-mouseout')
//     $artistMcHammerBackground.classList.add('artist-background-animation-mouseover')
//     $artistMcHammerText.classList.remove('artist-text-animation-mouseout')
//     $artistMcHammerText.classList.add('artist-text-animation-mouseover')
// })
// $artistMcHammerBackground.addEventListener('mouseout', () =>
// {
//     $artistMcHammerBackground.classList.remove('artist-background-animation-mouseover')
//     $artistMcHammerBackground.classList.add('artist-background-animation-mouseout')
//     $artistMcHammerText.classList.remove('artist-text-animation-mouseover')
//     $artistMcHammerText.classList.add('artist-text-animation-mouseout')
// })
// $artistDjShadowBackground.addEventListener('mouseover', () =>
// {
//     $artistDjShadowBackground.classList.remove('artist-background-animation-mouseout')
//     $artistDjShadowBackground.classList.add('artist-background-animation-mouseover')
//     $artistDjShadowText.classList.remove('artist-text-animation-mouseout')
//     $artistDjShadowText.classList.add('artist-text-animation-mouseover')
// })
// $artistDjShadowBackground.addEventListener('mouseout', () =>
// {
//     $artistDjShadowBackground.classList.remove('artist-background-animation-mouseover')
//     $artistDjShadowBackground.classList.add('artist-background-animation-mouseout')
//     $artistDjShadowText.classList.remove('artist-text-animation-mouseover')
//     $artistDjShadowText.classList.add('artist-text-animation-mouseout')
// })
// $artistDjKoolHercBackground.addEventListener('mouseover', () =>
// {
//     $artistDjKoolHercBackground.classList.remove('artist-background-animation-mouseout')
//     $artistDjKoolHercBackground.classList.add('artist-background-animation-mouseover')
//     $artistDjKoolHerc.classList.remove('artist-text-animation-mouseout')
//     $artistDjKoolHerc.classList.add('artist-text-animation-mouseover')
// })
// $artistDjKoolHercBackground.addEventListener('mouseout', () =>
// {
//     $artistDjKoolHercBackground.classList.remove('artist-background-animation-mouseover')
//     $artistDjKoolHercBackground.classList.add('artist-background-animation-mouseout')
//     $artistDjKoolHerc.classList.remove('artist-text-animation-mouseover')
//     $artistDjKoolHerc.classList.add('artist-text-animation-mouseout')
// })

