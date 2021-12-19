
    const infoArray = [
        {
            id: 0,
            img: "images/sundar pichai.jpg",
            name: "Sundar Pichai",
            designation: "CEO",
            review: "It is okay to feel insecure since it is a basis for improvement and growth. If you were perfect you wouldn’t improve yourself. Insecurity will always help you to grow as an individual from time to time."

        },
        {
            id: 1,
            img: "images/satya nadella.jpg",
            name: "Satya Nadella",
            designation: "CTO",
            review: "I discovered Buddha did not set out to found a world religion. He set out to understand why one suffers. I learned that only through living life’s ups and downs can you develop empathy; that in order not to suffer, or at least not to suffer so much, one must become comfortable with impermanence."
        },
        {
            id: 2,
            img: "images/deepinder goyal.jpg",
            name: "Deepinder Goyal",
            designation: "CFO",
            review: "The fundamental model of our business is that in mature markets we should make profits and they shouldn't need any more outside money to grow. The fundamental model of our business is that in mature markets we should make profits and they shouldn't need any more outside money to grow."
        },
        {
            id: 3,
            img: "images/vijay sharma.jpg",
            name: "Vijay Sharma",
            designation: "Intern",
            review: "I think I’ve been lucky that in my life I had to take risks without even thinking of downfalls because I did not start with a lot of things that I could have lost"
        },
    ]

    let supriseBtn = document.querySelector("#sm-btn");
    console.log(supriseBtn);
    let rightBtn = document.querySelector("#right-nav");
    let leftBtn = document.querySelector("#left-nav");
    let name = document.querySelector("#name");
    let desig = document.querySelector("#desig");
    let img = document.querySelector("#img");
    let review = document.querySelector("#review");
    console.log(img);
    
    let count = 0;
    console.log("after count" + count);
    window.addEventListener("DOMContentLoaded", function () {
        showInfo("");
        console.log("in window " + count);
    });
    function showInfo(whichNav) {
        console.log(infoArray.length);
        if (whichNav === "right") {
            count++;
            console.log("in right if");
        }
        if (whichNav === "left") {
            count--;
        }
        if (count === infoArray.length) {
            count = 0;
            console.log("in if 1");
        }
        if (count === -1) {
            count = 3;
            console.log("in if 2");
            console.log("in show info " + count);
            savedCount = infoArray[count];
            img.src = savedCount.img;
            name.textContent = savedCount.name;
            desig.textContent = savedCount.designation;
            review.textContent = savedCount.review;
        }
        else {
            console.log("in show info " + count);
            savedCount = infoArray[count];
            img.src = savedCount.img;
            name.textContent = savedCount.name;
            desig.textContent = savedCount.designation;
            review.textContent = savedCount.review;
        }
        
    }
    // function randomNum(){
        //     return Math.floor(Math.random()*3);
        //     }

        function rightNav() {
            showInfo("right");
        }
    function leftNav() {
        showInfo("left");
    }
    function supriseMe(){
        console.log("in sm/");
        count=Math.floor(Math.random()*3);
        showInfo("im");
        };
    rightBtn.addEventListener("click", rightNav);
    leftBtn.addEventListener("click", leftNav);
    supriseBtn.addEventListener("click", supriseMe);
    
// window.onload = onload();