/*******************
 * I) DISC LOADER : DELETE AFTER ANIMATION FINISHED
 * II) HEADPHONE WARNING : DISPLAY AFTER DISC & DELETE AFTER ANIMATION FINISHED
 * III) RAP HISTORY : DISPLAY WHEN NEEDED
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
******************** HEADPHONE WARNING
*******************/
const headphone = document.querySelector('.headphone')
const headphoneWarning = document.querySelector('.headphone-warning-text')
const startButton = document.querySelector('.start-button')
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
        headphone.remove()
        headphoneWarning.remove()
        startButton.remove()
        window.clearInterval(deleteHeadphoneWarning)
    }, 1000)

})

/*******************
******************** START HISTORY OF RAP
*******************/
