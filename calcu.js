document.getElementById("sum").addEventListener("click", calculate)
document.getElementById("minus").addEventListener("click", calculateMinus)
document.getElementById("clean").addEventListener("click", clean)
let items = document.querySelectorAll(".num");
for (let i = 0; i < items.length; i++) {
    let button = items[i]
    console.log(button.id)
    button.addEventListener("click", (event) => {onNumberClick(event, button)})
}


function getElement(id) {
    return (document.getElementById(id) )

}
function getValueById(id) {
    return Number(getElement(id).value)
}
let result=getElement("result")
function calculate(event) {
    let a=getValueById('num1')
    let b=getValueById('num2')
    event.preventDefault();
    if ( Number.isInteger(a)&&Number.isInteger(b))
    {
        alert(result.innerHTML = a + b);
    }
  else {
      alert('введи число')

    }
}
function onNumberClick(event,button)
{
    let a=getValueById(button.id)
    event.preventDefault()
    getElement("num1").value+=a


}

function b2(event)
{
    let a=getValueById("b2")
    event.preventDefault()
    getElement("num1").value=a
}
function calculateMinus(event) {
    alert(result.innerHTML = getValueById('num1') - getValueById('num2'));
    event.preventDefault();
}

function clean(event) {
    let items = document.querySelectorAll(".input");
    for (let i = 0; i < items.length; i++)
        items[i].value = "";
    alert(result.innerHTML = 0);

    event.preventDefault();
}