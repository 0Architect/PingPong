let btn1 = document.querySelector("#player1btn");
let btn2 = document.querySelector("#player2btn");
let reset = document.querySelector("#player3btn");
let pl1 = document.querySelector('#player1');
let pl2 = document.querySelector('#player2');
let number = document.querySelector("#numberSelector");

let pl1_content = parseInt(pl1.textContent);
let pl2_content = parseInt(pl2.textContent);

function check()
{
if(pl1_content >= number.value || pl2_content >= number.value)
{
    if(pl1_content >= number.value)
    {
        pl1.style.color = 'green';
        pl2.style.color = 'red';
    }
    else
    {
        pl2.style.color = 'green';
        pl1.style.color = 'red';
    }
    btn1.disabled = true;
    btn2.disabled = true;
    btn1.classList.add('disabled');
    btn2.classList.add('disabled');
    btn1.classList.toggle('hover');
    btn2.classList.toggle('hover');
}
}

btn1.addEventListener('click', ()=>{
    pl1_content = parseInt(pl1.textContent) + 1;
    pl1.textContent = pl1_content;
    check();
})

btn2.addEventListener('click', ()=>{
    pl2_content = parseInt(pl2.textContent) + 1;
    pl2.textContent = pl2_content;
    check();
})

reset.addEventListener('click',
() =>
{
    pl1.textContent = 0;
    pl2.textContent = 0;
    pl1_content = 0;
    pl2_content = 0;
    pl1.style.color = 'black';
    pl2.style.color = 'black';
    btn1.disabled = false;
    btn2.disabled = false;
    btn1.classList.remove('disabled');
    btn2.classList.remove('disabled');
    btn1.classList.toggle('hover');
    btn2.classList.toggle('hover');
})