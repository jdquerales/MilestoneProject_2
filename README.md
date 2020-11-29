# NaguaráTravel

## Stream Two Project: Interactive Front-End Development - Code Institute

This is the second milestone project of my journey as a Software Developer in Code Institute. The purpose of this project is the presentation of interactive 
data, so I have built an interactive front-end site. I have named my hypothetical product "NaguaráTravel", a holidays provider agency that offer the users a friendly web application that allows them to actively engage with data, alter the way the site display information in order to achieve their desired goals. The website is organized into 4 pages: 1) landing page with call to actions, 2) Selection of destinations of the month, 3) Interactive destination finder and 4) a contact form. 


## Demo

A live demo can be found [here](https://jdquerales.github.io/MilestoneProject_2/).

![responsive mockups](/assets/validation_img/responsive.png)


## UXD
 
## User stories:


#### As a user:


-  I want to explore a touristic destination by country and city, so that I can plan my next holiday.


-  I want to select a search category, so that I can learn about accommodation
options, gastronomic and main attractions in the selected destination.


-  I want to interact with a map, so that I can easily get a feeling of the relative distances between locations I may be interested.


-  I want to see holiday destination offers available, so that I can decide
whether they may be of my interest.


- I want to be able to book a virtual meeting with a staff member, so that I can
get help with planning my holiday.


**That feature has not been included in this release due to the level of importance that will be detailed in the strategy table below**


- I want to have the option to contact the agency via email, so that I can
explain what exactly I am looking for.



#### As a site owner:

-  I want to be contacted by users in order to get them to choose a travel
package from my company or my sponsors.


## Strategy:

The goal of this project is to get noticed among potential recruiters and scientific collaborators. 
In the design of this project, my main goal was to make it attractive by highlighting main aspects
in the different sections and adding link to external sources. 


### Strategy Table

The strategy table illustrates the trade-off between importance and viability. As we move onto Scope soon, it is clear that this project requires different phases to implement the exhaustive list of features - it is an on-going process! 

Opportunity/Problem/Feature| Importance| Viability
------------ | -------------------------|---------
Call on Google maps to allow search of a destination | 5|5
Select/search relavant attractions, accomodation options and restaurants | 5 | 5
Showcase destinations of the month  | 4 | 3
Contact form/Get a quote | 5 | 5
Book a slot/ Google calendar API | 3 | 2
Include online chat | 2 | 1
Include users reviews | 2 | 1
Total| 26 | 22

## Scope:

As derived from the strategy table (Importance < Viability), I am unable to put in place everything. As a result, I identified what the minimum viable product is. This means Phase 1 should be enough to satisfy users. I will then have the opportunity to get feedback for future developments.

Please find below the planned releases:

## Stage 1 (current release)

As the initial stage of this project:

- Call on Google maps API as well as Google Places API, with autocomplete feature.

- Destinations of the month with interactivity using JQuery and Google maps API.

- Contact form with EmailJS SDK feature.

- JavaScript function in index.html to display date and time.


## Stage 2 (Future release)

As future capabilities:

- Call on Google calendar API to allow user to book a slot.

- Include user reviews and linking to booking.com API reviews.

- Include live online chat feature.

- Creating of automation testing suites using Jasmine.


## Structure:

As it can be noticed in the initial wireframes, I decided 
to organize the website in different pages (4 in total). The website
contains navegation buttons that are easily identified and user friendly.

- **Home Page**: I have include a header, central jumbotron (with navegation links to different actions), and a footer. I have included a background of a beach
as a holiday theme.

-  **Suggestion Page**: It includes a group of cards (using Bootstrap card), links to Wikipedia and Google Maps. Offer information is also displayed. Navegation links are presented: Home, Finder, and Qet a Quote.

- **Destination Page**: It is organize in different panels, one panel corresponding to the search menu, a Google Map panel (I have adopted the 1/3, 2/3 rule for the Desktop layout). There is a third panel which is created only after the search is performed.

- **Contact Page**: It contains a contact form and a call to action.

- Header and Footer are kept consistently throughout the website.

- Background images are changed for each page, consistent with purpose of the section.

## Skeleton:

I used Balsamiq to create my initial wireframes, starting with the mobile and desktop design as an overall idea and helping me to make the design responsive afterwards.


[Desktop wireframe](/assets/wireframes/MS2_desktop.pdf)

[Mobile wireframe](/assets/wireframes/MS2_mobile.pdf)


## Surface:

- Appealing pics was chosen for backgrounds, in order to make compatible with the holidays purpose of the website (obtained from [Pixabay](https://pixabay.com)).

- Google font "Pacifico" (cursive) was chosen for the brand and descriptive text and messages in all pages. 

- Google font "Poppins" was chosen throughout the pages.

- The CSS Family Orange/White (#FFA500) color Scheme was chosen for sections texts.

- The CSS Family #02457A color Scheme was chosen for footer background.

- The CSS #F05F40 color was used for home navegation and submit message buttons.

- The CSS #00CA4E color was used for in suggestions.html, destination.html and contact.html pages navegation buttons.

- The CSS #00AB66 color was used for show results buttons.

- The CSS #CA0B00 color was used for show reset button.



## Features
 
### Existing Features

See Stage 1 of Scope Section.

### Features Left to Implement

See Stage 2 of Scope Section.

## Technologies Used

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
    - The project uses **HTML** as building block.
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
    - The project uses **Cascading Style Sheets (CSS)** for adding style to the website.
- [JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    - The project uses **JavaScript (JS)** for adding interactivity to the website.


## Libraries and Tools Used 

- [Bootstrap (4.5.2)](https://getbootstrap.com/)
    - The project uses **Bootstrap** to design and customize responsive mobile-first sites.
- [JQuery (3.5.1)](https://jquery.com/)
    - This project uses **JQuery** JavaScript library, to manupulate 
    the HTML document (DOM API) and add interactivity in a much simpler way. 
- [Jasmine (3.6.0)](https://jasmine.github.io/index.html)
    - This project uses Jasmine for testing some JavaScript functions (Behavior-Driven JavaScript).
- [Jasmine-Jquery](https://github.com/velesin/jasmine-jquery)
    - This project uses Jasmine-Jquery which provides a set of custom matchers     for jQuery framework: API for handling HTML, CSS, etc. 
- [Google Maps JavaScript](https://developers.google.com/maps/documentation/javascript/overview)
    - This project uses the Google Maps JavaScript API.
- [Google Places](https://developers.google.com/places/web-service/overview)
    - This project uses Google Places and Place Autocomplete API.
- [EmailJS](https://www.emailjs.com/)
    - This project uses EmailJS software development kit (SDK), whichs allows us sending email directly from Javascript, with no backend development. 
- [Balsamiq](https://balsamiq.com/wireframes/)
    - The project uses **Balsamiq** as wireframing tool.
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/)
    - I use **Chrome DevTools** to inspect and test styling and responsive desing during my development process.
- [W3C](https://validator.w3.org)
    - I use **W3C** to check the HTML and CSS files.
- [JSHint](https://jshint.com/)
    - I use **JSHint** to check the JS files.
- [AmIResponsive](http://ami.responsivedesign.is)
    - I use **Am I Responsive?** to check my responsive design and take screenshots of the deployed website.
- [Fontawesome](https://fontawesome.com)
    - This project uses **FontAwesome** for including vector icons and social logos.
- [GoogleFonts](https://fonts.google.com)
    - This project uses **GoogleFonts** to import the font styles.
- [GitHub](https://github.com)
    - I used **GitHub** as my project repository.
- [GitHub Pages](https://pages.github.com)
    - I used **GitHub Pages** to deploy my project.
- [GitPod](https://www.gitpod.io)
    - I used **GitPod** as the cloud-based development environment to write my code.
 
## Testing

### Responsive design

I tested my site on Safari, Firefox and Google Chrome. The desktop version of the website looks good and it is working as desired.

I used the chrome DevTools to test that the website is fully responsive. I tested the following
devices (mobile and tablet sizes):

- Moto G4.

- Galaxy S5.

- Galaxy S9 (my own device).

- iPhone 5/SE, iPhone 6/7/8, iPhone 6/7/8 Plus and  iPhone X.

- iPad and iPad Pro.

- Surface Duo.

I also used **Am I Responsive?** to check my responsive design.


## Code validation

I used **W3C** to check my HTML and CSS files, they are OK and without errors (1 warning detected in index.html and destination.html - however, I did not consider them relevant). I used JSHint validator to check my javascript files.
Below screenshots of the validation results are exhibited.

## HTML file validation:

### **index.html**:

![HTML validation](/assets/validation_img/index.png)

### **suggestions.html**:

![HTML validation](/assets/validation_img/suggestions.png)

### **destinations.html**:

![HTML validation](/assets/validation_img/destination.png)

### **contact.html**:

![HTML validation](/assets/validation_img/contact.png)


## CSS file validation:

![CSS validation](/assets/validation_img/style.png)

## JavaScript file validation:

### Home page,  **index.js**: 

![indexjs](/assets/validation_img/indexjs.png)

### Destinations of the month page,  **destinations.js**: 

![suggestionsjs](/assets/validation_img/suggestionsjs.png)

### Destinations finder page,  **maps.js**: 

![suggestionsjs](/assets/validation_img/mapsjs.png)

### Contact form page,  **contact.js**: 

![suggestionsjs](/assets/validation_img/contactjs.png)

## Testing user stories

#### As a user:


-  I want to explore a touristic destination by country and city, so that I can plan my next holiday.


-  I want to select a search category, so that I can learn about accommodation
options, gastronomic and main attractions in the selected destination.

![us1](/assets/validation_img/us1_2.png)


-  I want to interact with a map, so that I can easily get a feeling of the relative distances between locations I may be interested.

![us31](/assets/validation_img/us3_1.png)

![us32](/assets/validation_img/us3_2.png)


-  I want to see holiday destination offers available, so that I can decide
whether they may be of my interest.

![us4](/assets/validation_img/us4.png)

- I want to be able to book a virtual meeting with a staff member, so that I can
get help with planning my holiday.


**That feature has not been included in this release due to the level of importance that will be detailed in the strategy table below**


- I want to have the option to contact the agency via email, so that I can
explain what exactly I am looking for.



#### As a site owner:

-  I want to be contacted by users in order to get them to choose a travel
package from my company or my sponsors.


![us4](/assets/validation_img/us5.png)


## Manual Testing

| Page | Action taken | Expected result | Pass/Fail |
|:----:|:------------:|:---------------:|:---------:|
|   index.html  |    Refresh browser       |   Local date/time displayed              |      Pass     |
|  index.html    |   Click on navegation buttons           |     Go the each of the other pages             |     Pass      |
|  suggestions.html    |   Hover over one destination card           |   Remaining cards are faded        |       Pass    |
|  suggestions.html    |   Click on Wikipedia icons in each card          |   New tab opens with the Wikipedia info        |       Pass    |
|  suggestions.html    |   Click on Map icon on any card          |   Google Map div is created and scroll to top of the page  <br/> & marker is displayed on Google map     |       Pass    |
|  suggestions.html    |   Click on another Map icon on another card          |   A new marker on the the location is created      |       Pass    |
|  suggestions.html    |   Click on another Map icon on another card          |   A new marker on the the location is created      |       Pass    |
|  suggestions.html    |   Click on navegation icons underneath the cards          |   Redirected to the corresponding pages     |       Pass    |
|  destination.html    |   Go the search box and type a location,<br/> for instance "Popes Quay"         |   Different autocomplete options being displayed     |       Pass    |
|  destination.html    |   Select one the autocomplete suggestions,<br/> for instance "Popes Quay, Cork, Ireland" <br/> & select option from dropdown menu (Bar/Cafes/Restaurants)      |   Customized marker are displayed on Google Map     |       Pass    |
|  destination.html    |   Click on one of markers    |   Popup InfoWindow displayed, place icon, address and rating     |       Pass    |
|  destination.html    |   Click on reset button   |   All markers and results table disappears    |       Pass    |
|  destination.html    |   Go to mobile device size   |   A new button (Results) is displayed    |       Pass    |
|  destination.html    |   Do a search and click on "Results" button   |   Google Map with markers is scrolled to the top of the page    |       Pass    |
|  contact.html (See wrong message below)    |  Fill name box and try to send a empty message   |   Message not sent  & alerts messages appeared  |       Pass    |
|  contact.html (See valid message below)     |  Fill all boxes and try to send a empty message   |   Message  sent   |       Pass    |

### Wrong message

![us31](/assets/validation_img/wrong_email.png)

### Valid message
 ![us31](/assets/validation_img/valid_email.png)

### Email message received
 ![us31](/assets/validation_img/email_testing.png)

## Jasmine Unit Testing

I have created some Jasmine Unit Testing for some of the JS function in my project.

### Contact form testing:

![us31](/assets/validation_img/emailScript.png)

![us31](/assets/validation_img/validEmail.png)

![us31](/assets/validation_img/invalidEmail.png)

### Home page JQuery testing:

## DOM elements testing
![us31](/assets/validation_img/index_jquery.png)

## updateTime function testing
![us31](/assets/validation_img/updateTime.png)

## Deployment

### Public deployment

This site is hosted using GitHub pages, deployed directly from the master branch.
I followed the procedure:

- I first created a new repository on my GitHub account.

- Then, I linked my repository the my GitPod environment by clicking on the "GitPod" green button available in GitHub.

- Once in GitPod environment, I initialised my repository by using the command `git init`.

- I used the GitPod terminal in order to add files, commit and push using Git version control.
  For instance, `git add file_name` for adding changes to a particular file the stagging area or
  `git add file_name` for adding all changes since the last commit.

- Then, I sent all changes to the remote repository in GitHub by using the command `git push`.

- Inmediately after, I went to my GitHub page and enter to the repository named: MilestoneProject_2.

- Once in the repository I went to setting, on the right top side of the page, and scrolled down to GitHub pages.

- I selected the master branch.

- Finally a link to the live website appeared.

Note:  The deployed site will update automatically upon new commits to the master branch.


### Local deployment 

To run locally, you can clone this repository directly into the editor of your choice by pasting
`git clone https://github.com/jdquerales/MilestoneProject_2.git` into your terminal
into your terminal. To cut ties with this GitHub repository, type `git remote rm origin` into the terminal.


## Credits

### Media
- The photos used in portfolio section were obtained from [Pixabay](https://pixabay.com).

### Acknowledgements

- I would like to thank my mentor Dick Vlaanderen for his support and helpful suggestions.
