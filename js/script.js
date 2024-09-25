var sliderimages = Array.from(document.querySelectorAll(".slider-container img"));
var slidescount = sliderimages.length
var currentslide = 1;

//  slide-number
var slideNumberElement =document.getElementById("slide-number");
//next buttom
var nextbtn=document.getElementById("next")
//previous buttom
var prevbtn=document.getElementById("prev")

//////ul elements
var paginationElement=document.createElement("ul");
paginationElement.setAttribute("id","pagination-ul")

///// li items 
for (var i=1;i<=slidescount;i++){

    var paginationItem=document.createElement("li")
    paginationItem.setAttribute("data-index",i)
    paginationItem.appendChild(document.createTextNode(i));

    paginationElement.appendChild(paginationItem)

}

document.getElementById("spaniddicat").appendChild(paginationElement)

var pagationcreatedUl=document.getElementById("pagination-ul")

var pagationBullets = Array.from(document.querySelectorAll("#pagination-ul li"));


for (var i=0 ;i< pagationBullets.length ;i++){
    pagationBullets[i].onclick=function(){
        currentslide =parseInt(this.getAttribute("data-index"))
        thechecker();
    }
}

////////////////////////funstions

function removeactive(){
    sliderimages.forEach(function(img) {
        img.classList.remove("active");
    });
}
function diactiveBulltes(){
pagationBullets.forEach(function(bullet){
    bullet.classList.remove("active")
});
}

function thechecker(){
    ///slide Number
    slideNumberElement.textContent="slide "+(currentslide)+" of "+(slidescount)
    ///remove active
    removeactive();
    diactiveBulltes();
    //Activeness
    sliderimages[currentslide-1].classList.add("active");
    pagationcreatedUl.children[currentslide-1].classList.add("active");
    
    //current slide is the First??!
    if(currentslide==1){
        //disable the previous button
        prevbtn.classList.add("disabled")
    }
    else{
        prevbtn.classList.remove("disabled")
    }


    //current slide is the last??!
    if(currentslide==slidescount){
     //disable the previous button
       nextbtn.classList.add("disabled")
    }
    else{
        nextbtn.classList.remove("disabled")
    }


}
thechecker();

function nextslide(){
    if(nextbtn.classList.contains("disabled")){return false }
   else{
   currentslide++;
   thechecker();
    }
}
function prevslide(){
    if(prevbtn.classList.contains("disabled")){  }
    else{
        currentslide--;
        thechecker();
    }
}

////////////////////////////////////
nextbtn.onclick=nextslide;
prevbtn.onclick=prevslide;


var autoSlideInterval = setInterval(nextslide, 3000);

// Pause on hover
var sliderContainer = document.querySelector(".slider-container");

sliderContainer.addEventListener("mouseenter", function() {
    clearInterval(autoSlideInterval); 
});

sliderContainer.addEventListener("mouseleave", function() {
    autoSlideInterval = setInterval(nextslide, 5000); 
});