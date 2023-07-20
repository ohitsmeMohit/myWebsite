
// Display current date
const currentDate = new Date();
const formattedDate = currentDate.toDateString();
const dateElement = document.createElement('p');
dateElement.textContent = 'Current Date: ' + formattedDate;
document.body.appendChild(dateElement);

// Show alert on link click
const linkElement = document.querySelector('a');
linkElement.addEventListener('click', function(event) {
event.preventDefault();
alert('You clicked the LinkedIn link!');
});

// JavaScript to show the comic dialog box on hover
const characterContainer = document.querySelector('.mickeyImage');
const comicDialogBox = document.getElementById('dialogBox');

characterContainer.addEventListener('mouseenter', () => {
    comicDialogBox.style.display = 'block';
});

characterContainer.addEventListener('mouseleave', () => {
    comicDialogBox.style.display = 'none';
});
