let user = document.getElementById("user")
let cpu = document.getElementById("cpu")
let srcs = ["", "paper.png", "scissors.png", "rock.jfif"]
let time = document.getElementById("h1")
let player = ""
function cpuimg(){
   
}
cpuimg()

function result(){
                    
}
result()
function scissors(){
    time.classList.remove("h1")
    time.style.opacity = "1"
        time.innerHTML = 1
        setTimeout(function(){time.innerHTML = 2},1000)
        setTimeout(function(){time.innerHTML = 3},2000)
    setTimeout(function(){
        time.style.opacity = "1"
        time.innerHTML = 1
        user.src = "scissors.png"
    const a = Math.random() * (4-1) + 1
                cpu.src = srcs[Math.trunc(a)]
                let x = srcs[Math.trunc(a)]
                console.log(x)
    if(x == "paper.png"){
        console.log("win")
        time.innerHTML = "win"
        time.style.color = "green"
        time.style.opacity = "1" 
        user.style.transform = "scale(1.02)"
        user.style.borderColor = "green"
        cpu.style.borderColor = "red"
    }else if(user.src == cpu.src){
        time.innerHTML = "draw"
        time.style.opacity = "1"
        time.style.color = "black"
                    user.style.borderColor = "black"
                    cpu.style.borderColor = "black" 
        console.log("draw")
    }else if(x == "rock.jfif"){
        time.innerHTML = "lose"
        time.style.color = "red"
        time.style.opacity = "1"
        user.style.borderColor = "red"
        cpu.style.borderColor = "green" 
        console.log("lose")
    }
    },3500)
    setInterval(function(){time.innerHTML += '.'},3500)
              setTimeout(function(){location.reload()},8000)
    
}
function rock(){
    time.classList.remove("h1")
    time.style.opacity = "1"
        time.innerHTML = 1
        setTimeout(function(){time.innerHTML = 2},1000)
        setTimeout(function(){time.innerHTML = 3},2000)
        setTimeout(function(){user.src = "rock.jfif"
            const a = Math.random() * (4-1) + 1
                        cpu.src = srcs[Math.trunc(a)]
                        let x = srcs[Math.trunc(a)]
                        console.log(x)
                        if(x == "scissors.png"){
                            console.log("win")
                            time.style.color = "green"
                            time.innerHTML = "win"
                            time.style.opacity = "1" 
                            user.style.borderColor = "green"
                            cpu.style.borderColor = "red"
                        }else if(user.src == cpu.src){
                            time.innerHTML = "draw"
                            time.style.opacity = "1" 
                            time.style.color = "black"
                            user.style.borderColor = "black"
                            cpu.style.borderColor = "black"
                            console.log("draw")
                        }else if(x == "paper.png"){
                            time.innerHTML = "lose"
                            time.style.color = "red"
                            time.style.opacity = "1"
                            cpu.style.borderColor = "green"
                            user.style.borderColor = "red" 
                            console.log("lose")
                        }},3500)
                        setInterval(function(){time.innerHTML += '.'},3500)
              setTimeout(function(){location.reload()},8000)
    
}
function paper(){
    time.classList.remove("h1")
    time.style.opacity = "1"
        time.innerHTML = 1
        setTimeout(function(){time.innerHTML = 2},1000)
        setTimeout(function(){time.innerHTML = 3},2000)
        setTimeout(function(){user.src = "paper.png"
            const a = Math.random() * (4-1) + 1
                        cpu.src = srcs[Math.trunc(a)]
                        let x = srcs[Math.trunc(a)]
                        console.log(x)
                        if(x == "rock.jfif"){
                            console.log("win")
                            time.innerHTML = "win"
                            time.style.color = "green"
                            time.style.opacity = "1" 
                            user.style.borderColor = "green" 
                            cpu.style.borderColor = "red"
                        }else if(user.src == cpu.src){
                            time.innerHTML = "draw"
                            time.style.opacity = "1" 
                            time.style.color = "black"
                            user.style.borderColor = "black"
                            cpu.style.borderColor = "black"
                            console.log("draw")
                        }else if(x == "scissors.png"){
                            time.innerHTML = "lose"
                            user.style.borderColor = "red" 
                            cpu.style.borderColor = "green"
                            time.style.color = "red"
                            time.style.opacity = "1" 
                            console.log("lose")
                        }},3500)
                        setInterval(function(){time.innerHTML += '.'},3500)
                        setTimeout(function(){location.reload()},8000)
}