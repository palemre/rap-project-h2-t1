const $timelineLineFillerJazz=document.querySelector('.timeline-line-filler.jazz-filler')
const $pulseButtonsJazz=$jazzOrigin.querySelectorAll('.js-pulse-button-jazz')
const $pulseButtonsJazzInner=$jazzOrigin.querySelectorAll('.js-timeline-button-jazz')
const $pulseButtonTextJazz=$jazzOrigin.querySelector('.js-pulse-button-text-jazz')
const jazzOriginTexts=[`<span class="bigger-text">1938</span> : Benny Goodman a réalisé selon Bruce Eder le <span class="important-text-jazz">concert de jazz le plus important de l’histoire</span> : cette fête est devenue le «coming out» du jazz dans le monde de la musique «respectable».`,`<span class="bigger-text">1939</span> : <span class="important-text-jazz">Body and Soul</span> par Coleman Hawkins, est un enregistrement très populaire et une source d’inspiration pour de nombreux musiciens. Ce morceau devient <span class="important-text-jazz">fondateur du genre be-bop</span>.`,`<span class="bigger-text">1957</span> : <span class="important-text-jazz">John Coltrane</span> est considéré comme le saxophoniste le plus révolutionnaire et influant de l’histoire du Jazz. Son album <span class="important-text-jazz">Blue Train</span> va engendrer la popularité du <span class="important-text-jazz">hard bop</span>.`,`<span class="bigger-text">1959</span> :  <span class="important-text-jazz">Kind of Blue</span> de Miles Davis est l’<span class="important-text-jazz">album de jazz le plus vendu de tous les temps</span>. Il est considéré pour nombreux comme l’un des albums les plus influents jamais enregistrés dans l’histoire du jazz.`,`<span class="bigger-text">1969</span> : Franck Zappa a sorti son album <span class="important-text-jazz">Hot Rats</span> qui deviendra pionnier du genre <span class="important-text-jazz">Jazz-Rock</span>. L’album est cité dans l’ouvrage de référence de Robert Dimery «les 1001 albums qu’il faut avoir écouté dans sa vie».`]
$jazzOrigin.addEventListener('click',()=>{for(let i=0;i<$pulseButtonsJazz.length;i++)
{$pulseButtonsJazz[i].addEventListener('click',()=>{$pulseButtonsJazzInner[i].style.backgroundColor='#FFF'
$pulseButtonTextJazz.innerHTML=jazzOriginTexts[i]
if(i==0)
{$timelineLineFillerJazz.style.transform=`scaleX(1)`
$pulseButtonsJazzInner[i].style.backgroundColor='#BF3333'
$pulseButtonsJazzInner[i+1].style.backgroundColor='#F0F0F0'
$pulseButtonsJazzInner[i+2].style.backgroundColor='#F0F0F0'
$pulseButtonsJazzInner[i+3].style.backgroundColor='#F0F0F0'
$pulseButtonsJazzInner[i+4].style.backgroundColor='#F0F0F0'
$jazzOrigin.style.backgroundImage=`url('./images/jazz/jazz-timeline/benny.png')`}
else if(i==1)
{$timelineLineFillerJazz.style.transform=`scaleX(3)`
$pulseButtonsJazzInner[i-1].style.backgroundColor='#BF3333'
$pulseButtonsJazzInner[i].style.backgroundColor='#BF3333'
$pulseButtonsJazzInner[i+1].style.backgroundColor='#F0F0F0'
$pulseButtonsJazzInner[i+2].style.backgroundColor='#F0F0F0'
$pulseButtonsJazzInner[i+3].style.backgroundColor='#F0F0F0'
$jazzOrigin.style.backgroundImage=`url('./images/jazz/jazz-timeline/coleman-hawkins.png')`}
else if(i==2)
{$timelineLineFillerJazz.style.transform=`scaleX(5)`
$pulseButtonsJazzInner[i-2].style.backgroundColor='#BF3333'
$pulseButtonsJazzInner[i-1].style.backgroundColor='#BF3333'
$pulseButtonsJazzInner[i].style.backgroundColor='#BF3333'
$pulseButtonsJazzInner[i+1].style.backgroundColor='#F0F0F0'
$pulseButtonsJazzInner[i+2].style.backgroundColor='#F0F0F0'
$jazzOrigin.style.backgroundImage=`url('./images/jazz/jazz-timeline/john-coltrane.png')`}
else if(i==3)
{$timelineLineFillerJazz.style.transform=`scaleX(7)`
$pulseButtonsJazzInner[i-3].style.backgroundColor='#BF3333'
$pulseButtonsJazzInner[i-2].style.backgroundColor='#BF3333'
$pulseButtonsJazzInner[i-1].style.backgroundColor='#BF3333'
$pulseButtonsJazzInner[i].style.backgroundColor='#BF3333'
$pulseButtonsJazzInner[i+1].style.backgroundColor='#F0F0F0'
$jazzOrigin.style.backgroundImage=`url('./images/jazz/jazz-timeline/kindofblue-session.png')`}
else if(i==4)
{$timelineLineFillerJazz.style.transform=`scaleX(9)`
$pulseButtonsJazzInner[i-4].style.backgroundColor='#BF3333'
$pulseButtonsJazzInner[i-3].style.backgroundColor='#BF3333'
$pulseButtonsJazzInner[i-2].style.backgroundColor='#BF3333'
$pulseButtonsJazzInner[i-1].style.backgroundColor='#BF3333'
$pulseButtonsJazzInner[i].style.backgroundColor='#BF3333'
$jazzOrigin.style.backgroundImage=`url('./images/jazz/jazz-timeline/franck-zappa.png')`}})}})
const $jazzTypes=$wrapperRapHistory.querySelector('.js-jazz-types')
$jazzTypes.style.height=`${offsetHeight}px`
const $artistSwingBackground=$jazzTypes.querySelector('.js-artist-swing')
const $artistBebopBackground=$jazzTypes.querySelector('.js-artist-bebop')
const $artistHardBopBackground=$jazzTypes.querySelector('.js-artist-hard-bop')
const $artistJazzRockBackground=$jazzTypes.querySelector('.js-artist-jazz-rock')
const $artistSwingText=$jazzTypes.querySelector('.js-artist-swing-text')
const $artistBebopText=$jazzTypes.querySelector('.js-artist-bebop-text')
const $artistHardBopText=$jazzTypes.querySelector('.js-artist-hard-bop-text')
const $artistJazzRockText=$jazzTypes.querySelector('.js-artist-jazz-rock-text')
$artistSwingBackground.addEventListener('mouseover',()=>{$artistSwingBackground.classList.remove('artist-background-animation-mouseout')
$artistSwingBackground.classList.add('artist-background-animation-mouseover')
$artistSwingText.classList.remove('artist-text-animation-mouseout')
$artistSwingText.classList.add('artist-text-animation-mouseover')})
$artistSwingBackground.addEventListener('mouseout',()=>{$artistSwingBackground.classList.remove('artist-background-animation-mouseover')
$artistSwingBackground.classList.add('artist-background-animation-mouseout')
$artistSwingText.classList.remove('artist-text-animation-mouseover')
$artistSwingText.classList.add('artist-text-animation-mouseout')})
$artistBebopBackground.addEventListener('mouseover',()=>{$artistBebopBackground.classList.remove('artist-background-animation-mouseout')
$artistBebopBackground.classList.add('artist-background-animation-mouseover')
$artistBebopText.classList.remove('artist-text-animation-mouseout')
$artistBebopText.classList.add('artist-text-animation-mouseover')})
$artistBebopBackground.addEventListener('mouseout',()=>{$artistBebopBackground.classList.remove('artist-background-animation-mouseover')
$artistBebopBackground.classList.add('artist-background-animation-mouseout')
$artistBebopText.classList.remove('artist-text-animation-mouseover')
$artistBebopText.classList.add('artist-text-animation-mouseout')})
$artistHardBopBackground.addEventListener('mouseover',()=>{$artistHardBopBackground.classList.remove('artist-background-animation-mouseout')
$artistHardBopBackground.classList.add('artist-background-animation-mouseover')
$artistHardBopText.classList.remove('artist-text-animation-mouseout')
$artistHardBopText.classList.add('artist-text-animation-mouseover')})
$artistHardBopBackground.addEventListener('mouseout',()=>{$artistHardBopBackground.classList.remove('artist-background-animation-mouseover')
$artistHardBopBackground.classList.add('artist-background-animation-mouseout')
$artistHardBopText.classList.remove('artist-text-animation-mouseover')
$artistHardBopText.classList.add('artist-text-animation-mouseout')})
$artistJazzRockBackground.addEventListener('mouseover',()=>{$artistJazzRockBackground.classList.remove('artist-background-animation-mouseout')
$artistJazzRockBackground.classList.add('artist-background-animation-mouseover')
$artistJazzRockText.classList.remove('artist-text-animation-mouseout')
$artistJazzRockText.classList.add('artist-text-animation-mouseover')})
$artistJazzRockBackground.addEventListener('mouseout',()=>{$artistJazzRockBackground.classList.remove('artist-background-animation-mouseover')
$artistJazzRockBackground.classList.add('artist-background-animation-mouseout')
$artistJazzRockText.classList.remove('artist-text-animation-mouseover')
$artistJazzRockText.classList.add('artist-text-animation-mouseout')})
const $jazzMessage=$wrapperRapHistory.querySelector('.js-jazz-message')
$jazzMessage.style.height=`${offsetHeight}px`
const $jazzImpacts=$wrapperRapHistory.querySelector('.js-jazz-impacts')
$jazzImpacts.style.height=`${offsetHeight}px`