// !This function takes two arrays, arr1 and arr2, which are both assumed to be sorted
function merge(arr1, arr2) {
  //* based on ObservableHQ by gpazo
  // It creates an empty array called results.
  const results = []
    // Then, it enters a while loop that continues as long as both left and right arrays have elements.
    while (arr1.length && arr2.length) {
      // Inside the loop, it compares the first elements of left(arr1) and right(arr2).
      // If the first element of arr1 is less than the first element of arr2, it removes (shift()) the first element from arr1 and pushes it into results.
      // Otherwise, it removes the first element from arr2 and pushes it into results.
        if (arr1[0] < arr2[0]){
          results.push(arr1.shift())
        } else {
          results.push(arr2.shift())
        }
    }
    // Once one of the arrays becomes empty, it exits the loop.
    // Finally, it concatenates the remaining elements of left and right (if any) to results and returns the merged array.
    return [...results, ...arr1, ...arr2]
}

// !This is the main function implementing the Merge Sort algorithm.
function mergeSort(arr) {
  // based on ObservableHQ by gpazo
  // It recursively divides the input array into smaller halves until each half has less than 2 elements (base case).
  if (arr.length < 2){
    return arr
  }
  // It calculates the middle index of the array using Math.floor(array.length / 2) to split it into left and right halves.
  const center = Math.floor(arr.length / 2)
  //! const left = arr.slice(0, center)
  //! const right = arr.slice(center)
  const left = mergeSort(arr.slice(0, center));
  const right = mergeSort(arr.slice(center));
// It then recursively calls _mergeSort on both halves, which eventually returns sorted arrays.
  //! return merge(mergeSort(left), mergeSort(right))
  return merge(left, right);
}
// Finally, it merges the sorted left and right arrays using the _merge function and returns the result.


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2]");
  console.log("=>", mergeSort([2, 1]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", mergeSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: [-10, 0, 2, 2, 5, 10, 20]");
  console.log("=>", mergeSort([10, -10, 0, 2, 20, 5, 2]));
}

module.exports = mergeSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
