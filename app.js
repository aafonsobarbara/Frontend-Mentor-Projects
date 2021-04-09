const menu = [
  {
    id: 1,
    title: 'Four card feature section',
    category: 'Newbie',
    img: './images/four-cards.png',
    desc: `A responsive landing page using CSS Grid. Using: HTML and CSS `,
    link: `https://lucid-curran-85857e.netlify.app/`,
  },
  {
    id: 2,
    title: 'Huddle landing page',
    category: 'Newbie',
    link: `https://determined-euler-83868e.netlify.app/`,
    img: './images/huddlde.png',
    desc: `A responsive landing page using Flex Box. Using: HTML and CSS `,
  },
  {
    id: 3,
    title: 'URL shortening API landing page',
    category: 'Intermediate',
    link: 'https://gracious-noyce-8e4489.netlify.app/',
    img: './images/url-shortening.png',
    desc: `A responsive URL shortening landing page using rel.ink API. Using: HTML, SCSS and JS  `,
  },
  {
    id: 4,
    title: 'Intro component with sign-up form',
    category: 'Newbie',
    link: `https://introcomponent.netlify.app/`,
    img: './images/intro-component.png',
    desc: `A responsive landing page using Flex Box. Using: HTML, CSS and JS `,
  },
  {
    id: 5,
    title: 'Pricing component with toggle',
    category: 'Junior',
    link: `https://trusting-wright-d55cb8.netlify.app/`,
    img: './images/price-cards.png',
    desc: `A responsive landing page using Flex Box. Using: HTML, CSS and JS `,
  },
  {
    id: 6,
    title: 'Insure landing page',
    category: 'Junior',
    link: 'https://blissful-blackwell-b57ab4.netlify.app/',
    img: './images/insure.png',
    desc: `A responsive landing page using Flex Box. Using: HTML, SCSS and JS`,
  },
  {
    id: 7,
    title: 'Fylo dark theme landing page',
    category: 'Junior',
    link: 'https://github.com/aafonsobarbara/Fylo-Dark',
    img: './images/fylo.jpg',
    desc: `A responsive landing page using Tailwind. Using: HTML, Tailwind and JS`,
  },
];
const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');
window.addEventListener('DOMContentLoaded', function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="category">»${item.category}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
            <a href=${item.link} target='_blank' class="link">See</a>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join('');

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ['all'],
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join('');

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll('.filter-btn');
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === 'all') {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
