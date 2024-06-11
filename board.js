const items = document.getElementsByClassName("item");
const boards = document.querySelectorAll(".board");
console.log(items.length);

// This doesn't work because -
// https://stackoverflow.com/questions/3871547/iterating-over-result-of-getelementsbyclassname-using-array-foreach
// items.forEach((item) => {
//   console.log(item);
// });

Array.prototype.forEach.call(items, function (item) {
  // Do stuff here
  item.addEventListener("dragstart", (e) => {
    item.classList.add("is-dragging");
  });
  item.addEventListener("dragend", (e) => {
    item.classList.remove("is-dragging");
  });
});

// for (const item of items) {
//   console.log(item);
// }

// Array.prototype.forEach.call(boards, function (board) {});

for (const board of boards) {
  board.addEventListener("dragover", (e) => {
    // This won't work for newly added task as it doesn't have is-dragging class
    // because the event listener is only added when page is loaded at first
    const item = document.querySelector(".is-dragging");
    board.appendChild(item);
  });
  //   console.log(board);
}
