function comment(){
    let c=document.querySelector("#inid").value;
    //console.log();
    let s=document.querySelector("#box1").cloneNode(true);
    s.innerHTML=c;
    let b=document.querySelector("#box");
    b.appendChild(s);
    document.querySelector("#inid").value="";
}