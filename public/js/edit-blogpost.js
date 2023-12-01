// const post = document.querySelectorAll(".blog-post");
// const buttons = document.querySelectorAll("button");

// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     let buttonClicked = event.target;
//     let postIndex = buttonClicked.parentElement.parentElement.dataset.index;

//     if (buttonClicked.innerText === "Edit") {
//       let saveBtnEl = document.querySelector(".save-btn");
//       saveBtnEl.addEventListener("submit", saveHandler(event));
//     } else if (buttonClicked.innerText === "Delete") {
//       handleBlogPostDelete(
//         buttonClicked.parentElement.parentElement.dataset.index
//       );
//     }
//   });
// });

// const saveHandler = async (event, index) => {
//   event.preventDefault();

//   const newTitle = document.querySelector("#title-edit").value.trim();
//   const newContent = document.querySelector("#content-edit").value.trim();
//   console.log(index);
//   console.log(newTitle);
//   console.log(newContent);
// };

// const handleBlogPostDelete = (index) => {
//   //
// };
