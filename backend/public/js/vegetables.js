// class Veg{
//     constructor(id, textCon){
//         this.id = id;
//         this.textCon = textCon;
//         //this.audioId = audioId;
//     }
// }
// tab=[];
// tab ["sweetcorn"] = new Veg('sweetcorn', 'le mais');
// tab ["bellpepper"] = new Veg('bellpepper', 'le poivron');
// tab ["bittermelon"] = new Veg('bittermelon', 'momordique');
// tab ["cucumber"] = new Veg('cucumber', 'le concombre');
// tab ["eggplant"] = new Veg('eggplant', 'l\'aubergine');
// tab ["pumpkin"] = new Veg('pumpkin', 'le potiron');
// tab ["tomato"] = new Veg('tomato', 'la tomate');
// tab ["zucchini"] = new Veg('zucchini', 'la courgette');
// tab ["daikon"] = new Veg('daikon', 'le radis');

// let uploadedFile = document.querySelector("#imgfile");
// let img = document.querySelector('img');
// uploadedFile.addEventListener('change', function(){
//     let url = URL.createObjectURL(uploadedFile.files[0])
// });
// img.src = url;
// console.log(url);



let Veg = {
    "sweetcorn": "le mais",
    "bellpepper": "le poivron",
    "bittermelon": "momordique",
    "cucumber": "le concombre",
    "eggplant": "l'aubergine",
    "pumpkin": "le potiron",
    "tomato": "la tomate",
    "zucchini": "la courgette",
    "daikon": "le radis",

};

// function bigImg(){
//     Object.entries(Veg).forEach(elementVeg => {
//         document.getElementById(elementVeg[0]).style.width = "150px";
//         document.getElementById(elementVeg[0]).style.height = "150px";
//     });
// }

// function normalImg(){
//     Object.entries(Veg).forEach(elementVeg => {

//     });
// }
// function playAudio(){
//     Object.entries(Veg).forEach(elementVeg => {

//     });
// }


// function bigImg(x){
//     let myElement = document.getElementById(x).children;
//     myElement[1].textContent = tab[x].textCon;
//     myElement[0].style.width = "150px";
//     myElement[0].style.height = "150px";
//     //x.style.width ="120px";
//     //document.getElementById("sweetcorn").textContent="le mais";
// }
// function normalImg(x){
//     let myElement = document.getElementById(x).children;
//     myElement[1].textContent = "";
//     myElement[0].style.width = "100px";
//     myElement[0].style.height = "100px";
//     //x.style.width = "100px";
//     //document.getElementById("sweetcorn").textContent = "";
// }
// function playAudio(x){
//     let myElement = document.getElementById(x).children;
//     console.log(myElement);
//     myElement[2].play();
//     //document.getElementById().play();
// }


Object.entries(Veg).forEach(elementVeg => {
    let div1 = document.createElement('div');
    div1.className = 'row';
    let div2 = document.createElement('div');
    div2.className = 'gallery';
    div2.id = elementVeg[0];
    let img = document.createElement('img');
    img.src = 'pic/veg-fruit/' + elementVeg[0] + '.jpg';
    img.className = 'vegetables';
    let div3 = document.createElement('div');
    div3.className = 'text';
    // let audio = document.createElement('audio');
    // audio.src = 'audio/' + elementVeg[0] + '.mp3';
    // audio.type = 'audio/mpeg';
    
    img.onmouseover = () => {
        img.style.width = "150px";
        img.style.height = "150px";
        div3.textContent = elementVeg[1];
        
    }
    
    img.onmouseout = () => {
        img.style.width = "100px";
        img.style.height = "100px";
        div3.textContent = ""
    }
    
    img.onclick = () => {
        new Audio('audio/' + elementVeg[0]).play();
    }

    div2.append(img)
    div2.appendChild(div3);
    div1.appendChild(div2);
    document.getElementById('bigGallery').appendChild(div1);   
    // div2.appendChild(audio);
})

// {/* <div class="row">
// <div class="gallery" id="sweetcorn">
//     <img class="vegetables" src="pic/veg-fruit/sweetcorn.jpg" alt="sweetcore" onmouseover="bigImg('sweetcorn')" onmouseout="normalImg('sweetcorn')" onclick="playAudio('sweetcorn')">
//     <div class="text"> </div>
//     <audio src="audio/mais.mp3" type="audio/mpeg"></audio>
// </div>    
// </div> */}


