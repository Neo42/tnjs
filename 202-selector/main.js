//
console.log(users); // <ul id="users">...</ul>
console.log(window['user-1']); // <li id="user-1">John</li>
console.log(document.getElementById('user-2')); // <li id="user-2">Pete</li>
console.log(document.querySelectorAll('ul>li:last-child')[0]); // <li id="user-3">Tom</li>
