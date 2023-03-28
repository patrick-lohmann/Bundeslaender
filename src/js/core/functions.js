// import JSON Array from appStorage.js (current stored in core/statesData.js)
// src: https://www.mediaevent.de/javascript/import-export.html

// check on first load, if user has theme options in local storage
const checkTheme = () => {
  if(localStorage.getItem('theme') === 'dark'){
    document.querySelector('html').setAttribute('data-theme', 'dark');
  } else {
    document.querySelector('html').setAttribute('data-theme', 'light');
  }
}

//* language settings - nice to have, currently not necessary 
//! (needs a update of the states JSON array in statesData.js)
//
// const toggleLanguage = () => {
//   if(document.querySelector('html').getAttribute('data-lang') === 'de'){
//     document.querySelector('html').setAttribute('data-lang', 'en');
//   } else {
//     document.querySelector('html').setAttribute('data-lang', 'de');
//   }
// }

/* Filter states by property or show them all
=========================================== */ 
const filterNewStates = () => {
  // check if state is a new state, by using the newState property
  for(state in federalStates){
    if(federalStates[state].newState === false){
      // if not a new state, add class to hide it
      document.querySelector(`[data-state="${state}"]`).classList.add('hide'); 
      //? change class to v-hidden or d-none? - update later...
    }
  }
}

const filterOldStates = () => {
  // check if state is a old state, by using the newState property
  for(state in federalStates){
    if(federalStates[state].newState === true){
      // if not a old state, add class to hide it
      document.querySelector(`[data-state="${state}"]`).classList.add('hide');
    }
  }
}

const filterAllStates = () => {
  // remove class to show all states
  for(state in federalStates){
    document.querySelector(`[data-state="${state}"]`).classList.remove('hide');
  }
}



/* Add, delete and load comments
=========================================== */ 
const addComment = (state, comment) => {
  // push comment to comments array in JSON
  federalStates[state].comments.push(comment);
  // update comments in local storage and render comments
  localStorage.setItem('comments', JSON.stringify(federalStates));
  // renderComments(state);
}

const delComment = (state, comment) => {
  // splice comment from comments array in JSON
  federalStates[state].comments.splice(comment, 1);
  // update comments in local storage and render comments
  localStorage.setItem('comments', JSON.stringify(federalStates));
  // renderComments(state);
}

const getComments = () => {
  // load comments from local storage
  if(localStorage.getItem('comments')){
    federalStates = JSON.parse(localStorage.getItem('comments'));
    // render comments
    // renderComments(state);
  }
}

/* Search state by name or abbreviation
=========================================== */
const searchState = (search) => {
  // check if search is a state name or abbreviation
  for(state in federalStates){
    if(federalStates[state].name.toLowerCase() === search.toLowerCase() || federalStates[state].abbr.toLowerCase() === search.toLowerCase()){
      // if search is a state name or abbreviation, return state

      // show only the searched and matches state in slider
      for(state in federalStates){
        document.querySelector(`[data-state="${state}"]`).classList.add('hide');
      }
    }
  }
} 


/* Render components
=========================================== */ 
const renderStates = () => {
  // render cards for states in federalStates
  for(state in federalStates){
    let card = smallCard(state);
    document.querySelector('.slider').innerHTML += card;
  }
}


const renderComments = (state) => {
  // render comments for a state
  let comments = federalStates[state].comments,
      commentList = '';
  // render comments
  for(comment in comments){
    commentList += commentItem(comment);
  }
  document.querySelector('.thread').innerHTML = commentList;
}




