//your JS code here. If required.
function manipulateArray() {
    return new Promise((resolve) => {
        // Initial promise that resolves after 3 seconds with the array
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    })
    .then((array) => {
        // First transformation: Filter out odd numbers
        return new Promise((resolve) => {
            setTimeout(() => {
                const evenNumbers = array.filter(num => num % 2 === 0);
                document.getElementById('output').innerText = evenNumbers.join(',');
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then((evenNumbers) => {
        // Second transformation: Multiply even numbers by 2
        return new Promise((resolve) => {
            setTimeout(() => {
                const multipliedNumbers = evenNumbers.map(num => num * 2);
                document.getElementById('output').innerText = multipliedNumbers.join(',');
                resolve(multipliedNumbers);
            }, 2000);
        });
    });
}

// Start the manipulation when the page loads
window.onload = manipulateArray;