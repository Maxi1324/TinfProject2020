
var height = 0;

$(document).ready(function () {
    $(".gutPage5").hide();
    $(".gutPage2").hide();
    $(".gutPage3").hide();
    $(".gutPage4").hide();

    $(".schlechtPage5").hide();
    $(".schlechtPage2").hide();
    $(".schlechtPage3").hide();
    $(".schlechtPage4").hide();
});

function changePage(str) {
    $(".gutPage5").hide();
    $(".gutPage2").hide();
    $(".gutPage3").hide();
    $(".gutPage4").hide();
    $(".gutPage1").hide();

    $(str).show();
}

function resize(){
   
    if(window.innerWidth < 520){
        $(".Linie").hide();
    }
    else{
        $(".Linie").show();
    }
}

function changePage2(str) {
    $(".schlechtPage5").hide();
    $(".schlechtPage2").hide();
    $(".schlechtPage3").hide();
    $(".schlechtPage4").hide();
    $(".schlechtPage1").hide();

    $(str).show();
}

function linkOeffnen(str){
    window.open(str);
}

