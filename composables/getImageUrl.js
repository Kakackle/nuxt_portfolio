export const getImageUrl = function(card_img) {
    return new URL(`../assets/img/${card_img}`, import.meta.url);
}
