const cors = "https://boiling-mountain-84087.herokuapp.com/"



//Pulling in the main div where the quote and image will be contained
const mainDiv = document.querySelector(".image_quote")
//Pullin in small div where the image will be contained
const smallDiv = document.querySelector(".image")
//Pullin in small div where the quote wil be contained
const quoteDiv = document.querySelector("#quote")
//Pulling in the button that will generate a new quote and image upon clicking
const newQuoteBtn = document.querySelector(".quoteBtn")


async function getPicture() {
  const url = `${cors}https://pixabay.com/api/?key=24204891-57a8cc1bc012d56e30061d5e7&q=nature&image_type=photo`
  try {
    const res = await axios.get(url);
    console.log(res);
    let naturePic = res.data.hits[0].largeImageURL
    // naturePic = `${cors}${naturePic}`
    console.log(naturePic)
    // console.log(typeof naturePic)
    naturePic = [naturePic];
    // console.log(typeof naturePic)
    console.log(naturePic)
    showImage(naturePic);
  } catch (error) {
    console.log(error)
  }
}

function showImage(naturePic) {
  let pic = document.createElement('img')
  pic.src = naturePic;
  smallDiv.appendChild(pic)
  console.log(naturePic);
}



// Function that will pull out information from the Zen Quote API
async function getQuote() {
  const url2 = `${cors}https://zenquotes.io/api/random`
  try {
    const res2 = await axios.get(url2);
    console.log(res2);
    // Getting the actual quote that was generated
    const quoteBlock = res2.data[0].q
    console.log(quoteBlock)
    // Calling the function showQuote run for the quoteBlock
    showQuote(quoteBlock);
    // Getting the author of the quote that was generated
    const author = res2.data[0].a
    console.log(author)
    //Calling the function showQuote to run for the author
    showQuote(author)
  } catch (error) {
    console.log(error)
  }
}



// Function that will create two p elements and append them to the quoteDiv
function showQuote(quoteBlock) {
  // Creating the p element
  let quoteEnter = document.createElement('p')
  // Giving the inner text of the new p element a value
  quoteEnter.innerText = `${quoteBlock}`
  // Appending the new p element to the quoteDiv
  quoteDiv.appendChild(quoteEnter)
}


// Adding event listener to button that will generate new image and quote
newQuoteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("new request");
  getQuote();
  getPicture();
})
