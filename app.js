'use strict';

const URL = 'https://api.github.com/users/'; // /username/repos

function getReposByUser(username) {
  console.log(`${URL}${username}/repos`);
  fetch(`${URL}${username}/repos`)
    .then(res => res.json())
    .then(resJson => 
      displayResults(resJson))
    .catch(e => console.log(`You got the following error: ${e}`));
}

function displayResults(res) {
  $('.results').html('');

  let results = [];
  for (let i = 0; i < res.length; i++) {
    results.push(`<div>
    <h3>${res[i].name}</h3>
    <a href="${res[i].html_url} target="_blank"">
    <p>${res[i].description}</p>
    </div>`)
  };
  console.log(results);
  $('.results').append(...results);
}

function userInput() {
  $('form').submit(e => {
    e.preventDefault();
    let input = $('#username').val()
    $('#username').val('');
    getReposByUser(input);
    console.log('button clicked');
  })
}

$(function(){
  userInput();
})