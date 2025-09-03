// Bucket sort is a distribution sort. It works by distributing elements into 'buckets' and then sorting these buckets individually.
// After sorting, the buckets are combined to form the sorted array.
// This implementation uses insertion sort to sort the elements within each bucket.

// Bucket sort is very fast because it distributes elements into buckets strategically based on their values.
// This, however, means it uses more memory for the sake of speed.

function bucketSort(array, bucketSize) {
  // Step 1: Determine the minimum and maximum values in the array
  // Using Math
  const min = Math.min(...array);
  const max = Math.max(...array);

  // Not using JS standard lib
  let minNum = array[0];
  let maxNum = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxNum) {
      maxNum = array[i];
    } else if (array[i] < minNum) {
      minNum = array[i];
    }
  }
  // Step 2: Initialize buckets
  // Default bucket size can be adjusted
  bucketSize = bucketSize || 5;
  const bucketCount = Math.floor((max - min) / bucketSize) + 1;
  const buckets = new Array(bucketCount).fill().map(() => []);
  console.log(buckets);

  // Step 3: Distribute input array values into buckets
  for (let i = 0; i < array.length; i++) {
    const bucketIndex = Math.floor((array[i] - min) / bucketSize);
    buckets[bucketIndex].push(array[i]);
  }
  console.log(buckets)

  // Step 4: Sort each bucket and place back into the array
  const sorted = [];
  for (let i = 0; i < buckets.length; i++) {
    sorted.push(...insertionSort(buckets[i]));
  }
  console.log(sorted);
  return sorted;
}

// Helper function: Insertion Sort
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let currentValue = array[i];
    let j;
    for (j = i - 1; j >= 0 && array[j] > currentValue; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentValue;
  }
  return array;
}

module.exports = bucketSort;
