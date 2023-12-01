// const handleBlogpostEdit = async (event) => {
//   event.preventDefault();

//   const post = document.querySelectorAll(".blog-post");

//   for (let i = 0; i < post.length; i++) {
//     console.log(post[i].dataset.index);
//   }
// };

// document
//   .querySelector(".blog-post")
//   .addEventListener("click", handleBlogpostEdit);

const post = document.querySelectorAll(".blog-post");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let buttonClicked = event.target;
    console.log(buttonClicked.innerText);

    if (buttonClicked.innerText === "Edit") {
      console.log();
    } else if (buttonClicked.innerText === "Delete") {
      //
    }
  });
});
