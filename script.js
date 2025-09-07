const nav=document.querySelector('nav');      //变量nav存导航栏

window.addEventListener(
    'scroll',()=>{                      //页面滚动，执行以下代码
        if(window.scrollY>50){
            nav.classList.add('scrolled');
        }else{
            nav.classList.remove('scrolled');
        }
    }
);

const faders=document.querySelectorAll('.fade-in');
const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

faders.forEach(fader=>{
    observer.observe(fader);
});

// Smooth scroll for "Learn More" button to #About
const learnMoreBtn=document.querySelector('#hero button');
if(learnMoreBtn){
    learnMoreBtn.addEventListener('click',()=>{
        const about=document.querySelector('#About');
        if(about){
            about.scrollIntoView({behavior:'smooth'});
        }
    });
}
