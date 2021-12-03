//GLOBALS

const exStageSet = (stage) => {
    if(stage === 1){
        $('.bioDiv').hide();
        bioRunOuputCards.hide();

    }
    if(stage === 2){
        bioRunOutput.hide();
        $(".myworkA").hide();
        $(".mainTxtDiv").fadeOut(200, () => {$(".bioDiv").fadeIn()});
        $(".buttonsDiv").fadeOut();
    }
}

const typewriter = (txt, ele, speed) => {
    ele.html('');
    for(let i = 0; i <= txt.length; i++){
        setTimeout(() => {
            console.log(speed * i);
            ele.html(txt.slice(0, i));
        }, speed * i);
    }
}


//BTN EX
const btn0 = $("#btn0");
const btn1 = $("#btn1");
const mainTxt = $('.mainTxt');

const setAns = (mt, b0, b1) => {
    mainTxt.fadeOut(200, () => {
        mainTxt.text(mt);
        mainTxt.fadeIn();
    });
    btn0.fadeOut(200, () => {
        btn0.val(b0);
        btn0.fadeIn();
    });
    if(b1){
        btn1.fadeOut(200, () => {
            btn1.val(b1);
            btn1.fadeIn();
        });
    } else {
        btn1.fadeOut();
    }
}
const ansEx = (ans) => {
    //Hi!
    if((ans === 'Hello?') || (ans === 'Hi!')){
        setAns("I'm Gautham, a teenage web dev.", "So?", "Cool, tell me more");
    } else if(ans === "So?") {
        setAns("So... This is my personal website! Like it so far?", "I guess so", "Nope!");
    } else if(ans === "Cool, tell me more"){
        exStageSet(2);
    } else if(ans === "I guess so"){
        setAns('That\'s more like it! Take a look at my bio:', 'See bio', '');
    } else if(ans === 'Nope!'){
        setAns('Oh... Well you can look at my bio anyway ;)', 'See bio');
    } else if(ans === 'See bio'){
        exStageSet(2);
    }


}

//BIO EX

bioRunBtn = $('#bioRunBtn');
bioRunOutput = $('#bioRunOutput');
bioRunOuputCards = $('.bioRunOuputCards');

myWorkTrigger = $(".myWorkTrigger");
myWorkTriggerSeperator = $(".myWorkTriggerSeperator");



$(document).ready(() => {
    exStageSet(1);
    //BTN EX
    btn0.click(() => {
        ansEx(btn0.val());
    });
    btn1.click(() => {
        ansEx(btn1.val());
    });
    

    myWorkTrigger.hover(() => { 
        myWorkTriggerSeperator.width('12px');
        myWorkTrigger.css({color:"goldenrod", cursor: 'pointer'});
    }, () => {
        myWorkTriggerSeperator.width('0px');
        myWorkTrigger.css({color:"#FF2E63", cursor: 'default'});
    });


    //BIO EX
    bioRunBtn.click(() => {
        bioRunOutput.fadeIn();
        str = '<p> age == <span class=\"colP\">15</span> <br> location == <span class=\"colG\">Canada.Alberta.Calgary</span> <br> likes == [ <span class=\"colGR\">\'coding🧑‍💻\'</span>,  <span class=\"colGR\">\'robotics🤖\'</span>,  <span class=\"colGR\">\'math🔢\'</span>, <span class=\"colGR\">\'youtube▶️\'</span>] <br> likes != <span class=\"colGR\">\'going outside🌲\'</span> <br> lookingForAnInternship == <span class=\"colP\">True';
        typewriterSpeed = 10;
        typewriter(str, bioRunOutput, typewriterSpeed);
        $(".vertLine").height('0px');
        $(".bioOutAllTxt").hide();
        setTimeout(() => {
            bioRunOuputCards.fadeIn(750, () => {
                $(".bioOutputCardsTitle").fadeIn(250);
                $(".bioOutputCardstxt").fadeIn(1000);
                $(".bioOutputCardsTitleEnd").fadeIn(1750, () => {
                    setTimeout(() => {$(".myworkA").fadeIn()}, 500);
                });

                $(".vertLine").animate({height: "87%"}, 500, "swing");
                
            });
        }, typewriterSpeed * str.length + 200);
    });

});