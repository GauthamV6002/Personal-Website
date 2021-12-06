const tipi = $(".tipi"); // 0
const astrodome = $(".astrodome"); // 1
const aliasThis = $(".this"); // 2

const revealTipi = $(".revealTipi");
const revealAstrodome = $(".revealAstrodome");
const revealThis = $(".revealThis");

const clickers = [tipi, astrodome, aliasThis];
const clickerReveals = [revealTipi, revealAstrodome, revealThis];
let clickersClicks = [0, 0, 0];
let currentObjIndex = 0;
const clickThreshold = 5;

const unlockedTxt = $(".unlockedTxt");

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
        nextBtn.fadeIn(400);

        if(currentObjIndex === 2){
            nextBtn.html('Contact >>');
        }
    });
    setTimeout(() => { obj.hide() }, 200);
    $(".clickMe").fadeOut(200);

    if(currentObjIndex === 1){
        unlockedTxt.html('<span class="colGR">Mywork</span>.Astrodome.unlocked == <span class="colP">True</span>');
    } else if (currentObjIndex === 2) {
        unlockedTxt.html('<span class="colGR">Mywork</span>.PersonalWebsite.unlocked == <span class="colP">True</span>');
    }
    unlockedTxt.show();
    unlockedTxt.css("animation", "cut 2s ease-in-out");
    setTimeout(() => {
        unlockedTxt.hide();
        unlockedTxt.css("animation", "none");
    }, 1500);






}

$(document).ready(() => {

    //Setup
    revealTipi.hide();
    revealAstrodome.hide();
    revealThis.hide();
    nextBtn.hide();
    $(".clickMe").hide();

    setImg(tipi, false);
    clickers.map(x => {
        x.click(() => { clickerOnClick(x) });
    });

    setTimeout(() => {
        if(clickersClicks[currentObjIndex] === 0){
            $(".clickMe").fadeIn();
        }
    }, 3500);

    //NextBtn
    nextBtn.click(() => {

        if(currentObjIndex === 2){
            window.location.href = "./contact.html";
            return;
        }

        currentObjIndex++;

        revealTipi.hide();
        revealAstrodome.hide();

        nextBtn.fadeOut();
        clickers[currentObjIndex].fadeIn();

        setTimeout(() => {
            if(clickersClicks[currentObjIndex] === 0){
                $(".clickMe").fadeIn();
            }
        }, 3500);
    });

});