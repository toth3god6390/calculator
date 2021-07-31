let operation, isSecondNum, secondNum, firstNum
// isSecondNum - происходит ли взаимодействие со 2-м числом (проверка)

function pressNumber(n){ 
    // взаимодействие с первым числом
    if(isSecondNum == false){        
        // исходы при которых возвращается функция
        if(n==="."&&firstNum.indexOf('.')!=-1||result.innerHTML.length>15){      
            return                                                               
        }
        // в случае пустой строки - отображается 0
        if(firstNum === "0"&&n!='.'){         
            firstNum = ""
        }
        firstNum += n
        result.innerHTML = firstNum
    } 
    // взаимодействие со вторым числом
    else {
        if(n==="."&&secondNum.indexOf('.')!=-1||result.innerHTML.length>15&&secondNum!="0"){
            return
        }
        if(secondNum === "0"&&n!='.'){
            secondNum = ""
        }
        secondNum += n
        result.innerHTML = secondNum
    }
}
// выбор действия, 
function action(operator){
    operation = operator
    // переход к взаимодействию со вторым числом
    isSecondNum = true
    secondNum = "0"
}

function calc(){
    // парсим строки в числа для арифметических действий 
    firstNum = parseFloat(firstNum)
    secondNum = parseFloat(secondNum)
    // первое числом также является результатом 
    switch(operation){
        case "+":
            firstNum = firstNum + secondNum
            
            break;
        case "-":
            firstNum = firstNum - secondNum
            
            break;
        case "*":
            firstNum = firstNum * secondNum
            
            break;
        case "/":
            firstNum = firstNum / secondNum
    }
    firstNum = String(firstNum)
    if(firstNum.length>14){
        firstNum = firstNum.substr(0,14)
    }
    result.innerHTML = firstNum
    isSecondNum = false
}
// сбрасывает до исходного состояния
function clearAll(){
    firstNum = "0"
    secondNum = "0" 
    isSecondNum = false
    operation = ""
    result.innerHTML = firstNum
}
// взаимодействие с числами
function numInteraction(act){
    if(isSecondNum==false){
        if(act === "%"){
            if(firstNum.indexOf('.')!=-1) {
                return
            }
            firstNum = firstNum / 100
            
        } else {
            // приводим к строке для slice()
            firstNum = String(firstNum)
            firstNum = firstNum.slice(0,-1)
            if(firstNum === ""){
                firstNum = "0"
            }
        }
        firstNum = String(firstNum)
        result.innerHTML = firstNum
    } else {
        if(act === "%"){
            if(secondNum.indexOf('.')!=-1){
                return
            }
            secondNum = secondNum / 100
            
        } else{
            secondNum = secondNum.slice(0,-1)
            if(secondNum === ""){
                secondNum = "0"
            }
        } 
        secondNum = String(secondNum) // для будущего взаимодействия
        result.innerHTML = secondNum
    }

}

// переход к исходному состоянию
clearAll()