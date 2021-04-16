const counters=document.querySelectorAll('.counter');
const speed=200;
counters.forEach(counter=>{
    const updateCount=()=>{ 
    const target=+counter.getAttribute('data-target');
    // console.log(typeof target);
    const count=+counter.innerText;

    const inc=target/speed;
    console.log(count);
    // console.log(inc);
if (count<target) {
    counter.innerText=count +inc;//Math.ceil(count+inc);printed counter without any decimal
    setTimeout(updateCount,1)
}
else{
    count.innerText=target;
}
}
updateCount();
});