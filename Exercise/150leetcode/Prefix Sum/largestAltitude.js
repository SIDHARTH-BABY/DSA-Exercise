function largestAltitude(gain) {
    let result = [0]
    for (let i = 0; i < gain.length; i++) {
        let temp = result[i] + gain[i]
        result.push(temp)
    }
    return Math.max(...result);
}

let gain = [-4,-3,-2,-1,4,3,2]
console.log(largestAltitude(gain));
//0 + -5 = -5
// -5 + 1 = -4
// -4 + 5 =1
