// Init Github class
const github = new Github();
const ui = new UI();

// Search input
const searchUser = document.querySelector('#searchUser');

// searchUser event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== '') {
    // Make HTTP call
    github.getUser(userText)
    .then(data => {
        // check the user data
        if(data.profile.message === 'Not Found') {
            // show alert
            ui.showAlert('User Not Found', 'alert alert-danger')
        } else {
            // Show profile
            ui.showProfile(data.profile);
            ui.showRepos(data.repos);
        }
    });
    
  } else {
    //   clear 
    ui.clearProfile();
  }
});