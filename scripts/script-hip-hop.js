const $timelineLineFillerHipHop=document.querySelector('.timeline-line-filler.hip-hop-filler')
const $pulseButtonsHipHop=$hiphopOrigin.querySelectorAll('.js-pulse-button-hip-hop')
const $pulseButtonsHipHopInner=$hiphopOrigin.querySelectorAll('.js-timeline-button-hip-hop')
const $pulseButtonTextHipHop=$hiphopOrigin.querySelector('.js-pulse-button-text-hip-hop')
const hiphopOriginTexts=[`<span class="bigger-text">1984</span> : Run DMC par DMC et REV RUN sont l’un des <span class="important-text-hip-hop">premiers groupes</span> à avoir sorti un album sur le hip-hop devenant un incontournable du genre.`,`<span class="bigger-text">1987</span> : Paid in full - par Eric B & Rakim, la sortie de cet album a marqué l’age d’or du hip-hop et figure dans la liste des <span class="important-text-hip-hop">‘500 plus grands albums</span> de tous les temps’ par le magazine Rolling Stones.`,`<span class="bigger-text">1988</span> : Public enemy - It takes A nation Of Millions to hold Us Back. Le deuxième album de Public Enemy présente un vrai <span class="important-text-hip-hop">discours révolutionnaire</span> sur l’état de la nation.`,`<span class="bigger-text">1996</span> : La sortie de The Score de The Fugees a <span class="important-text-hip-hop">transformé le hip hop en pop</span>, et a marqué l’histoire par leur sublimes reprises ainsi que leurs chansons aux paroles ‘conscientes’ et transmettant différents messages`,`<span class="bigger-text">2004</span> : The College Drop out par Kanye West, c’est un album ayant reçu <span class="important-text-hip-hop">10 nominations aux Grammy Awards</span> en 2005. Cet album a marqué l’histoire du rap par son analyse encore pertinente de l’Occident.`]
$hiphopOrigin.addEventListener('click',()=>{for(let i=0;i<$pulseButtonsHipHop.length;i++)
{$pulseButtonsHipHop[i].addEventListener('click',()=>{$pulseButtonsHipHopInner[i].style.backgroundColor='#FFF'
$pulseButtonTextHipHop.innerHTML=hiphopOriginTexts[i]
if(i==0)
{$timelineLineFillerHipHop.style.transform=`scaleX(1)`
$pulseButtonsHipHopInner[i].style.backgroundColor='#7762E8'
$pulseButtonsHipHopInner[i+1].style.backgroundColor='#F0F0F0'
$pulseButtonsHipHopInner[i+2].style.backgroundColor='#F0F0F0'
$pulseButtonsHipHopInner[i+3].style.backgroundColor='#F0F0F0'
$pulseButtonsHipHopInner[i+4].style.backgroundColor='#F0F0F0'
$hiphopOrigin.style.backgroundImage=`url('./images/hip-hop/hip-hop-timeline/run-dmc.png')`}
else if(i==1)
{$timelineLineFillerHipHop.style.transform=`scaleX(3)`
$pulseButtonsHipHopInner[i-1].style.backgroundColor='#7762E8'
$pulseButtonsHipHopInner[i].style.backgroundColor='#7762E8'
$pulseButtonsHipHopInner[i+1].style.backgroundColor='#F0F0F0'
$pulseButtonsHipHopInner[i+2].style.backgroundColor='#F0F0F0'
$pulseButtonsHipHopInner[i+3].style.backgroundColor='#F0F0F0'
$hiphopOrigin.style.backgroundImage=`url('./images/hip-hop/hip-hop-timeline/paid-in-full.png')`}
else if(i==2)
{$timelineLineFillerHipHop.style.transform=`scaleX(5)`
$pulseButtonsHipHopInner[i-2].style.backgroundColor='#7762E8'
$pulseButtonsHipHopInner[i-1].style.backgroundColor='#7762E8'
$pulseButtonsHipHopInner[i].style.backgroundColor='#7762E8'
$pulseButtonsHipHopInner[i+1].style.backgroundColor='#F0F0F0'
$pulseButtonsHipHopInner[i+2].style.backgroundColor='#F0F0F0'
$hiphopOrigin.style.backgroundImage=`url('./images/hip-hop/hip-hop-timeline/public-enemy.png')`}
else if(i==3)
{$timelineLineFillerHipHop.style.transform=`scaleX(7)`
$pulseButtonsHipHopInner[i-3].style.backgroundColor='#7762E8'
$pulseButtonsHipHopInner[i-2].style.backgroundColor='#7762E8'
$pulseButtonsHipHopInner[i-1].style.backgroundColor='#7762E8'
$pulseButtonsHipHopInner[i].style.backgroundColor='#7762E8'
$pulseButtonsHipHopInner[i+1].style.backgroundColor='#F0F0F0'
$hiphopOrigin.style.backgroundImage=`url('./images/hip-hop/hip-hop-timeline/the-fugees.png')`}
else if(i==4)
{$timelineLineFillerHipHop.style.transform=`scaleX(9)`
$pulseButtonsHipHopInner[i-4].style.backgroundColor='#7762E8'
$pulseButtonsHipHopInner[i-3].style.backgroundColor='#7762E8'
$pulseButtonsHipHopInner[i-2].style.backgroundColor='#7762E8'
$pulseButtonsHipHopInner[i-1].style.backgroundColor='#7762E8'
$pulseButtonsHipHopInner[i].style.backgroundColor='#7762E8'
$hiphopOrigin.style.backgroundImage=`url('./images/hip-hop/hip-hop-timeline/college-droput-hero.png')`}})}})
const $hipHopTypes=$wrapperRapHistory.querySelector('.js-hip-hop-types')
$hipHopTypes.style.height=`${offsetHeight}px`
const $artistMiaBackground=$hipHopTypes.querySelector('.js-artist-mia')
const $artistMcHammerBackground=$hipHopTypes.querySelector('.js-artist-mc-hammer')
const $artistDjShadowBackground=$hipHopTypes.querySelector('.js-artist-dj-shadow')
const $artistDjKoolHercBackground=$hipHopTypes.querySelector('.js-artist-dj-kool-herc')
const $artistMiaText=$hipHopTypes.querySelector('.js-artist-mia-text')
const $artistMcHammerText=$hipHopTypes.querySelector('.js-artist-mc-hammer-text')
const $artistDjShadowText=$hipHopTypes.querySelector('.js-artist-dj-shadow-text')
const $artistDjKoolHerc=$hipHopTypes.querySelector('.js-artist-dj-kool-herc-text')
$artistMiaBackground.addEventListener('mouseover',()=>{$artistMiaBackground.classList.remove('artist-background-animation-mouseout')
$artistMiaBackground.classList.add('artist-background-animation-mouseover')
$artistMiaText.classList.remove('artist-text-animation-mouseout')
$artistMiaText.classList.add('artist-text-animation-mouseover')})
$artistMiaBackground.addEventListener('mouseout',()=>{$artistMiaBackground.classList.remove('artist-background-animation-mouseover')
$artistMiaBackground.classList.add('artist-background-animation-mouseout')
$artistMiaText.classList.remove('artist-text-animation-mouseover')
$artistMiaText.classList.add('artist-text-animation-mouseout')})
$artistMcHammerBackground.addEventListener('mouseover',()=>{$artistMcHammerBackground.classList.remove('artist-background-animation-mouseout')
$artistMcHammerBackground.classList.add('artist-background-animation-mouseover')
$artistMcHammerText.classList.remove('artist-text-animation-mouseout')
$artistMcHammerText.classList.add('artist-text-animation-mouseover')})
$artistMcHammerBackground.addEventListener('mouseout',()=>{$artistMcHammerBackground.classList.remove('artist-background-animation-mouseover')
$artistMcHammerBackground.classList.add('artist-background-animation-mouseout')
$artistMcHammerText.classList.remove('artist-text-animation-mouseover')
$artistMcHammerText.classList.add('artist-text-animation-mouseout')})
$artistDjShadowBackground.addEventListener('mouseover',()=>{$artistDjShadowBackground.classList.remove('artist-background-animation-mouseout')
$artistDjShadowBackground.classList.add('artist-background-animation-mouseover')
$artistDjShadowText.classList.remove('artist-text-animation-mouseout')
$artistDjShadowText.classList.add('artist-text-animation-mouseover')})
$artistDjShadowBackground.addEventListener('mouseout',()=>{$artistDjShadowBackground.classList.remove('artist-background-animation-mouseover')
$artistDjShadowBackground.classList.add('artist-background-animation-mouseout')
$artistDjShadowText.classList.remove('artist-text-animation-mouseover')
$artistDjShadowText.classList.add('artist-text-animation-mouseout')})
$artistDjKoolHercBackground.addEventListener('mouseover',()=>{$artistDjKoolHercBackground.classList.remove('artist-background-animation-mouseout')
$artistDjKoolHercBackground.classList.add('artist-background-animation-mouseover')
$artistDjKoolHerc.classList.remove('artist-text-animation-mouseout')
$artistDjKoolHerc.classList.add('artist-text-animation-mouseover')})
$artistDjKoolHercBackground.addEventListener('mouseout',()=>{$artistDjKoolHercBackground.classList.remove('artist-background-animation-mouseover')
$artistDjKoolHercBackground.classList.add('artist-background-animation-mouseout')
$artistDjKoolHerc.classList.remove('artist-text-animation-mouseover')
$artistDjKoolHerc.classList.add('artist-text-animation-mouseout')})
const $hipHopMessage=$wrapperRapHistory.querySelector('.js-hip-hop-message')
$hipHopMessage.style.height=`${offsetHeight}px`
const $hipHopImpacts=$wrapperRapHistory.querySelector('.js-hip-hop-impacts')
$hipHopImpacts.style.height=`${offsetHeight}px`
const $jazzOrigin=$wrapperRapHistory.querySelector('.js-jazz-origin')
const $tunnelToJazz=$hipHopImpacts.querySelector('.js-tunnel-to-jazz')
const $hipHopMainContainerToDisplay=$wrapperRapHistory.querySelector('.hip-hop-main-container-to-display')
let $jazzContent=$wrapperRapHistory.querySelector('.js-jazz-content')
const $jazzMosaicBackgroundImage=$wrapperRapHistory.querySelector('.js-jazz-history')
$tunnelToJazz.addEventListener('click',()=>{audioTransition.play();if($backgroundMusicController.classList.contains('playing'))
{audioRap.pause()
audioHipHop.pause()
audioJazz.play()}
document.body.style.overflow=`hidden`
$hipHopMainContainerToDisplay.classList.add('tunnel-animation')
$hipHopMainContainerToDisplay.style.transform=`translateZ(802px)`
$jazzContent.style.transform=`translateZ(0)`
const tunnelAnimation=setInterval(()=>{$hipHopMainContainerToDisplay.style.display=`none`
$jazzContent.style.display=`inline`
document.body.style.overflow=`visible`
window.clearInterval(tunnelAnimation)
window.scroll(0,0)},1500)
$hipHopMainContainerToDisplay.classList.add('tunnel-animation')
$jazzContent.classList.add('tunnel-animation-in')
$jazzOrigin.style.height=`${offsetHeight}px`
$jazzMosaicBackgroundImage.style.height=`${offsetHeight}px`})