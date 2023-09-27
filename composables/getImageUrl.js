// get image from assets folder
// expects a subfolder path to expected file
export const getImageUrl = function(card_img) {
    return new URL(`../assets/img/${card_img}`, import.meta.url);
}
