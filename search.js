// random color
    const colorContainerE1s = document.querySelectorAll(".box-container");

    generateColors();
    function generateColors() {

        colorContainerE1s.forEach((colorContainerE1) => {
            const newColorCode = randomColor();
            colorContainerE1.style.
                backgroundColor = "#" + newColorCode;
        });
    }
    function randomColor() {
        const chars = "1234567890abcdef";
        const colorCodeLength = 6;
        let colorCode = ""
        for (let index = 0; index < colorCodeLength; index++) {
            const randomNum = Math.floor(Math.random() *
                chars.length);
            colorCode += chars.substring(randomNum, randomNum + 1);
            console.log(colorCode, randomNum);
        }
        return colorCode;
    }


    // random image

    
const imageContainerEl=document.querySelector(".box-image");

btnEl.addEventListener("click",()=>{
     imageNum=10;
    addNewImages()
});

    function addNewImages(){
        for (let index = 0; index < imageNum; index++) {
            const newImgEl = document.createElement("img")
        newImgEl.src = `https://picsum.photos/300?random=${Math.floor(
            Math.random() * 2000
        )}`;
        imageContainerEl.appendChild(newImgEl)
            
        }
        

    }
    


