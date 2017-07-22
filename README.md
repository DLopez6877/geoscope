<h1 align="center">
  GeoScope
</h1>

## Features
* As a user, I am able to add to the site a new geocache that I have hidden. I want to be able to add it by either physical address or GPS coordinates (latitude and longitude). I should also be able to add myself as the creator of this geocache.
* As a user, am to be able to view a listing of all geocaches that have been added to the site.
* As a user, when I click on a particular geocache from the list, I can see both the physical address and the GPS coordinates, as well as the creator for that geocache listing.


## Setup and Install

To clone and run this application, you'll need [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer and [Bower](https://bower.io/). From your command line:

```bash
# Clone this repository
$ git clone https://github.com/DLopez6877/geoscope
# Go into the repository
$ cd geoscope

# Install dependencies
$ npm install

# Get an API Key
You will need to make an account and an API key. Do not use someone else’s API key. Avoid making excessive API calls (ie: accidental infinite loops) during development. And be sure to enter Epicodus as your Organization/Company name when signing up.

Click “Get A Key” at the bottom of the Getting Started section
Click "Yes" on the dialog box that appears to agree to Google\'s terms and conditions
Your API key should appear on the dialog box

# Create a api-keys.ts file in app folder
$ touch /src/app/api-keys.ts

# Make geoKey variable
export var geoKey = "your api key goes here";

# Create a firebase account
First off, you\'ll need to make a free account at Firebase\'s website.

Creating a Project
Next, we\'ll need to create a remote database for our application through Firebase\'s website.

Once you\'ve created an account, you should be taken to a user dashboard area, with an option to Create a New Project. Select this option, provide a name for your new project, and select your Country/region from the drop-down menu.

You\'ll then be taken to an "Overview" area. Where you\'ll be offered three options:

Add Firebase to your iOS app
Add Firebase to your Android app
Add Firebase to your web app
Select Add Firebase to your web app. Firebase should respond with a pop-up modal window. Keep the information in this modal handy, we\'ll use it in just a moment.

## Add information to masterFirebaseConfig variable
export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };

replace information with your credentials;

# Run the app
$ ng serve
```

## Technologies Used
- [Angular-cli](https://cli.angular.io/) - The Angular CLI makes it easy to create an application that already works, right out of the box. It already follows our best practices!
- [Node.js - NPM](https://www.w3schools.com/nodejs/nodejs_npm.asp) - NPM is the package manager for JavaScript and the world’s largest software registry. Discover
- [Sass](http://sass-lang.com/) - Sass (Syntactically Awesome StyleSheets) is an extension of CSS. Sass allows you to use things like variables, nested rules, inline imports and more. It also helps to keep things organized and allows you to create stylesheets faster.

## Support and contact details
For feedback or support contact Daniel Lopez at DLopez6877@gmail.com.

### License

**GeoScope** © 2017, Daniel Lopez. Released under the [MIT License].
> CodePen[@dlopez6877.com](https://codepen.io/DLopez6877/) &nbsp;&middot;&nbsp;
> GitHub [@dlopez6877](https://github.com/dlopez6877) &nbsp;&middot;&nbsp;
