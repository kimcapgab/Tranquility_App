//Pulling in the main div where the quote and image will be contained
const mainDiv = document.querySelector(".image_quote")
//Pullin in small div where the image will be contained
const smallDiv = document.querySelector(".image")
//Pullin in image class
let picture = document.querySelector('.picture_nat')
//Pulling in the button that will generate a new quote and image upon clicking
const newQuoteBtn = document.querySelector("quoteBtn")

// getPicture();


// async function getPicture() {
//   const url = "https://pixabay.com/api/?key=24204891-57a8cc1bc012d56e30061d5e7&q=nature&image_type=photo"
//   try {
//     const res = await axios.get(url);
//     console.log(res)
//     const naturePic = res.data.hits[0].pageURL
//     console.log(naturePic)
//     showImage(naturePic);
//   } catch (error) {
//     console.log(error)
//   }
// }



// function showImage(naturePic) {
//   //   let pic = document.createElement('img');
//   //   pic.src = image;
//   //   smallDiv.append(pic)
//   console.log(naturePic);
//   picture.src = naturePic;
//   console.log(picture)
//   smallDiv.append(picture);
// }
//Adding event listener to button that will generate new image and quote
// newQuoteBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("new request");
//   getPicture();
// })
