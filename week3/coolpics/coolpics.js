const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const gallery = document.querySelector(".gallery");
// functions
function toggleMenu(){
    menu.classList.toggle("hide");
}
function handleResize(){
    if (window.innerWidth > 1000){
        menu.classList.remove("hide");
    }
    else {
        menu.classList.add("hide");
    }
}
function viewerTemplate(imagePath, altText){
    return `
    <div class="viewer">
        <button class="close-viewer">X</button>
        <img src=${imagePath} alt=${altText}>
    </div>`
}
function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    let clicked = event.target;
	// get the src attribute from that element and 'split' it on the "-"
    let source = clicked.src;
    let cutSource = source.split("-", 1);
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    let newImageName = cutSource+="-full.jpeg";
	// insert the viewerTemplate into the top of the body element
	//(element.insertAdjacentHTML("afterbegin", htmltoinsert))
    const body = document.querySelector("body");
    body.insertAdjacentHTML("afterbegin", viewerTemplate(newImageName, "bigger image"));
	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    document.querySelector(".close-viewer").addEventListener("click", closeViewer);
}
function closeViewer(event) {
    const viewer = document.querySelector(".viewer");
    viewer.remove();
}
// event listeners
menuButton.addEventListener("click", toggleMenu);
window.addEventListener("resize", handleResize)
gallery.addEventListener("click", viewHandler)

window.handleResize();