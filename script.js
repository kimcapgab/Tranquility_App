//Pulling in the div where the quote and image will be contained
const mainDiv = document.querySelector(".image_quote")
//Pulling in the button that will generate a new quote and image upon clicking
const newQuoteBtn = document.querySelector("quoteBtn")

//Adding event listener to button that will generate new image and quote
// newQuoteBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("new request");
//   getPicture();
// })

// function showImage(img) {

//   let smallDiv = document.createElement('div')
//   smallDiv.classList.add("image")
//   mainDiv.append(smallDiv);
//   let pic = document.createElement("img");
//   pic.src = img
//   smallDiv.append(pic)
// }



async function getPicture() {
  const url = "https://pixabay.com/api/?key=24204891-57a8cc1bc012d56e30061d5e7&q=nature&image_type=photo"
  try {
    const res = await axios.get(url);
    console.log(res)
    const naturePic = res.data.hits[0].pageURL
    console.log(naturePic)
  } catch (error) {
    console.log(error)
  }
}

getPicture();