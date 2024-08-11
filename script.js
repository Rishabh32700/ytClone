var menuIcon = document.querySelector(".menu-icon")
var sidebar = document.querySelector(".sidebar")
var mainContainer = document.querySelector(".mainContainer")
// var card = document.getElementsByClassName("card")

// console.log("menuIcon", card);

menuIcon.onclick = function(){
    sidebar.classList.toggle("smaller-sidebar")
    mainContainer.classList.toggle("larger-mainContainer")
    // card.classList.toggle("larger-card")
    console.log("menu icon clicked");
    
}
// Select the necessary elements
var commentInput = document.querySelector('.writeCommentContainer input');
var previousCommentsContainer = document.querySelector('.previoudCommentsContainer');
var commentCountElement = document.querySelector('.commentContainer h1'); // Element to display comment count
var defaultChannelIconSrc = './images/images/myImg.jpeg'; // Default icon for comments

// Function to update the comment count
function updateCommentCount() {
    var comments = previousCommentsContainer.getElementsByClassName('previousComments');
    var commentCount = comments.length;
    commentCountElement.textContent = `${commentCount} Comments`;
}

// Function to handle adding a new comment
function addComment() {
    // Get the comment text
    var commentText = commentInput.value.trim();

    // Check if the comment text is not empty
    if (commentText) {
        // Create a new comment element
        var newComment = document.createElement('div');
        newComment.classList.add('previousComments', 'd-flex');

        // Create the comment content
        newComment.innerHTML = `
            <img class="channelIcon" src="${defaultChannelIconSrc}" alt="" />
            <div class="nameAndComment">
                <p class="channelName">@LetsUpgrade</p>
                <p class="comment">${commentText}</p>
            </div>
        `;

        // Append the new comment to the container
        previousCommentsContainer.appendChild(newComment);

        // Clear the comment input field
        commentInput.value = '';

        // Update the comment count
        updateCommentCount();
    }
}

// Add an event listener to the comment input field
commentInput.addEventListener('keydown', function(event) {
    // Check if the Enter key is pressed
    if (event.key === 'Enter') {
        // Prevent the default action (e.g., form submission)
        event.preventDefault();
        // Call the function to add a new comment
        addComment();
    }
});

// Initial comment count setup
document.addEventListener('DOMContentLoaded', function() {
    updateCommentCount();
});
