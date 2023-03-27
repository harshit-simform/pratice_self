const button = document.querySelectorAll(".btn");
console.log(button);
console.log("hiiiii");

button.forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", () => {
    myFunc(btn);
  });
});

function myFunc(btn) {
  console.log(btn);
}

window.addEventListener("keypress", (e) => {
  // console.log(e.key);
  myFunc(e.key);
});


document.querySelector(".same").addEventListener("click", () => {
  setTimeout(()=>{
    // do something after 3 seconds
  },3000)
})