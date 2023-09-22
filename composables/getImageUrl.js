export const getImageUrl = function(card_img) {
    return new URL(`../assets/img/projects/${card_img}`, import.meta.url);
}
