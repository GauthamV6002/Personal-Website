const tipi = $(".tipi"); // 0
const astrodome = $(".astrodome"); // 1
const aliasThis = $(".this"); // 2

const clickers = [tipi, astrodome, aliasThis];

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

$(document).ready(() => {

    setImg(tipi, false);





});