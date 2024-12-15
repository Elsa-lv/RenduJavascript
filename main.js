// recuperer image pour changement de mode
let img = document.getElementById("theme")

// recuperer les elements à modifier pour le dark mode 

let body = document.getElementById("body")
let header = document.getElementById("header")

let titre = document.getElementById("title")

let footer = document.getElementById("foot")
console.log(footer)

let text = document.querySelectorAll(".text")
console.log("texte ", text)

let imgs = document.querySelectorAll(".img")

let fantome = true

let tab = document.querySelectorAll(".tab")
console.log("tabs = ", tab)

// activation du dark mode via le bouton et changement des éléments 

img.addEventListener("click", function(){
    console.log("appui sur le bouton dark mode")
    if (fantome == true) {
        img.src = "images/soleil2.png"
        fantome = false 
    }else {
        img.src = "images/3peur.png"
        fantome = true 
    }
    body.classList.toggle("darkBody")
    header.classList.toggle("darkImg")
    footer.classList.toggle("darkFooter")
    titre.classList.toggle("darkTitre")

    text.forEach((e) => {
        e.classList.toggle("textDM")
        console.log(e)
    })

    imgs.forEach((i) => {
        i.classList.toggle("ImgDark")
        console.log(i)
    })
    
    
    tab.forEach((element)=> {
        element.classList.toggle("darkTab")
    })
    
})

//systeme de tab 

tab.forEach((element) => {
    element.addEventListener("click", function () {
        console.log("click", element)
        // let content = element.nextElementSibling
        // console.log(content)
        // content.classList.toggle("content-active")
        // element.classList.toggle("tab-active")
        let content = document.getElementsByClassName("content")
        console.log("content liste",content)

        if (element.classList.contains("tab_accueil")){
            if (content[0].classList.contains("content-active")){
                console.log("deja affiché 1")
            }else{
                
                console.log("page 1")
                content[0].classList.toggle('content-active')

                content[1].classList.remove("content-active")
                content[2].classList.remove("content-active")
            }
            
        }
        if (element.classList.contains("tab_ChonsPoilsCourts")){
            if (content[1].classList.contains("content-active")){
                console.log("déja affiché 2")
            } else{
                console.log("page 2")
                content[1].classList.toggle('content-active')

                content[0].classList.remove("content-active")
                content[2].classList.remove("content-active")
            }
            
        }

        if (element.classList.contains("tab_ChonsPoilsLongs")){
            if (content[2].classList.contains("content-active")){
                console.log("déja affiché 3")
            } else{
                console.log("page 3")
                content[2].classList.toggle('content-active')

                content[0].classList.remove("content-active")
                content[1].classList.remove("content-active")
            }
            
        }
      })
})


