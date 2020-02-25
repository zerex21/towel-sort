// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix !== undefined) {
        var matr = [];
        for (var i = 0; i < matrix.length; i++) {
            if (i % 2) {
                for (var j = matrix[i].length - 1; j >= 0; j--) {
                    matr.push(matrix[i][j]);
                }
            } else {
                for (var j = 0; j < matrix[i].length; j++) {
                    matr.push(matrix[i][j]);
                }
            }
        }

        return matr;

    } else return []
}