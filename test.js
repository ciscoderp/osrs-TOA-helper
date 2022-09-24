const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const reset = document.getElementById('reset');
let num = 1;

btn1.addEventListener('click', function onClick(event){   

    btn1.style.backgroundColor = 'red';
    btn1.textContent = num;
    num++;
});


btn2.addEventListener('click', function onClick(event){   

    btn2.style.backgroundColor = 'red';
    btn2.textContent = num;
    num++;
});


btn3.addEventListener('click', function onClick(event){   

    btn3.style.backgroundColor = 'red';
    btn3.textContent = num;
    num++;
});

btn4.addEventListener('click', function onClick(event){   

    btn4.style.backgroundColor = 'red';
    btn4.textContent = num;
    num++;
});

btn5.addEventListener('click', function onClick(event){   

    btn5.style.backgroundColor = 'red';
    btn5.textContent = num;
    num++;
});

btn6.addEventListener('click', function onClick(event){   

    btn6.style.backgroundColor = 'red';
    btn6.textContent = num;
    num++;
});

btn7.addEventListener('click', function onClick(event){   

    btn7.style.backgroundColor = 'red';
    btn7.textContent = num;
    num++;
});

btn8.addEventListener('click', function onClick(event){   

    btn8.style.backgroundColor = 'red';
    btn8.textContent = num;
    num++;
});


btn9.addEventListener('click', function onClick(event){   

    btn9.style.backgroundColor = 'red';
    btn9.textContent = num;
    num++;
});


reset.addEventListener('click', function onClick(event){   
    btn1.style.backgroundColor = 'tan';
    btn2.style.backgroundColor = 'tan';
    btn3.style.backgroundColor = 'tan';
    btn4.style.backgroundColor = 'tan';
    btn5.style.backgroundColor = 'tan';
    btn6.style.backgroundColor = 'tan';
    btn7.style.backgroundColor = 'tan';
    btn8.style.backgroundColor = 'tan';
    btn9.style.backgroundColor = 'tan';

    btn1.textContent = "X";
    btn2.textContent = "X";
    btn3.textContent = "X";
    btn4.textContent = "X";
    btn5.textContent = "X";
    btn6.textContent = "X";
    btn7.textContent = "X";
    btn8.textContent = "X";
    btn9.textContent = "X";
    
    num = 1;
});