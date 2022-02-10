function resize(){
    reposible();
}

$(document).ready(function () {
    reposible();
});

function reposible(){
    var max = -1;
    for(var i = 1;i < 8;i++){
        if(max <   $(".tool" + i).height()){
            max =  $(".tool" + i).height();
        }
        $(".tool" + i).height(max);
    }
}