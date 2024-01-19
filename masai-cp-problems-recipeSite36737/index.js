let input = document.querySelector('input');
  let btn = document.querySelector('button');
   let ctn = document.getElementById('card-box');
  let randomCount;
  function debounce(calbk,delay){
       if(randomCount){
           clearTimeout(randomCount);
       }
       randomCount = setTimeout(()=>{
               calbk();
      },delay) 
  }

async function display(){
  try {
    let userInput = document.querySelector("input").value;
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`);
      let data = await res.json();
      displayCard(data);
 } catch (error) {
     console.error("unexpected keyword");
 }
}

 function displayCard(data){
  data.meals.forEach(ele => {
    let card = document.createElement('div');
      card.className = "card";
    let img = document.createElement("img");
    img.src = ele["strMealThumb"];
    let title = document.createElement("p");
    title.innerText = "Title :"+ele["strMeal"];
    let cata = document.createElement("p");
    cata.innerText = "Catagorie :"+ele["strCategory"];
    let area = document.createElement("p");
    area.innerText = "Area :"+ele["strArea"];
    let mealId = document.createElement("p");
    mealId.innerText = "MealID :"+ele["idMeal"];
      card.append(img,title,mealId,cata,area);
       ctn.appendChild(card);
});
 }

btn.addEventListener('click',()=>{
    display();
})


 
 

