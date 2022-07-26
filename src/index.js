
// You should implement your task here.

module.exports = function towelSort (matrix) { 
 
    return matrix == null?[]:matrix.flatMap((v,i,)=> i % 2?v.reverse():v)
}

