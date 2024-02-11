const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

//Filter fruits based on input
function search(str) {
  let results = fruit.filter((fruit) =>
    fruit.toLowerCase().includes(str.toLowerCase())
  );
  return results;
}
//Set this outside of the search function so it doesn't repeatedly get attached.
input.addEventListener("input", (evt) => {
  const inputValue = evt.target.value;
  const filtered = search(inputValue); //Use current input value as the search
  showSuggestions(filtered, inputValue);
});

function showSuggestions(results, inputVal) {
  const suggestionDropDown = document.querySelector(".suggestions");
  const suggestionsList = document.querySelector("ul");
  suggestionsList.innerHTML = ""; //clears any existing suggestions

  //Only show if we have inputvalue and results
  if (inputVal.trim() && results.length > 0) {
    suggestionDropDown.style.display = "block";

    results.forEach((fruit) => {
      const li = document.createElement("li");
      const match = new RegExp(`${inputVal}`);
      const newStr = fruit.replace(match, `<strong>${inputVal}</strong>`);
      // li.textContent = fruit;
      li.innerHTML = newStr;
      console.log(newStr);
      suggestionsList.appendChild(li);

      //Adding hover event listener
      li.addEventListener("mouseover", () => {
        li.classList.add("highlight"); //Add highlight class on mouseover
      });
      li.addEventListener("mouseout", () => {
        li.classList.remove("highlight"); //Remove class on mouseout
      });

      //Adding click event to fill input when a suggestion is clicked
      li.addEventListener("click", () => {
        document.getElementById("fruit").value = fruit;
        suggestionsList.innerHTML = ""; //Clear suggestions after selection
        suggestionDropDown.style.display = "none";
      });
    });
  } else {
    suggestionDropDown.style.display = "none";
  }
}


