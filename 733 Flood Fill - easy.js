/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const floodFill = function(image, sr, sc, newColor) {
    fillByNewColor(image, sr, sc, image[sr][sc], newColor);
    return image;
};

const fillByNewColor = (image, x, y, prevColor, newColor) => {
    if (x < 0 || y < 0 || x >= image.length || y >= image[x].length || image[x][y] === newColor || image[x][y] !== prevColor) {
        return;
    }
    
    image[x][y] = newColor;
    fillByNewColor(image, x + 1, y, prevColor, newColor);
    fillByNewColor(image, x, y + 1, prevColor, newColor);
    fillByNewColor(image, x - 1, y, prevColor, newColor);
    fillByNewColor(image, x, y - 1, prevColor, newColor);
}
