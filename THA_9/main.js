const seat = document.createElement("div");
seat.className = "seat";

const container = document.querySelector('.bottom')
const booked = document.querySelector('.booked')
const remaining = document.querySelector('.remaining')


var bcount = 0;
var rcount = 80;




const number = rcount;

for (let i=0; i<number;i++){
  container.appendChild(seat.cloneNode(true))
}

document.addEventListener('click', (e)=>{
  console.log(e.target)
  if (e.target.classList.contains('seat')){
  console.log(e.target.classList.toggle('occupied'))
    if (e.target.classList.contains('occupied')){
bcount++;
rcount--;
    }
    else {
      bcount--;
      rcount++;
    }
booked.innerHTML = ` ${bcount}`;
remaining.innerHTML = ` ${rcount}`;

  }
})
