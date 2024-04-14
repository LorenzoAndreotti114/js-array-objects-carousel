function littleCardCreator (array) {

    for (let x = 0; x < array.length; x++) {
        
        document.getElementById("caroselBottom").innerHTML +=
        `
        <div class="little-card-container" id="littleCard">
            <button class="card-btn" id="btn${x}">
                <img src="./${array[x]["image"]}" alt="">
            </button>
        </div>
        
        `

    }

}

function bigCardSelector (array, imageNumber) {
        
    document.getElementById("caroselTop").innerHTML =
    `
    <div class="big-card-container fade" id="bigCard">

        <!-- IMG -->
        <img src="./${array[imageNumber]["image"]}" alt="">

        <!-- TEXT -->
        <div class="big-card-text">
            <h2>${array[imageNumber]["title"]}</h2>

            <div class="f-size">${array[imageNumber]["text"]}</div>
        </div>

    </div>

    `
}

function slideChangerBtn (currentImg, array) {

    document.getElementById("caroselTop").innerHTML =
    `
    <div class="big-card-container fade" id="bigCard">

        <!-- IMG -->
        <img src="./${array[currentImg]["image"]}" alt="">

        <!-- TEXT -->
        <div class="big-card-text">
            <h2>${array[currentImg]["title"]}</h2>

            <div class="f-size">${array[currentImg]["text"]}</div>
        </div>

    </div>
    `


}
