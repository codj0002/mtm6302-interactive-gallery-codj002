/*
--------------------------------------
STEP 1
Create an array of objects that store
the gallery image information.

Each object contains:
- thumbnail image
- HD image
- caption text
--------------------------------------
*/

const images = [

{
thumb:"https://picsum.photos/id/1011/400/300",
hd:"https://picsum.photos/id/1011/1200/800",
caption:"Mountain landscape"
},

{
thumb:"https://picsum.photos/id/1015/400/300",
hd:"https://picsum.photos/id/1015/1200/800",
caption:"Beautiful river view"
},

{
thumb:"https://picsum.photos/id/1016/400/300",
hd:"https://picsum.photos/id/1016/1200/800",
caption:"Snowy mountains"
},

{
thumb:"https://picsum.photos/id/1020/400/300",
hd:"https://picsum.photos/id/1020/1200/800",
caption:"Forest road"
},

{
thumb:"https://picsum.photos/id/1024/400/300",
hd:"https://picsum.photos/id/1024/1200/800",
caption:"Cute dog portrait"
},

{
thumb:"https://picsum.photos/id/1025/400/300",
hd:"https://picsum.photos/id/1025/1200/800",
caption:"Parrot close-up"
},

{
thumb:"https://picsum.photos/id/1035/400/300",
hd:"https://picsum.photos/id/1035/1200/800",
caption:"Beach sunset"
},

{
thumb:"https://picsum.photos/id/1037/400/300",
hd:"https://picsum.photos/id/1037/1200/800",
caption:"Foggy forest"
},

{
thumb:"https://picsum.photos/id/1040/400/300",
hd:"https://picsum.photos/id/1040/1200/800",
caption:"Desert landscape"
},

{
thumb:"https://picsum.photos/id/1050/400/300",
hd:"https://picsum.photos/id/1050/1200/800",
caption:"Waterfall scenery"
},

{
thumb:"https://picsum.photos/id/1060/400/300",
hd:"https://picsum.photos/id/1060/1200/800",
caption:"Mountain lake"
},

{
thumb:"https://picsum.photos/id/1074/400/300",
hd:"https://picsum.photos/id/1074/1200/800",
caption:"Ocean waves"
}

]

/*
--------------------------------------
STEP 2
Select important elements from HTML
--------------------------------------
*/

const gallery = document.getElementById("gallery")
const lightbox = document.getElementById("lightbox")
const lightboxImg = document.getElementById("lightbox-img")
const caption = document.getElementById("caption")


/*
--------------------------------------
STEP 3
Loop through the images array
and dynamically create <img> elements
--------------------------------------
*/

images.forEach((image)=>{

const img = document.createElement("img")

/* set thumbnail source */
img.src = image.thumb

/* store HD image in data attribute */
img.dataset.hd = image.hd

/* store caption in data attribute */
img.dataset.caption = image.caption

/* append image to gallery */
gallery.appendChild(img)

})


/*
--------------------------------------
STEP 4
Event Delegation

Instead of adding click events
to every image, we add ONE event
listener to the gallery container.

Then we check which image
the user clicked.
--------------------------------------
*/

gallery.addEventListener("click",(event)=>{

/* ensure the clicked element is an image */

if(event.target.tagName === "IMG"){

/* display HD image */
lightboxImg.src = event.target.dataset.hd

/* display caption */
caption.textContent = event.target.dataset.caption

/* show lightbox */
lightbox.classList.remove("hidden")

}

})


/*
--------------------------------------
STEP 5
Close the lightbox

When the user clicks the HD image
or the overlay, the preview disappears
--------------------------------------
*/

lightbox.addEventListener("click",()=>{

lightbox.classList.add("hidden")

})