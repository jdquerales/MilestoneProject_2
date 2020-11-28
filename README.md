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

- Contact form witj EmailJS SDK feature.


## Stage 2 (Future release)

As future capabilities:

- Call on Google calendar API to allow user to book a slot.

- Include user reviews and linking to booking.com API reviews.

- Include live online chat feature.

- Creating of automation testing suites using Jasmine.


### Structure:




## Skeleton:

I used Balsamiq to create my initial wireframes, starting with the mobile and desktop design as an overall idea and helping me to make the design responsive afterwards.


[Desktop wireframe](/assets/wireframes/MS2_desktop.pdf)

[Mobile wireframe](/assets/wireframes/MS2_mobile.pdf)


### Surface:



## Features
 
### Existing Features



### Features Left to Implement


## Technologies Used

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
    - The project uses **HTML** as building block.
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
    - The project uses **Cascading Style Sheets (CSS)** for adding style to the website.

## Libraries and Tools Used 

- [Bootstrap (4.5.2)](https://getbootstrap.com/)
    - The project uses **Bootstrap** to design and customize responsive mobile-first sites.
- [ScrollReveal](https://scrollrevealjs.org/)
    - The project uses **ScrollReveal** to animate elements as they scroll into view.
- [Balsamiq](https://balsamiq.com/wireframes/)
    - The project uses **Balsamiq** as wireframing tool.
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/)
    - I use **Chrome DevTools** to inspect and test styling and responsive desing during my development process.
- [W3C](https://validator.w3.org)
    - I use **W3C** to check the HTML and CSS files.
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

### Testing user stories



### Testing contact form






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

- Inmediately after, I went to my GitHub page and enter to the repository named: MilestoneProject_1.

- Once in the repository I went to setting, on the right top side of the page, and scrolled down to GitHub pages.

- I selected the master branch.

- Finally a link to the live website appeared.

Note:  The deployed site will update automatically upon new commits to the master branch.


### Local deployment 

To run locally, you can clone this repository directly into the editor of your choice by pasting
`git clone https://github.com/jdquerales/MilestoneProject_1.git` into your terminal
into your terminal. To cut ties with this GitHub repository, type `git remote rm origin` into the terminal.


## Credits

### Media
- The photos used in portfolio section were obtained from [Pixabay](https://pixabay.com).

### Acknowledgements

- I received inspiration for this project from [Bootstrap Made](https://bootstrapmade.com/).
- I would like to thank my mentor Dick Vlaanderen for his support and helpful suggestions.
- I would like to thank my friends and colleagues from the Tyndall Institute, Ransell D'Souza and Manuel Odelli
  for their feedback on the deployed website.
- I would like to give an special thanks to Dermot Crinnigan for his support and feedback on the design of my project.