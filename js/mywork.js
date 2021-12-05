const tipi = $(".tipi"); // 0
const astrodome = $(".astrodome"); // 1
const aliasThis = $(".this"); // 2

const revealTipi = $(".revealTipi");
const revealAstrodome = $(".revealAstrodome");
const revealThis = $(".revealThis");

const clickers = [tipi, astrodome, aliasThis];
const clickerReveals = [revealTipi, revealAstrodome, revealThis];
let clickersClicks = [0, 0, 0];
const clickThreshold = 5;

const nextBtn = $(".nextBtn");

const setImg = (clicker, shouldFade) => {
    if(shouldFade){
        clickers.map(c => {
            if(c !== clicker){
                c.fadeOut();
            }
        });
    } else {
        clickers.map(c => {
            if(c !== clicker){
                c.hide();
            }
        });
    }   
}

const clickerOnClick = (obj) => {
    obj.css({transform: `rotate(${Math.round(Math.random(10, 20) * 20)}deg)  scale(1.15)`});
    setTimeout(() => {
            obj.css({transform: `scale(1.0) rotate(${Math.round(Math.random(10, 20) * 20)}deg)`});
    }, 100);
    index = clickers.indexOf(obj);
    
    if(clickersClicks[index] >= clickThreshold){
        clickerReveal(obj);
    } else {
        clickersClicks[index]++;
    }
}

const clickerReveal = (obj) => {
    obj.animate({width: "0"}, 100, 'swing', () => {
        clickerReveals[clickers.indexOf(obj)].fadeIn(400);
    });
    setTimeout(() => { obj.hide() }, 200);
    
}

$(document).ready(() => {

    //Setup
    revealTipi.hide();
    revealAstrodome.hide();
    revealThis.hide();
    nextBtn.hide();

    setImg(tipi, false);
    clickers.map(x => {
        x.click(() => { clickerOnClick(x) });
    });

});