

const btn = searchbtn = ()=>{
    let input = document.getElementById('input');
    let inputvalue = input.value;
     input.value='';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s= ${inputvalue}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaymeal(data.meals))
}
displaymeal = (meals)=>{
    let section = document.getElementById('section');
    section.innerHTML = '';
    for( let meal of meals){
    console.log(meal);
    const div = document.createElement('div');
    div.innerHTML=`
    <img onclick="mealid(${meal.idMeal})" width="300px" src="${meal.strMealThumb}"/>
    <h3>${meal.strMeal}</h3>
    <p>${meal.strInstructions}</p>


    `
    div.classList.add('item')
    section.appendChild(div);
}
}

mealid = id =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => iddetals(data.meals[0]))
}

iddetals = detaels =>{
    console.log(detaels);
    const div = document.createElement('div');
    
    div.innerHTML=`
    <img width="800px" src="${detaels.strMealThumb}"/>
    <h2>${detaels.strMeal}</h2>
    <p>${detaels.strInstructions}</p>
    `
    div.classList.add('detael')
    const section1= document.getElementById('section1');
    section1.innerHTML = '';
    section1.appendChild(div)

   
}


