// 1. fetch, load and show Categories on html

// create load categories
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.error(error));
};

// load videos
const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.error(error));
};

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videos");
  videos.forEach((video) => {
    const card = document.createElement("div");
    card.classList = "card card-compact bg-base-100 w-96 shadow-xl";
    card.innerHTML = `
  <figure class = "h-[200px]">
    <img
      src= ${video.thumbnail}
      class = "h-full w-full object-cover"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
        `;

        videoContainer.append(card);
  });
};

// create display categories
const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");

  categories.forEach((item) => {
    console.log(item);
    // create a btn

    const button = document.createElement("button");
    button.classList = "btn";

    button.innerText = item.category;

    // add btn to category container
    categoryContainer.append(button);
  });
};

loadCategories();
loadVideos();
