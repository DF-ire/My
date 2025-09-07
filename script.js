const nav=document.querySelector('nav');      //变量nav存导航栏

window.addEventListener(
    'scroll',()=>{                      //页面滚动，执行以下代码
        if(window.scrollY>50){
            nav.classList.add('scroll');
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
