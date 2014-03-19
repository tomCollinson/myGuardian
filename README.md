guardian
========

An example of a simple Angular.js app which connects to the Guardian.com API and displays the last 10 stories for any
categories specified.

Responses from the Guardian API are stored either in localstorage or as cookies depending on browser support and uses
this information until an admin defined time limit is reached and a fresh call is made and the stored data replaced.

This project makes use of Sass Bootstrap.
