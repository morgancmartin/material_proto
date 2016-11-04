# oneDirective
######A front-end web application for building a personal website.

[See the deployed version](http://onedirective.herokuapp.com/)

You can create a new account or login with these credentials:
#### Username: foobar@gmail.com
#### Password: password

## Do things like...
* **Sign up or login as a returning user**
![](app/assets/images/space_login.png?raw=true)

* **Search for users using the search bar at the top**
![](app/assets/images/space_search.png?raw=true)

* **Post on your or your friends walls and like and comment on them**
![](app/assets/images/space_timeline.png?raw=true)

* **Upload photos to your account and update your profile or cover photos**
![](app/assets/images/space_photo.png?raw=true)

* **Update your profile**
![](app/assets/images/space_edit.png?raw=true)

* **View your friends and photos**
![](app/assets/images/space_friends.png?raw=true)


## Technological Highlights
* **Ruby on Rails back-end framework**
* **Paperclip and AWS for photo uploading and storage**
* **Delayed Job and SendGrid for sending emails**
* **SQL Queries for search**
* **jQuery AJAX calls for seamless commenting and liking**

========
Created by [Morgan Martin](https://github.com/morgancmartin)  
A project for the [Viking Code School](http://vikingcodeschool.com)  
[www.morganmart.in](http://www.morganmart.in)




















#One Directive
######A front-end web application for building a personal website.

##I. Introduction
One Directive is a front-end solution for every individual's desire to build a personal website. It abstracts away the technical process and allows them to build one without having to know how to code.

##II. Technical Overview.
One Directive consists of a client-side application that interfaces with a custom API for data. The client-side application was built using Angular 1.x. The API, on the other hand, was built using Ruby on Rails.

###A. Front-end
The application greets the user with a landing page, asking them to sign up. Upon registration, the user is redirected to the projects page, solely occupied by a button to create a project. When the user clicks the button, they are greeted with a modal for inputting a title and description. They can click on the submit button when they're satisifed, and a card for it will appear almost instantly.

The user can click on a project card to begin working on their own website. The user can drag Bootstrap components from the left side bar and place them anywhere inside the workspace. These components range from the typical button to the navbar. These components can also be resized according to their needs.

###B. Back-end
The application uses a custom-built API for serving data to the client-side application. The API stores data in a Postgresql database and serves it in JSON. The data was modeled as follows: users who own projects, projects that have rows, and rows that have components.

One Directive is a secure application. It uses Devise to handle user authentication, keeping their credentials safe. This is buttressed by Rails' own countermeasures, such as Cross-Site Request Forgery (CSRF) Protection. The Rails controller filters malicious requests as they are passed down by the Route Dispatcher. Any user registered with our application can rest at ease, knowing that their private information is in good hands.

One of the core features in One Directive is serving the user's completed website in the form of a Github repository. To that end, the team used the Octokit gem. The gem builds an interface with the Github API, which we then used to create a unique repository with the user's website.

The projects page features photo uploads for each project card. The team used the Paperclip gem to cache these uploads for storage in an AWS server.
