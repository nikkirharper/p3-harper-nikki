const lunch = [
    {
      text: "Turkey Burger with Cheese",
      img:  "images/burger.jpg",
    },
    {
      text: "Spaghetti with Vegetable Marinara",
      img:  "images/pasta.jpg",
    },
    {
      text: "BBQ Chicken Pizza with Pineapple",
      img:  "images/pizza.jpg",
    },
    {
      text: "Salmon Poke Bowl",
      img:  "images/poke.jpg",
    },
    {
      text: "Black Bean & Corn Quesadilla",
      img:  "images/quesadilla.jpg",
    },
    {
       text: "Shrimp Caesar Salad",
       img:  "images/salad.jpg",
    },
    {
       text: "Italian Sandwich on fresh Baguette",
       img:  "images/sandwich.jpg",
    },
    {
       text: "Tomato Soup with Fresh Basil",
       img:  "images/soup.jpg",
    },
    {
       text: "Dragon Sushi Roll",
       img:  "images/sushi.jpg",
    },
    {
       text: "Chicken Street Tacos",
       img:  "images/tacos.jpg",
    },
  ];
    
    export default class LunchGenerator {
        constructor() {
            this.randomizeLunches(); 
        }

        randomizeLunches() {
                let i, j, k;
                  for (i = lunch.length -1; i > 0; i--) {
                    j = Math.floor(Math.random() * i)
                    k = lunch[i]
                    lunch[i] = lunch[j]
                    lunch[j] = k
                }
        }

        showResult() { 
          document.getElementById('button').addEventListener('click', () => {
            this.randomizeLunches();
            document.getElementById('description').innerHTML = lunch[0].text;
            document.getElementById('lunch-image').src = lunch[0].img;
          });
        }
    }

export const lunchGenerator = new LunchGenerator();