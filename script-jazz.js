/*******************
 * I) JAZZ'S ORIGIN
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
