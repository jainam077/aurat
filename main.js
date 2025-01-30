function toggleDiv1122(){
    var div11 = document.getElementById('div11');
    var div22 = document.getElementById('div22');

    if (div11.style.display !== 'none') {
        div11.style.display = 'none';
        div22.style.display = 'block';
    } else {
        div11.style.display = 'block';
        div22.style.display = 'none';
    } 
}

function toggleDiv0(){
    var div0 = document.getElementById('div0');
    var div1 = document.getElementById('div1');

    if (div0.style.display !== 'none') {
        div0.style.display = 'none';
        div1.style.display = 'block';
    } else {
        div0.style.display = 'block';
        div1.style.display = 'none';
    } 
}

function toggleDiv1(){
    var div1 = document.getElementById('div1');
    var div2 = document.getElementById('div2');

    if (div1.style.display !== 'none') {
        div1.style.display = 'none';
        div2.style.display = 'block';
    } else {
        div1.style.display = 'block';
        div2.style.display = 'none';
    } 
}



function increaseSize(){
    var button1 = document.getElementById('btn-yes');
    var maxSize = 500;
    var currentSize = parseInt(window.getComputedStyle(button1).getPropertyValue('padding'));

    function increaseButtonSize(){
        currentSize += 30;
        if (currentSize<maxSize){
            button1.style.padding = currentSize+'px';
        }else{
            resetButtonSize();
        }
    }
    increaseButtonSize();
}

function resetButtonSize(){
    var button = document.getElementById('btn-yes');
    button.style.padding = '8px';
}


function toggleDiv2(){
    var div2 = document.getElementById('div2');
    var div3 = document.getElementById('div3');
    var hearts = document.getElementById('heart-float')

    if (div2.style.display !== 'none') {
        div2.style.display = 'none';
        div3.style.display = 'block';
        hearts.style.display = 'block';
    } else {
        div2.style.display = 'block';
        div3.style.display = 'none';
        hearts.style.display = 'none';
    }
}
function toggleDiv3(){
    var div3 = document.getElementById('div3');
    var div4 = document.getElementById('div4');
    var hearts = document.getElementById('heart-float')

    if (div3.style.display !== 'none') {
        div3.style.display = 'none';
        div4.style.display = 'block';
        hearts.style.display = 'block';
    } else {
        div3.style.display = 'block';
        div4.style.display = 'none';
        hearts.style.display = 'none';
    }
}
function toggleDiv4(){
    var div4 = document.getElementById('div4');
    var div5 = document.getElementById('div5');
    var hearts = document.getElementById('heart-float')

    if (div4.style.display !== 'none') {
        div4.style.display = 'none';
        div5.style.display = 'block';
        hearts.style.display = 'block';
    } else {
        div4.style.display = 'block';
        div5.style.display = 'none';
        hearts.style.display = 'none';
    }
}
function toggleDiv5(){
    var div4 = document.getElementById('div4');
    var div6 = document.getElementById('div6');
    var hearts = document.getElementById('heart-float')
    if (div4.style.display !== 'none') {
        div4.style.display = 'none';
        div6.style.display = 'block';
        hearts.style.display = 'block';
    } else {
        div4.style.display = 'block';
        div6.style.display = 'none';
        hearts.style.display = 'none';
    }

    
}
function toggleDiv6(){
    var div4 = document.getElementById('div4');
    var div7 = document.getElementById('div7');
    var hearts = document.getElementById('heart-float')

    if (div4.style.display !== 'none') {
        div4.style.display = 'none';
        div7.style.display = 'block';
        hearts.style.display = 'block';
    } else {
        div4.style.display = 'block';
        div7.style.display = 'none';
        hearts.style.display = 'none';
    }
}
function toggleDiv7(){
    var div4 = document.getElementById('div4');
    var div8 = document.getElementById('div8');
    var hearts = document.getElementById('heart-float')

    if (div4.style.display !== 'none') {
        div4.style.display = 'none';
        div8.style.display = 'block';
        hearts.style.display = 'block';
    } else {
        div4.style.display = 'block';
        div8.style.display = 'none';
        hearts.style.display = 'none';
    }
}