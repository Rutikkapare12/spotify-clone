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
