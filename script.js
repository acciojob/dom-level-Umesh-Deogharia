//your JS code here. If required.
let root = document.queryselector('html');
let level = document.getElementById('level');
let parent = document.documentElement;
let count = 0;
while (level !== parent) {
    count++;
    level = level.parentNode;
}

alert(`The level of the element is: ${count}`);