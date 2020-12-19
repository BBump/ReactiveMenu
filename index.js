// Build out a Diner menu in JAVASCRIPT. Here are your instructions to build that Diner.
// Bottega Diner
// Have the Main Menu and a Sides Menu
// You get one entree and two side choices at regular cost.
// - show them the entire menu (print out)
// - A user selects an entree.
// - “Waitress” makes a comment based on their selection
// - comment can either be a comparison of the two items, or random comment pulled from a comment vault.
// - Tell them the price
// - repeat the above options for side choices (comment and a price)
// - total up the cost

// BONUS
// Have breakfast, lunch, and dinner menu. Breakfast has different items, lunch and dinner have the same items but are different prices.

// BONUS: Allow for item customization (how items are prepared, decide additional cost implications) 

//list of menu items (breakfast)

const breakfastMenu = [
    {
        name: 'steak and eggs',
        price: 12,
        hasSides: true
    },
    {
        name: 'buscuits and gravy',
        price: 10,
        hasSides: true
    }
]
const sidesMenu = [
    {
        name: "fruit bowl",
        price: 2,
        avail: true
    },
    {
        name: '2 slices bacon',
        price: 2,
        avail: true
    }
];
let total = 0;
// total = 
let globalMenuItem = null;
let globalSideItem = null;

const prettyEntreeMenu = breakfastMenu.map((eitem, index) => `${index + 1}: ${eitem.name} $${eitem.price}`).join("\n");

const prettySideMenu = sidesMenu.map((sitem, index) => `${index + 1}: ${sitem.name} $${sitem.price}`).join("\n");

function greeting() {
    alert("Welcome to my diner");
    alert("Here is our menu");
    alert(prettyEntreeMenu);
    entreeSelection();
};

function entreeSelection() {
  let entreeSelection = prompt("What would you like me to get you?");

  entreeSelection = parseInt(entreeSelection)
  console.log(entreeSelection)
  while (entreeSelection < 0 || entreeSelection > breakfastMenu.length || isNaN(entreeSelection)) {
    entreeSelection = prompt("Please Try Again")
  }

  entreeSelection = entreeSelection - 1;
  const menuItem = breakfastMenu[entreeSelection];
  globalMenuItem = breakfastMenu[entreeSelection];
  if (menuItem.hasSides == true) {
    sideSelection()
  }; 
    // console.log('this shows up')
};

function sideSelection() {
  alert(prettySideMenu)
  // console.log('this shows up next')
  let sideSelection = prompt("And what side can I get you?")
  
  while (sideSelection < 0 || sideSelection > sidesMenu.length || isNaN(sideSelection)) {
    sideSelection = prompt("please try again")
  };

  sideSelection = sideSelection - 1;
  const sideItem = sidesMenu[sideSelection];
  globalSideItem = sidesMenu[sideSelection];
  if (sideItem.avail == true ) {
    alert(`Alright I have ${globalMenuItem.name} with a side of ${globalSideItem.name}.`)
    orderTotal()
  };

  // console.log('this shows up last')
}
//broken
function orderTotal() {
  total = globalMenuItem.price + globalSideItem.price
  alert(`Your total will be $${total}`)
}
greeting()
