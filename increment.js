let counter= 1;
function increment()
{
    let counterele=document.querySelector("#id1");
    counter=counter+1;
    counterele.innerHTML=counter;

}
function decrement()
{
    let counterele=document.querySelector("#id1");
    counter=counter-1;
    counterele.innerHTML=counter;

}