// Colour choice remains independent of shuffled dashboard layouts.
const themeLabel=document.createElement('label');
themeLabel.className='theme-selector';
themeLabel.innerHTML='Theme<select id="theme-select" aria-label="Colour theme"><option value="sage">Fresh Sage</option><option value="linen">Warm Linen</option><option value="midnight">Midnight</option></select>';
document.querySelector('.top-controls').prepend(themeLabel);
const applyBeforeThemeControl=applyPrefs;
applyPrefs=function(){applyBeforeThemeControl();document.querySelector('#theme-select').value=prefs.theme;document.documentElement.style.colorScheme=prefs.theme==='midnight'?'dark':'light';};
document.querySelector('#theme-select').onchange=e=>{prefs.theme=e.target.value;savePrefs();applyPrefs();};
window.addEventListener('pageshow',()=>applyPrefs());
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')applyPrefs();});
applyPrefs();
