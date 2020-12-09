var inputs=[];
var inputs2=[];

function getPara1(){
    for(var i=1; i<=6; i++){
        inputs.push(document.getElementById("para1_input"+ i).value);
    }
    document.getElementById("showPara1").innerHTML=inputs.join(". ");
}

function getPara2(){
    for(var z=1; z<=6; z++){
        inputs2.push(document.getElementById("para2_input"+ z).value);
    }
    document.getElementById("showPara2").innerHTML=inputs2.join(". ");
}
