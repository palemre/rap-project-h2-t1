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

/*******************
******************** JAZZ'S TYPES
*******************/
//JAZZ TYPES DISPLAY
const $jazzTypes = $wrapperRapHistory.querySelector('.js-jazz-types')
$jazzTypes.style.height =`${offsetHeight}px`

//SELECT EACH ARTIST BACKGROUND IMAGE
const $artistSwingBackground = $jazzTypes.querySelector('.js-artist-swing')
const $artistBebopBackground = $jazzTypes.querySelector('.js-artist-bebop')
const $artistHardBopBackground = $jazzTypes.querySelector('.js-artist-hard-bop')
const $artistJazzRockBackground = $jazzTypes.querySelector('.js-artist-jazz-rock')

//SELECT EACH ARTIST DESCRIPTION TEXT
const $artistSwingText = $jazzTypes.querySelector('.js-artist-swing-text')
const $artistBebopText = $jazzTypes.querySelector('.js-artist-bebop-text')
const $artistHardBopText = $jazzTypes.querySelector('.js-artist-hard-bop-text')
const $artistJazzRockText = $jazzTypes.querySelector('.js-artist-jazz-rock-text')

//SET MOUSEOVER & MOUSEOUT LISTENER FOR DISPLAYING DESCRIPTION TEXT
$artistSwingBackground.addEventListener('mouseover', () =>
{
    $artistSwingBackground.classList.remove('artist-background-animation-mouseout')
    $artistSwingBackground.classList.add('artist-background-animation-mouseover')
    $artistSwingText.classList.remove('artist-text-animation-mouseout')
    $artistSwingText.classList.add('artist-text-animation-mouseover')
})
$artistSwingBackground.addEventListener('mouseout', () =>
{
    $artistSwingBackground.classList.remove('artist-background-animation-mouseover')
    $artistSwingBackground.classList.add('artist-background-animation-mouseout')
    $artistSwingText.classList.remove('artist-text-animation-mouseover')
    $artistSwingText.classList.add('artist-text-animation-mouseout')
})
$artistBebopBackground.addEventListener('mouseover', () =>
{
    $artistBebopBackground.classList.remove('artist-background-animation-mouseout')
    $artistBebopBackground.classList.add('artist-background-animation-mouseover')
    $artistBebopText.classList.remove('artist-text-animation-mouseout')
    $artistBebopText.classList.add('artist-text-animation-mouseover')
})
$artistBebopBackground.addEventListener('mouseout', () =>
{
    $artistBebopBackground.classList.remove('artist-background-animation-mouseover')
    $artistBebopBackground.classList.add('artist-background-animation-mouseout')
    $artistBebopText.classList.remove('artist-text-animation-mouseover')
    $artistBebopText.classList.add('artist-text-animation-mouseout')
})
$artistHardBopBackground.addEventListener('mouseover', () =>
{
    $artistHardBopBackground.classList.remove('artist-background-animation-mouseout')
    $artistHardBopBackground.classList.add('artist-background-animation-mouseover')
    $artistHardBopText.classList.remove('artist-text-animation-mouseout')
    $artistHardBopText.classList.add('artist-text-animation-mouseover')
})
$artistHardBopBackground.addEventListener('mouseout', () =>
{
    $artistHardBopBackground.classList.remove('artist-background-animation-mouseover')
    $artistHardBopBackground.classList.add('artist-background-animation-mouseout')
    $artistHardBopText.classList.remove('artist-text-animation-mouseover')
    $artistHardBopText.classList.add('artist-text-animation-mouseout')
})
$artistJazzRockBackground.addEventListener('mouseover', () =>
{
    $artistJazzRockBackground.classList.remove('artist-background-animation-mouseout')
    $artistJazzRockBackground.classList.add('artist-background-animation-mouseover')
    $artistJazzRockText.classList.remove('artist-text-animation-mouseout')
    $artistJazzRockText.classList.add('artist-text-animation-mouseover')
})
$artistJazzRockBackground.addEventListener('mouseout', () =>
{
    $artistJazzRockBackground.classList.remove('artist-background-animation-mouseover')
    $artistJazzRockBackground.classList.add('artist-background-animation-mouseout')
    $artistJazzRockText.classList.remove('artist-text-animation-mouseover')
    $artistJazzRockText.classList.add('artist-text-animation-mouseout')
})

/*******************
******************** JAZZ'S MESSAGE
*******************/
const $jazzMessage = $wrapperRapHistory.querySelector('.js-jazz-message')
$jazzMessage.style.height =`${offsetHeight}px`

