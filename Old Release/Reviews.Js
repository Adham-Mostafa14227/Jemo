let Reviews = [];
let ReviewsDiv = document.querySelector('.Reviews');
let ReviewInput = document.querySelector('#ReviewInput');
let ReviewInputSend = document.querySelector('#SendBtn');
let ReviewLabel = document.querySelector('#ReviewLabel');

function RenderReviews() {
    const ExistingList = document.querySelector('.HasElements');
    if (ExistingList) ExistingList.remove();
    
    if (Reviews.length === 0) {
        ReviewLabel.innerText = "No Reviews";
        return;
    }

    ReviewLabel.innerText = "";
    let ReviewsHasElements = document.createElement('div');
    ReviewsHasElements.className = 'HasElements';
    ReviewsDiv.appendChild(ReviewsHasElements);

    for (const Item of Reviews) {
        let NewDiv = document.createElement('div');
        let NewReview = document.createElement('p');

        NewDiv.className = 'Review';
        NewReview.innerText = Item;

        NewDiv.appendChild(NewReview);
        ReviewsHasElements.appendChild(NewDiv);
    }
}

RenderReviews();

ReviewInputSend.addEventListener("click", () => {
    if (ReviewInput.value.trim() !== "") {
        Reviews.push(ReviewInput.value);
        ReviewInput.value = "";
        RenderReviews();
    }
});

ReviewInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        ReviewInputSend.click();
    }
});