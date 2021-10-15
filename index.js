/*
733. Flood Fill
An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and newColor. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with newColor.

Return the modified image after performing the flood fill.
*/

var floodFill = function(image, sr, sc, newColor) {
    // sr = over
    // sc = down
    let a = image[-1]
    if  (typeof image[-1] === 'undefined' || typeof image[0][-1] === 'undefined') return
    if (image[sr-1][sc-1]===image[sr][sc]) image[sr-1][sc-1]=newColor
    if (image[sr+1][sc-1]===image[sr][sc]) image[sr+1][sc-1]=newColor
    if (image[sr-1][sc+1]===image[sr][sc]) image[sr-1][sc+1]=newColor
    if (image[sr+1][sc+1]===image[sr][sc]) image[sr+1][sc+1]=newColor
        
//         image[0][1]=2
//             if (image[0][0]===image[sr][sc]) image[0][0]=2
//             image[0][2]=2

//         image[1][0]=2
//             image[0][0]=2
//             image[2][0]=2

    image[sr][sc]=2
    return image
};