function minABC(a, b, c) {
    let min
    if ((a <= b) && (a <= c)) {
        min = a
    } else if ((b <= a) && (b <= c)) {
        min = b
    } else {
        min = c
    }
    return min
}

function maxABC(a, b, c) {
    let max
    if ((a >= b) && (a >= c)) {
        max = a
    } else if ((b >= a) && (b >= c)) {
        max = b
    } else {
        max = c
    }
    return max
}



function average(a, b, c) {
    if (a == b) {
        return a
    } else if (b == c) {
        return b
    } else if (a == c) {
        return a
    }

    let min = minABC(a, b, c)
    let max = maxABC(a, b, c)
    let average
    if ((a != min) && (a != max)) {
        average = a
    } else if ((b != min) && (b != max)) {
        average = b
    } else {
        average = c
    }
    return average

}

console.log(average(1, 1, 6))
console.log(average(1, 3, 6))
console.log(average(15, 1, 6))
console.log(average(123, 154645654, 45645))