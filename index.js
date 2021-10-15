/*
733. Flood Fill
An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and newColor. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with newColor.

Return the modified image after performing the flood fill.
*/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

var floodFill = function(image, sr, sc, newColor) {
    if (!isIndexValid(image, sr, sc)) return image
    let originalColor = image[sr][sc];
    fill(image, sr, sc, newColor, originalColor);
    return image;
};

function fill(image, sr, sc, newColor, originalColor) {
    if (!isIndexValid(image, sr, sc) || image[sr][sc] === newColor || image[sr][sc] !== originalColor) return
    
    image[sr][sc] = newColor;
    fill(image, sr + 1, sc, newColor, originalColor) // down
    fill(image, sr - 1, sc, newColor, originalColor) // up
    fill(image, sr, sc + 1, newColor, originalColor) // right
    fill(image, sr, sc - 1, newColor, originalColor) // left
}

function isIndexValid(image, sr, sc) {
    return (typeof image[sr] !== 'undefined' && typeof image[0][sc] !== 'undefined');
}

floodFill([[1,1,1],[1,1,0],[1,0,1]],1,1,2)

// var floodFill = function(image, sr, sc, newColor, startColor=image[sr][sc]) {
//     if (typeof image[sr] === 'undefined' || typeof image[0][sc] === 'undefined' || image[sr][sc] !== startColor || image[sr][sc] === newColor){
//         return image
//     }

//     image[sr][sc]=newColor
//     floodFill(image, sr+1, sc, newColor, startColor)
//     floodFill(image, sr-1, sc, newColor, startColor)
//     floodFill(image, sr, sc+1, newColor, startColor)
//     floodFill(image, sr, sc-1, newColor, startColor)
//     return image
// };

// var floodFill = function(image, sr, sc, newColor) {
//     // sr = over
//     // sc = down
//     let a = image[-1]
//     if  (typeof image[-1] === 'undefined' || typeof image[0][-1] === 'undefined') return
//     if (image[sr-1][sc-1]===image[sr][sc]) image[sr-1][sc-1]=newColor
//     if (image[sr+1][sc-1]===image[sr][sc]) image[sr+1][sc-1]=newColor
//     if (image[sr-1][sc+1]===image[sr][sc]) image[sr-1][sc+1]=newColor
//     if (image[sr+1][sc+1]===image[sr][sc]) image[sr+1][sc+1]=newColor
        
// //         image[0][1]=2
// //             if (image[0][0]===image[sr][sc]) image[0][0]=2
// //             image[0][2]=2

// //         image[1][0]=2
// //             image[0][0]=2
// //             image[2][0]=2

//     image[sr][sc]=2
//     return image
// };