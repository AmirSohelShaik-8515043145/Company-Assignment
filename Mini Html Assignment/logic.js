const number = document.getElementById('number')
const form = document.getElementById
('form')
const errorElement = document.getElementById('error')


console.log(number)
console.log(form)
form.addEventListener("submit",(e)=>{
    let messages =[]

    if(number.value ==""){
        messages.push('Please provide a number before submit')
    }
    if(number.value<=0){
        if(number.value<0){
            messages.push("Number Cannot be Negetive")
        }
        if(number.value==0){
            messages.push("Number Cannot be Zero")
        }
    }
    if(number.value%2 == 0 ){
        let num = Number(number.value)
        messages.push(`Next Three Even Number is ${num+2},${num+4},${num+6}`)
    }
    if(number.value%2 == 1){
        let num = Number(number.value)
        messages.push(`Next Three Odd Number is ${num+2},${num+4},${num+6}`)
    }
    if(messages.length>0){
        e.preventDefault()
        errorElement.innerText = messages[0]
    }
})