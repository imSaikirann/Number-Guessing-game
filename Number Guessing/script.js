num = Math.floor(Math.random()*500);
console.log(num);
count = 12;
var attempts = 0;


function game()
{
  
  
    var inputNumber = document.querySelector(".inputNum").value;
    attempts++;
    
    console.log(inputNumber);
    if(count == 0)
    {
        c = document.querySelector('.c')
        c.innerHTML=` YOU LOST!!`
     
        gameForm = document.querySelector('.game__form');
        gameForm.innerHTML= '<a href="index.html"><input type="button" value="Play Again" class="btn"> </a>'
        f = document.querySelector('.yes');
        f.innerHTML = `<h2><span>GAME OVER!</span></h2>`
        return;
    }
    if(inputNumber == num)
    {
       
        c = document.querySelector('.c')
        c.innerHTML=` CONGRATULATIONS <br> YOU WON! <br>Guessed the number in <span> ${attempts} </span> attempts.`
        gameForm = document.querySelector('.game__form');
        gameForm.innerHTML= ' <a href="index.html"><input type="button" value="Play Again" class="btn"> </a>'
        f = document.querySelector('.yes');
        f.innerHTML = `<h2 class = "para">Your choice is :- <span>Correct</span></h2>`
    
        return;
        
    }
    else if(inputNumber>num)
    {
        f = document.querySelector('.yes');
        f.innerHTML = `<h2 class = "para"> Your choice is :- <span> too high !! </span></h2>`
        document.querySelector('.inputNum').innerHTML = " ";
        
    }
    else if(inputNumber<num)
    {
        f = document.querySelector('.yes');
        f.innerHTML = `<h2 class="para">Your choice is :- <span> too Low!! </span></h2>`
        document.querySelector('.inputNum').innerHTML = " ";


    }
    count-=1;
    c = document.querySelector('.c');
    c.innerHTML =`You have<span>${count}</span>Attempts.`;


}

var input = document.getElementById("inputF");
input.addEventListener("keyup",function(event)
{
    if(event.key === "Enter")
    {
        document.getElementById("btn").click();
    }
})