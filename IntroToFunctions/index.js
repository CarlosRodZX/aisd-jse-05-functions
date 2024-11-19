// Step 1: Creating a Function Declaration to greet the user 

function greetUser() {

  console.log("Hello, User!");

}

greetUser(); // Expected Output: Hello, User!



// Step 2: Creating an arrow function to greet the user 

const greetUserArrow = () => {
  console.log("Hello, User!")

}

greetUserArrow(); // Expected Output: Hello, User!

// Step 3: Creating a function to greet each name in an array 

function greetEveryone() {

    const names = ["Alice", "Bob", "Charlie"];

    for (let i = 0; i < names.length; i++) {

      console.log("Hello, " + names[i] + "!");
    }
}

greetEveryone(); // Expected Output: "Hello, Alice!", "Hello, Bob!", "Hello, Charlie!"

// Step 4: Creating an Arrow function to greet each name in an array

const greetEveryoneArrow = () => {
  const names = ["Alice", "Bob", "Charlie"];

  for (let i = 0; i < names.length; i++) {
    console.log("Hello, " + names[i] + "!")
  }
}


greetEveryoneArrow(); // Expected Output: "Hello, Alice!", "Hello, Bob", "Hello, Charlie!"

const displayMyFavoriteColors = () => {
    const colors = ["Red", "Blue", "Yellow"];

    for (let i = 0; i < colors.length; i++) {
      console.log("I like " + colors[i] + "!")
    }
}

displayMyFavoriteColors();




const myFavoriteFoods = () => {

  const food = ["Pasta", "Pizza", "Sushi"];

  for (let i = 0; i < food.length; i++) {
    console.log("I love eating " + food[i] + "!")
  }
}

myFavoriteFoods();