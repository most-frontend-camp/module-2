function mergeInPlace(list1, ...otherLists){
    const merged = Object.assign({}, list1);
    // console.log(merged);

    for (const otherList of otherLists) {
        for (const [key,value] of Object.entries(otherList)) {
            if(!merged.hasOwnProperty(key) && merged[key] === undefined){
                merged[key] = value;
            }
        }
    }
    return merged;
}

const list1 = {tv: 200, piano: 1000};
const list2 = {vase: 10, tv: 150};
const list3 = {coach: 50, piano: 800};
const mergedList = mergeInPlace(list1, list2, list3);
// console.log(mergedList); // { tv: 200, piano: 1000, vase: 10, coach: 50 }
// console.log(list1 === mergedList) // true

