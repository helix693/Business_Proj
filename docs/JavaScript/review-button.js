function toggleReviews() {
    const moreReviews = document.getElementById("moreReviews");
    const btn = document.querySelector(".see-more-btn");
    if (moreReviews.style.display === "block") {
    moreReviews.style.display = "none";
    btn.textContent = "See More Reviews";
    } else {
    moreReviews.style.display = "block";
    btn.textContent = "Show Less";
    }
}