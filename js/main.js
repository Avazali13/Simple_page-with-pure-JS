// slider part
const pre=document.querySelector(".prebtn")
const next=document.querySelector(".nextbtn")
const alls=document.querySelectorAll('.slide')


let current=0
let late=alls.length-1

  setInterval(function(abc){
    if(current<=0){
        current=late;
    }
    else{
        current--;
    }

    alls.forEach((slide, index)=>{
        slide.style.transform="translateX(" + 100 *(index - current)+ "%)" ;
    } ) ; 
},2500)



pre.addEventListener("click" , function (){
    if(current<=0){
        current=late;
    }
    else{
        current--;
    }

    alls.forEach((slide, index)=>{
        slide.style.transform="translateX(" + 100 *(index - current)+ "%)" ;
    } ) ;
})


next.addEventListener('click' , function(){
    if(current>=late){
        current=0;
    }
    else{
        current++;
    }

    alls.forEach((slide,index)=>{
        slide.style.transform="translateX(" + 100 *(index-current) + "%)" ;
    } ) ;
})



// popup part


var sign=document.querySelector('.signupform');
var con=document.querySelector('.container')
var log=document.querySelector('.loginform')



first.addEventListener('click',()=>{
    sign.classList.remove('hidden')
    con.classList.add("blur")
    log.classList.add('hidden')
});

var cancel=document.querySelector(".x1")
cancel.addEventListener("click",()=>{
    sign.classList.add('hidden')
    con.classList.remove("blur");

})

second.addEventListener('click',()=>{
log.classList.remove('hidden')
con.classList.add("blur")
sign.classList.add('hidden')
})

var cancel2 =document.querySelector('.x2')
cancel2.addEventListener('click',()=>{
    log.classList.add('hidden')
    con.classList.remove('blur')
})




// dark-light part

const darkmode=document.querySelector("#darkmode");
const theme=localStorage.getItem("theme");
const refresh=document.querySelector("#refresh")

if (theme==="dark") document.body.classList.add('dark')

darkmode.addEventListener("click",()=>{
    document.body.classList.toggle("dark")

    if(theme==="dark"){
        localStorage.setItem('theme','light')
    } else{
        localStorage.setItem("theme",'dark')
    }

})

refresh.addEventListener("click",()=>{
    location.reload();
    
})







// ...
let array=[
"Single Ladies (Put a Ring on It)' by Beyoncé",
"Umbrella by Rihanna featuring Jay-Z",
"Shake it Off by Taylor Swift",
"Toxic' by Britney Spears",
"Rolling in the Deep' by Adele",
"Firework' by Katy Perry",
"Rehab by Amy Winehouse",
"Blinding Lights' by The Weeknd",
"I'm Good (Blue)David Guetta, Bebe Rexha",
"Rich FlexDrake, 21 Savage",
"I Like You (A Happier Song) (with Doja Cat)Post Malone, Doja Cat",
"Lavender HazeTaylor Swift",
"Late Night TalkingHarry Styles",
"Miss YouOliver Tree, Robin Schulz"
]

const musics=document.querySelector('.mp3')
const btn =document.querySelector("#music")

const generatem=()=>{
const randomi=Math.floor(Math.random()*array.length)
musics.innerHTML=array[randomi]
}

btn.addEventListener('click',generatem)


