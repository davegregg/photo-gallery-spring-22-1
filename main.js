// https://picsum.photos/seed/{picsum}/200/300

let defaultWidth = 200
let defaultHeight = 200
let imageCount = 12

let generateRandomImageURL = function (height, width) {
    return `https://picsum.photos/seed/${Math.random()}/${height}/${width}`
}

// 1. Loop "imageCount" times
// 2. Each time, create a new <img> element
// 3. Add a randomly-generated image URL to the <img> element's "src" attribute.
// 4. Add that new <img> element to an element which is already on the page (parent element).
// 5. Tweak CSS styles to taste.

let galleryContainer = document.querySelector("#gallery")

for (let count = 0; count < imageCount; count += 1) {
    let url = generateRandomImageURL(defaultHeight, defaultWidth)

    // First, we're creating the ornament we want to create.
    let imgElement = document.createElement("img")

    // Then we style and add content to the ornament however we want.
    imgElement.src = url  // imgElement.setAttribute("src", url)
    imgElement.alt = "Randomly-selected photograph."
    imgElement.classList.add("gallery-image")

    // Then we decide what existing tree branch we want to add
    // the ornament to:
    // SEE THE querySelector LINE IMMEDIATELY ABOVE THIS LOOP.
    // WE MOVED IT THERE TO OPTIMIZE PERFORMANCE, BECAUSE
    // WE DON'T WANT TO SEARCH THE ENTIRE DOM MORE TIMES THAN
    // NECESSARY.

    // Finally, we hang the new styled ornament on the branch.
    galleryContainer.append(imgElement)

    console.log(imgElement)
}
