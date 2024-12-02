


const headerCode = `
<div id="headerTitle">
<h1 class="titleTextStyle">The Cat's Meow</h1></div>
 <!-- NavBar here-->
<nav class="navContainer">
<div class="navBoxTopContainer">
<a href="index.html" class="navBox">Home</a>
<a href="about.html" class="navBox">About</a>
<a href="index.html" class="navBox">Recent</a>
</div>
<div class="navBoxBottomContainer">
<a href="#" class="subscribeBox">Subscribe</a>
<div class="searchBoxContainer">
<input class="searchBox" type="text" id="searchInput" placeholder="Search">
<button class="searchButton" id="searchButton"><img id="searchIcon" src="/assets/searchIcon.png" alt="photo of a search icon"></img>
</button></div>
</div>
</nav>
`;
const headerElement = document.getElementById('header');

headerElement.innerHTML = headerCode;