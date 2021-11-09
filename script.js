const cors = "https://boiling-mountain-84087.herokuapp.com/"



//Pulling in the main div where the quote and image will be contained
const mainDiv = document.querySelector(".image_quote")
//Pullin in small div where the image will be contained
const smallDiv = document.querySelector(".image")
//Pullin in small div where the quote wil be contained
const quoteDiv = document.querySelector("#quote")
//Pulling in the button that will generate a new quote and image upon clicking
const newQuoteBtn = document.querySelector("quoteBtn")

// getPicture();

// async function getPicture() {
//   const url = `${cors}https://pixabay.com/api/?key=24204891-57a8cc1bc012d56e30061d5e7&q=nature&image_type=photo`
//   try {
//     const res = await axios.get(url);
//     console.log(res);
//     let naturePic = res.data.hits[0].largeImageURL
//     // naturePic = `${cors}${naturePic}`
//     console.log(naturePic)
//     // console.log(typeof naturePic)
//     naturePic = [naturePic];
//     // console.log(typeof naturePic)

//     console.log(naturePic)
//     showImage(naturePic);
//   } catch (error) {
//     console.log(error)
//   }
// }

// function showImage(naturePic) {
//   let pic = document.createElement('img')
//   pic.src = naturePic;
//   smallDiv.appendChild(pic)
//   console.log(naturePic);
//   // picture.src = naturePic;
//   // console.log(picture)
//   // smallDiv.append(picture);
// }




async function getQuote() {
  const url2 = `${cors}https://zenquotes.io/api/random`
  try {
    const res2 = await axios.get(url2);
    console.log(res2);
    // const naturePic = res.data.hits[0].pageURL
    // console.log(naturePic)
    // showImage(naturePic);
  } catch (error) {
    console.log(error)
  }
}

getQuote();













//Adding event listener to button that will generate new image and quote
// newQuoteBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("new request");
//   getPicture();
// })
