let max = 100;
let randomNum = Math.floor(Math.random() * max)
let userNum = prompt("Введите число от 0 до: " + max)
while (userNum != randomNum)
{
    if (userNum > randomNum)
    {
    userNum = prompt("Нужно меньше! Ведите число: ");
    }
    else {
     userNum = prompt("Нужно больше! Введите число: ");
    }
}
alert("Ты угадал число!");
alert("Можешь перезагрузить страницу, и сыграть еще :)")