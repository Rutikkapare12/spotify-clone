const bodyEl = document.getElementsByTagName('body')[0];
const collapseEl = document.getElementById('collapse-btn');
const musicListEl = document.getElementsByClassName('music-lists');
const collapseRemoveEl = document.querySelectorAll(".collapse-removeble");

collapseEl.addEventListener('click', () => {
    bodyEl.classList.toggle('minimize-body');
    collapseRemoveEl.forEach(element => {
        element.classList.toggle('collapse');
    });
    musicListEl.classList.toggle('musiclists__height');
    console.log('collapse');
});


var coll = document.getElementsByClassName("show-more");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("collapsible");
    var content = this.parentElement.nextElementSibling;
    if (content.style.height === "260px") {
        content.style.height = "auto";
    } else {
        content.style.height = "260px";
    }
  });
}


// scrolling nav Effect
const mainEl = document.getElementById("main-con");
const topNavEl = document.getElementById("top-scroll");
mainEl.addEventListener("scroll",()=>{
  console.log(mainEl.scrollTop);
    if(mainEl.scrollTop > 45){
       topNavEl.style.background = "rgba(0,0,0,.15)";
    }
    else if(mainEl.scrollTop < 45)
    {
      topNavEl.style.background = "rgb(67, 2, 67)";
    }
})