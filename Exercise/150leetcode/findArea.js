    function maxArea(height) {
    let start = 0
    let end = height.length - 1

    let CurrHeight = 0
    let width = 0
    let area = 0
    while (start < end) {
        width = end - start;
        console.log(width,'width');
        if (height[start] >= height[end]) {
        CurrHeight = height[end];
        end--;
        } else {
        CurrHeight = height[start];
        start++;
        }
        console.log(CurrHeight,'CurrHeight2');
        let areaTemp = width * CurrHeight;
        if (area < areaTemp) {
        area = areaTemp;
        }

    }
    return area;
    }

let height = [1,2]
console.log(maxArea(height));
