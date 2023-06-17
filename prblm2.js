let lengthOfSquare = 180;
let numberOfPhotos = 3;
let photos = [
    {width: 640, height: 480}, 
    {width: 120, height: 300}, 
    {width: 180, height: 180} 
];

for (let i = 0; i < numberOfPhotos; i++) {

    let width = photos[i].width;
    let height = photos[i].height;

    if (width < lengthOfSquare || height < lengthOfSquare) {
        console.log("UPLOAD ANOTHER");
    } else if (width === height) {
        console.log("ACCEPTED");
    } else {
        console.log("CROP IT");
    }
}