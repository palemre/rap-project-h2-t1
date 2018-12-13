/*******************
 * I) DISC LOADER : DELETE AFTER ANIMATION FINISHED
 * II) HEADPHONE WARNING : DISPLAY AFTER DISC & DELETE AFTER ANIMATION FINISHED
 * III) RAP HISTORY : DISPLAY MAIN RAP WRAPPER
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

        //RAP DISPLAY
        wrapperRapHistory.style.display = `inline`
        verticalDotsNav.style.display = `inline`
        hamburgerMenuLines.style.display = `inline`

        wrapperRapHistory.classList.add('display-wrapper-rap-history')
        verticalDotsNav.classList.add('display-wrapper-rap-history')
        hamburgerMenuLines.classList.add('display-wrapper-rap-history')

        const rapTypes = document.querySelector('.rap-types')
        const offsetHeight = document.body.offsetHeight;
        rapTypes.style.marginTop =`${offsetHeight}px`;

        window.clearInterval(deleteHeadphoneWarning)
    }, 1000)
})