//your JS code here. If required.
let root = document.querySelector('html');
let level = document.getElementById('level');
let parent = document.documentElement;
let count = 0;
while (level !== root) {
    count++;
    level = level.parentNode;
}
alert(`The level of the element is: ${count}`);