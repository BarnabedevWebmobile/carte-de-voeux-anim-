function start(){
    let step1 = document.getElementById('step1')
    let title1 = document.getElementById('title1')
    let poeme1 = document.getElementById('poeme1')
    let autor1 = document.getElementById('autor1')
    console.log(step1)

    step1.style.opacity = 1;

    title1.style.opacity = 1;
    
    poeme1.style.opacity = 1;
    
    autor1.style.opacity = 1;

    setTimeout(()=>{
        title1.style.top = 0;
        poeme1.style.bottom = 0;
        autor1.style.right = 0;
    },"2000");
}