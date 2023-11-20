const searchingBackgroundColors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
// --------- KHOI TAO MAU MAC DINH CHO PHAN TIM KIEM ---------


// -------- SET MAU CHO CAC THE GOI Y CUA PHAN TIM KIEM ------
function backGroundColorSearching() {
    const elements = document.querySelectorAll('.searching-section');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = searchingBackgroundColors[Math.floor(Math.random() * searchingBackgroundColors.length)];
    }
}



function searchingDisplay() {
    let searching = document.querySelector(".searching");
    let searchingSection = document.querySelector(".searching-recommend");
    let colorSearching = document.querySelectorAll('.searching-section');
    let searchingPart = document.querySelector(".searching-part");
    searchingPart.style.display = "block";
    searching.style.display = "flex";
    searchingSection.style.display = "flex";
    backGroundColorSearching();
}

function nonSearchingDisplay() {
    let searching = document.querySelector(".searching");
    let searchingSection = document.querySelector(".searching-recommend");
    let searchingPart = document.querySelector(".searching-part");
    searchingPart.style.display = "none";
    searching.style.display = "none";
    searchingSection.style.display = "none";
}



function showUserAction() {
    let user = document.getElementById("user");
    if (user.style.display === 'none') {
        user.style.display = 'block';
    } else {
        user.style.display = 'none';
    }
}





