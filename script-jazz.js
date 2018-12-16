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
const jazzOriginTexts = ['Le genre se développe en tant que mouvement culturel et artistique aux États-Unis, à New York, dans le South Bronx au début des années 1970.', '1974 : Les premiers raps sont réalisés par des maîtres de cérémonies faisant des rimes simples pour mettre de l’ambiance en soirée. Mais les premiers raps sont italiens contrairement à ce que l’on peut croire.', '1979 : Sortie de « Rapper’s Delight » du groupe Sugarhill Gag, devient le premier tube rap dans le monde.', '1980 : Début de la popularité, explosion du rap dans le monde entier. C’est à cette période que celui-ci vas arriver en europe notamment en France et en Angleterre.', '1990 : La sortie de Fear of a Black Planet par Public Enemy joue un rôle clé dans la popularisation du hip-hop auprès du grand public. C’est l’année où le rap a explosé.']

//CHANGE TEXT ACCORDING TO CLICKED BUTTON ON TIMELINE
$jazzOrigin.addEventListener('click', () =>
{
    for (let i = 0; i < $pulseButtonsJazz.length; i++)
    {
        $pulseButtonsJazz[i].addEventListener('click', () =>
        {
            selectedButtonJazz = i
            $pulseButtonsJazz[i].style.backgroundColor = '#7762E8'
            $pulseButtonsJazz[i].classList.add('pulse-button-animation-jazz')
            $pulseButtonTextJazz.innerHTML = jazzOriginTexts[i]
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

