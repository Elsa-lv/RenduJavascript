/// Formulaire d'inscription

// recuperer le formulaire et les champs à remplir
let form = document.querySelector("form")
let pseudo = document.getElementById("nom")
let mail = document.getElementById("mail")
let mdp = document.getElementById("mdp")
let Vmdp = document.getElementById("Vmdp")

// let Contents = document.querySelectorAll(".content")

// let ContentName = document.getElementsByClassName("contentName")
// let contentEMAIL = document.getElementsByClassName("contentEMAIL")
// let contentMDP = document.getElementsByClassName("contentMDP")


// console.log(mdp)
// console.log(Vmdp)

let mdpVerif = false

form.addEventListener('submit', function(event){
    event.preventDefault();

    if (pseudo.value.length < 6){
        pseudo.classList.toggle('non')
        // ContentName.classList.toggle('active')
        console.log("euh bah non mec il faut ecrire plus, comme en philo wesh")
    }else{
        console.log('envoie formulaire')
        pseudo.classList.toggle('oui')
    }

    if(mdp.value.length >= 8){
        mdpVerif = true
    }else{
        mdp.classList.toggle('non')
    }

    

    if(mdpVerif == true){
        if(Vmdp.value == mdp.value){
            console.log('les mots de passes sont identiques')
            mdp.classList.toggle('oui')
            Vmdp.classList.toggle('oui')
        }else{
            // contentMDP.classList.toggle('active')
            console.log("mot de passe different")
            mdp.classList.toggle('non')
        }

        
    
    }
    if(mail.value == '' ){
        mail.classList.toggle("non")
    }else{
        mail.classList.toggle("oui")
    }
    
    

    
    
    

    



})