
//The purpose of this Lab is to get a solid understanding of the .filter() and .map() advanced array methods.
//These methods will be used extensively on future projects


//Dataset
let dishes = [
    {
        "id": 1,
        "name": "Pizza",
        "cuisine": "Italian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 2,
        "name": "Spaghetti",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 3,
        "name": "Ravioli",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 4,
        "name": "Enchiladas",
        "cuisine": "Mexican",
        "servings": 6,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 5,
        "name": "Tacos",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 6,
        "name": "Burrito Supreme",
        "cuisine": "Mexican",
        "servings": 1,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 7,
        "name": "Elote",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["corn", "cheese"]
    },
    {
        "id": 8,
        "name": "Crepes",
        "cuisine": "French",
        "servings": 1,
        "ingredients": ["flour", "sugar"]
    },
    {
        "id": 9,
        "name": "Corned Beef & Cabbage",
        "cuisine": "Irish",
        "servings": 10,
        "ingredients": ["beef", "cabbage"]
    },
    {
        "id": 10,
        "name": "Beef Stew",
        "cuisine": "Irish",
        "servings": 8,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 11,
        "name": "Lasagna",
        "cuisine": "Vegetarian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 12,
        "name": "Falafel",
        "cuisine": "Vegetarian",
        "servings": 1,
        "ingredients": ["chickpea", "parsley"]
    },
    {
        "id": 13,
        "name": "Chili",
        "cuisine": "Vegetarian",
        "servings": 13,
        "ingredients": ["tomato", "chickpea"]
    },
    {
        "id": 14,
        "name": "Goulash",
        "cuisine": "Hungarian",
        "servings": 15,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 15,
        "name": "Pho",
        "cuisine": "Vietnamese",
        "servings": 4,
        "ingredients": ["beef", "ginger"]
    },
]

//Example function
//IMPORTANT: Take the time to step through this example function with a breakpoint until you could explain what is going on to someone else before starting this lab.

//function filterExample(){
    //Debug tip: Use a console.log(el) inside the filter function to get a visualization of what el represents and see all its properties! This helps you to know what you can access with dot notation inside the filter. Do this every time you use a .filter or else you are working in the dark!
//    let results;
//    results = dishes.filter(function(el){
//        console.log("el inside filterExample's filter: ", el)
//        if(el.cuisine === "Mexican"){
//            return true;
//        }
//        else{
//            return false;
//        }})

//    return results;
//}

//let mexicanFood = filterExample();
//console.log('mexicanFood from filterExample', mexicanFood)



//Reminder: Do not move on to problem one until understand the example completely!!
//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter

//function problemOne(){

//    let results = dishes.filter(
//        function(el){
//            if(el.cuisine === "Vegetarian"){
//                return true;
//            }
//
//        }
//    )

 //   return results;
//}
//problemOne()




//2. Create a function that will prompt the user to enter a cuisine type and then return all dishes that match that type
//Filter
//function dishesUserInput(){
//    let userInput = prompt(`Please Enter a Selection of Dish from Choices `)
//    let results = dishes.filter(
//        function (el){
//            if(userInput === el.cuisine){
//                return true;
//            }
//        }
//    );
//    return results;
//}

//console.log(dishesUserInput());







//3. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter
//function dishesItaland5Serve (){
//    let results = dishes.filter(
//        function(item){
//            if(item.cuisine === "Italian" && item.servings > 5){
//                return true;
//            }
//        }
//    );

//    return results;
//}

//console.log(dishesItaland5Serve())





//4. Create a function that will return only dishes whose id number matches their serving count.
//Filter

//function dishesIdAndServ (){
//    let results = dishes.filter(
//        function(item){
//            if(item.cuisine = item.id === item.servings){
//                return true
//            }
//        }
//    );
//    return results;
//}

//console.log(dishesIdAndServ())




//5. Create a function that will return only dishes whose serving count is even.
//Filter
//function servingCountEven(){
//    let results = dishes.filter(
//        function(item){
//            if(item.servings % 2 ===0){
//                return true
//            }
//        }
//    );
//    return results;
//}
 //console.log(servingCountEven())




 //6. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Double Hint: Research 'javascript does array include item'
//Filter

//function inclChickpea(){
//    let results = dishes.filter(
//        function(dish){
//            if(dish.ingredients.includes("chickpea")){
//                return true
//            }
//        }
//    );
//    return results;
//}
//console.log(inclChickpea())




//7. Create a function that will prompt the user to type the name of one ingredient. Then use a filter to find all the dishes whose ingredients array INCLUDES that ingredient. Return the new array.
//Filter

//function ingUserInput(){
//    let userInput = prompt(`Please Enter a Certain Ingredient for me to look for!`)
//    let results = dishes.filter(
//        function(item){
//            if(item.ingredients.includes(userInput)){
//                return true;
//            }
//        }
//    );
//    return results;

//}
//console.log(ingUserInput())




//8a. Create a function that will return an array of the string cuisine types. Ie, ["Italian", "Italian", "Mexican", ...]
//Map
//function cuisineTypes(dishesArray){
//    let results = dishesArray.map(function(el){
//        return el.cuisine;
//    });
//    return results
//}

//console.log(cuisineTypes(dishes))



//9. Create a function that will return an array of strings, with the cuisine type appended to the start of the dish's name. Ie, ["Italian Pizza", "Italian Spaghetti", ...]
//Map 

//function addCuisineName(dishesArray){
//    let results = dishesArray.map(function(el){
//        return el.cuisine + " " + el.name;
//    });
//    return results;
//}

//console.log(addCuisineName(dishes))



//10. Create a function that will use advanced array methods on the 'dishes' array and return the result ["Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"]

//function advancedCuisineName(dishesArray){
//    let filteredCuisine = dishesArray.filter(function(el){
//        if(el.cuisine === "Vegetarian")
//        return true

//        else {
//            return false
//        }
//    });
//   let results = filteredCuisine.map(function(el){
//        return el.cuisine + " " + el.name;
//    });
    
//    return results;
//}

//console.log(advancedCuisineName(dishes))



//BONUS

//8b. Use the filter method to eliminate duplicate from problem 8a.

//function cuisineTypes(dishesArray){
//    let filteredCuisine = dishesArray.sort(function(el)){
//
//        let results = filteredCuisine.map(function(el){
//        return el.cuisine;
//    })
//    };
//    
//    return results;
//}
//console.log(cuisineTypes(dishes))
    
//11. Create a function that will return dishes whose ingredients array INCLUDES "tomato" OR "cheese".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter
//function ingInclude(){
//    let results = dishes.filter(
//        function(item){
//            if(item.ingredients.includes("tomato" || "cheese")){
//                return true;
//            }
//        }
//    );
//    return results
//}
//console.log(ingInclude())



//12. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.

//13. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.
