tl = gsap.timeline();

tl.to(".box1",{
    rotate:"360 deg",
    backgroundColor:"pink",
    duration:5,
    x:1200
})

tl.to(".box2",{
    rotate:"360 deg",
    backgroundColor:"green",
    duration:5,
    x:1200
})

tl.pause()

document.querySelector("#play").addEventListener("click",function(){
    tl.play()
})

document.querySelector("#reverse").addEventListener("click",function(){
    tl.reverse()
})