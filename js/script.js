const intervalexit = setInterval(exit, 3000)

function showstep2(){
    let step1 = document.getElementById('step1')
    let step2 = document.getElementById('step2')
    let title2 = document.getElementById('title2')
    let poeme2 = document.getElementById('poeme2')
    let autor2 = document.getElementById('autor2')
    
    step1.style.display = "none";
    step2.style.display = "block";

}

function showstep3(){
    let step3 = document.getElementById('step3')
    let title3 = document.getElementById('title3')
    let poeme3 = document.getElementById('poeme3')
    let autor3 = document.getElementById('autor3')
    
    step1.style.display = none;
    step2.style.display = block;

}

function showstep4(){
    let step4 = document.getElementById('step4')
    let title4 = document.getElementById('title4')
    let poeme4 = document.getElementById('poeme4')
    let autor4 = document.getElementById('autor4')
    
    step1.style.display = none;
    step2.style.display = block;

}

function showstep5(){
    let step5 = document.getElementById('step5')
    let title5 = document.getElementById('title5')
    let poeme5 = document.getElementById('poeme5')
    let autor5 = document.getElementById('autor5')
    
    step1.style.display = none;
    step2.style.display = block;

}

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

        intervalexit
    },"2000");
    setTimeout(()=>{
        showstep2()
    }, "11000")
}


function exit(){


    title1.style.bottom = -9000;
    poeme1.style.top = -9000;
    autor1.style.bottom = -9000;

    setTimeout(()=>{
        step1.style.opacity = 1;

        title1.style.opacity = 0;
        
        poeme1.style.opacity = 0;
        
        autor1.style.opacity = 0;
    },"29000");
}

