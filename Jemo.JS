const Sections = document.querySelectorAll('#Home, #Products, #Reviews, #Contact');
const NavLinks = document.querySelectorAll('nav a');

const SetActiveNav = (id) => {
    NavLinks.forEach(Link => {
        const IsMatch = Link.getAttribute('href') === `#${id}`;
        Link.classList.toggle('active', IsMatch);
    });
};

const Observer = new IntersectionObserver(
    Entries => {
        Entries.forEach(Entry => {
            if (Entry.isIntersecting) {
                SetActiveNav(Entry.target.id);
            }
        });
    },
    {
        rootMargin: '-10% 0px -50% 0px',
        threshold: 0
    }
);

Sections.forEach(Section => Observer.observe(Section));

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash) {
        const TargetId = window.location.hash.substring(1);
        SetActiveNav(TargetId);
    } else {
        SetActiveNav('Home');
    }
});

const Products = [
    { ImgUrl: 'Products/Pants(Beige).jpg', Label: 'Beige Pants', Price: '300 L.E'},
    { ImgUrl: 'Products/Pants(Black).jpg', Label: 'Black Pants', Price: '300 L.E' },
    { ImgUrl: 'Products/Pants(BlueNavy).jpg', Label: 'Blue Navy Pants', Price: '300 L.E' },
    { ImgUrl: 'Products/T-Shirt(Gray).jpg', Label: 'Gray T-Shirt' , Price: '500 L.E'},
    { ImgUrl: 'Products/T-Shirt(LightGreen).jpg', Label: 'Light Green T-Shirt' , Price: '500 L.E'},
    { ImgUrl: 'Products/T-Shirt(NavyBlue).jpg', Label: 'Navy Blue T-Shirt' , Price: '500 L.E'},
    { ImgUrl: 'Products/T-Shirt(Red).jpg', Label: 'Red T-Shirt', Price: '500 L.E' },
    { ImgUrl: 'Products/T-Shirt(Silver).jpg', Label: 'Silver T-Shirt' , Price: '500 L.E'}
];

const Container = document.getElementById('Products');

Products.forEach(Product => {
    const Card = document.createElement('div');
    Card.className = 'ProductCard';

    const Img = document.createElement('img');
    Img.src = Product.ImgUrl;
    Img.alt = Product.Label;

    const Label = document.createElement('p');
    Label.textContent = Product.Label;

    const PriceLabel = document.createElement('label');
    PriceLabel.textContent = Product.Price;

    Card.appendChild(PriceLabel);
    Card.appendChild(Img);
    Card.appendChild(Label);

    Container.appendChild(Card);
});

function searchProducts() {
    const searchValue = document
        .getElementById("SearchInp")
        .value
        .toLowerCase()
        .trim();

    const products = document.querySelectorAll("#Products .ProductCard");

    products.forEach(product => {
        const productName = product
            .querySelector("p")
            .textContent
            .toLowerCase();

        if (searchValue != '') {
            if (productName.includes(searchValue)) {
                product.style.display = "";
            } else {
                product.style.display = "none";
            }
        } else {
            product.style.display = ""
        }
    });
}

let LastReview = '';

function SendReview() {
    let UserReview = document.getElementById('ReviewsInp').value.trim();
    let UserReviewtoLowerCase = document.getElementById('ReviewsInp').value.toLowerCase().trim();

    if (UserReviewtoLowerCase === '' || UserReviewtoLowerCase === LastReview) {
        console.error('User Review None');
        return;
    }

    let ReviewsDiv = document.querySelector('.ReviewsDiv');

    const Review = document.createElement('div');
    Review.className = 'Review';

    const Label = document.createElement('label');
    Label.textContent = UserReview;

    Review.appendChild(Label);
    ReviewsDiv.appendChild(Review);

    document.getElementById('ReviewsInp').value = ''

    LastReview = UserReviewtoLowerCase;
}

let ModeSwitch = document.querySelector('.Switch');
let ModeButton = document.querySelector('.Switch > .Button');
let ThemeStyle = document.querySelector('#ThemeStyle');

let ModeNum = 0;

function ChangeMode() {
    if (ModeNum % 2 == 0) {
        ModeButton.style.left = '0px';

        ThemeStyle.textContent = `
            * {
                --BG: #D3CEE0;
                --Surface: #FFFFFF;
                --Surface2: #EFEBF4;
                --Primary: #00838F;
                --PrimaryLight: #00ACC1;
                --Text: #181024;
                --Muted: #6B5E7E;
                --Border: rgba(24, 16, 36, 0.12);
                --Shadow: 0 18px 45px rgba(24, 16, 36, 0.08);
                --Radius: 16px;
            }
        `;
    } else {
        ModeButton.style.left = '35px';
        ThemeStyle.textContent = `
            * {
                --BG: #181024;
                --Surface: #261A38;
                --Surface2: #34244B;
                --Primary: #00BCD4;
                --PrimaryLight: #4DD0E1;
                --Text: #F5F3F7;
                --Muted: #A093B1;
                --Border: rgba(255, 255, 255, 0.08);
                --Shadow: 0 18px 45px rgba(0, 0, 0, 0.35);
                --Radius: 16px;
            }
        `;
    }

    ModeNum++;
}