
const arry = document.querySelectorAll(".item");
console.log(`Number of categories: ${arry.length}`);

for (const item of arry) {
    console.log(`Category: ${item.querySelector("h2").textContent}`);
    console.log(`Elements: ${item.querySelectorAll("li").length}`);
}



