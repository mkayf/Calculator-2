let string = '';
let displayInput = document.getElementsByClassName('display')[0];
let buttons = document.querySelectorAll('.btns');
Array.from(buttons).forEach((element)=>{
    element.addEventListener('click',(button)=>{
        if(button.target.value == '='){
            try{
        string = eval(string);
        displayInput.value = string;
            }
            catch(error){
                string = error.name;
                displayInput.value = string;
            }
        }
        else if(button.target.value == 'AC'){
            string = '';
            displayInput.value = string;
        }
        else if(button.target.value == 'DE'){
            string = string.slice(0, -1);
            displayInput.value = string;
        }
        else if(button.target.value == '%'){
           if(string.includes('/')){
            string = eval(string) * (100);
            displayInput.value = string;
           }else{   
            string = string / 100;
            displayInput.value = string;
           }
        }
        else{
            string = string + button.target.value;
            displayInput.value = string;
        }
    })
})

