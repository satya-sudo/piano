window.addEventListener('load',() =>{
    let sounds = document.querySelectorAll('.sounds');
    let pads = document.querySelectorAll('.pads div');
    let visuals = document.querySelector('.visual');
    let colors = [
        'crimson',
        'darkgoldenrod',
        'darkorange',
        'darkviolet',
        'deeppink',
        'indigo',
        'darkcyan',
        'olive',
        'slateblue',
        'indianred',
        'aqua',
        'azure'
    ];

    console.log(sounds)
    // sounds

    pads.forEach((pad,index) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        });
    });

    const createBubbles = (index) => {
        const bubble = document.createElement('div');
        visuals.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function(){
            visuals.removeChild(this)

        })
    } 
})