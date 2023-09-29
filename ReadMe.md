<!-- Project Info -->
<br>

![GitHub repo size](https://img.shields.io/github/repo-size/Pantonym/DV200-Term-1?color=lightblue)
![GitHub watchers](https://img.shields.io/github/watchers/Pantonym/DV200-Term-1?color=lightblue)
![GitHub language count](https://img.shields.io/github/languages/count/Pantonym/DV200-Term-1?color=lightblue)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Pantonym/DV200-Term-1?color=lightblue)

<!-- Name, Number, Subject and Term -->
<h5 align="center" style="padding:0;margin:0;">Nico van Wyk</h5>
<h5 align="center" style="padding:0;margin:0;">Student Number: 221179</h5>
<h6 align="center">DV200 | Term 1</h6>

</br>

<!-- Logo and link to repository -->
<p align="center">
  <a href="https://github.com/Pantonym/DV200-Term-1">
    <img src="term1\src\images\Logo.png" width="200px">
  </a>
</p>

<!-- Short Description -->
<h3 align="center">CrypTracker: API-Based Cryptocurrency Tracking Application</h3>
<p align="center"> This project aimed to create a website that displays data from a cryptocurrency api through Charts.js.
    <br>
    <!-- Bug and New Feature Links -->
    <a href="https://github.com/Pantonym/DV200-Term-1/issues">Report Bug</a>
    <a href="https://github.com/Pantonym/DV200-Term-1/issues">Request Feature</a>
    <br>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Table of Contents](#table-of-contents)
- [About the Project](#about-the-project)
  - [Project Description](#project-description)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Features and Functionality](#features-and-functionality)
- [Concept Process](#concept-process)
  - [Wireframes](#wireframes)
- [Development Process](#development-process)
  - [Implementation Process](#implementation-process)
    - [Highlights](#highlights)
    - [Challenges](#challenges)
  - [Future Implementation](#future-implementation)
- [Final Outcome](#final-outcome)
  - [Mockups](#mockups)
  - [Video Demonstration](#video-demonstration)
  - [Conclusion](#conclusion)
- [Author](#author)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- About the Project -->
## About the Project

<!--PROJECT DESCRIPTION-->
### Project Description
CrypTracker is an API-Based cryptocurrency tracking website that displays data both in text and chart format. It uses a timeline, line graph, bar charts and pie charts.

### Built With
* CSS
* JavaScript
* HTML
* Axios
* React.js
* Charts.js

<!-- GETTING STARTED -->
## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
For development and testing, a React App is required (New Terminal --> npm create-react-app)

### Installation
Here are a couple of ways to clone this repo:

1.  GitHub Desktop </br>
    Enter `https://github.com/Pantonym/DV200-Term-1.git` into the URL field and press the `Clone` button.

2.  Clone Repository </br>
    Run the following in the command-line to clone the project:

    ```sh
    git clone https://github.com/Pantonym/DV200-Term-1.git
    ```

The following installations are required if you do not clone the repo:
1. Click on Terminal and open a new terminal
2. Type the following:
3. npm i axios
4. npm i react-router-dom
5. npm i bootstrap react-bootstrap
6. npm i react-chartjs-2 chart.js

## Features and Functionality
<!-- CONCEPT PROCESS -->
## Concept Process
I chose a Western-themed website to create a contrast between selling cold products and the generic idea of a western theme, which usually includes warm climates. It also followes a very limited font and colour scheme to keep visuals consistent across pages and user types. I chose a mixture of light and dark browns to evoke the western theme, however I added red, blue and green to highlight important elements so they do not fade into the background. I worked with lecturers in contact sessions and class to get feedback on imporvements and other implementation ideas.

I chose a dark theme as it gives a modern feel to the website. It uses neon-like colours to evoke the technological aspect of cryptocurrency as a subject, also choosing a minimalist design to work with the modern theme. Each graph on the compare and timeline pages can be edited by choosing which currencies you want to display, and the landing page features a  description of the project as well as a dashboard with information on the recent top coins in the market. A more detailed description of Bitcoin is also available on this page.

<!-- Wireframes -->
### Wireframes
Landing
![Landing](/images/LandingDashboard.png)
Comparison
![Comparison](/images/ComparisonPage.png)
Timeline
![Timeline](/images/TimelinePage.png)
Ideation
![Ideation](/images/ideation.png)

<!-- Development Process -->
## Development Process

The `Development Process` is the technical implementations and functionality done for the website.

<!-- Implementation -->
### Implementation Process

* I used `Axios` to contact `CoinLore` to populate the charts used in this project. The charts were created using `Charts.js`

<!-- Highlights -->
#### Highlights

* It was very interesting to create code that automatically populates html tags with large amounts of data, as well as automatically assigning unique values to them for the higher functionality.
* Seeing the charts populate themselves and change based on input was a rewarding experience.
* Devising solutions to unique problems such as the page loading before charts have been populated.

<!-- Challenges -->
<!-- Explain the challenges faced with the project and why you think you faced it or how you think you'll solve it (if not solved), or how you solved it -->
#### Challenges

* A major challenge was perspective. It was quite hard to visualize what the new code was going to do, especially the code that  automatically populates and creates html tags.
* Another problem was asynchronous code, such as the code that sets universal values.  Different methods of forcing the code to wait was created to ensure all the data loads.

<!-- Future Implementation -->
### Future Implementation

* In the future, more precise data would be added, such as data form CoinGecko. 
* More detail would also be given to the UI of the website to ensure it is of the highest quality. 

<!-- Final Outcome -->
## Final Outcome
<!-- MOCKUPS -->
### Mockups

![Mockup1](/images/Mockup1.jpg)
![Mockup2](/images/Mockup2.jpg)
![Mockup3](/images/Mockup3.jpg)
![Mockup4](/images/Mockup4.jpg)
![Mockup5](/images/Mockup5.jpg)

<br>

<!-- VIDEO DEMONSTRATION -->
### Video Demonstration

  * Caution: Because this is a Markdown file, this video will have no sound. It must be downloaded to access the sound.
<video src="./images/DemoVideo.mp4" controls="controls" style="max-width: 730px;">
</video>

### Conclusion
In conclusion, I have created a website that acts as a dashboard for data from an API, which is displayed through charts created through Charts.js. I have learned how to create and use a react application, as well as how to implement and style charts with charts.js. I have also used Bootstrap inside of react for greater styling.

<!-- AUTHORS -->
## Author
* **Nico van Wyk** - [Github](https://github.com/Pantonym)

<!-- LICENSE -->
## License
Distributed under the MIT License. See `LICENSE` for more information.

<!-- Contact -->
## Contact
**Nico van Wyk** - [221179@virtualwindow.co.za](mailto:221179@virtualwindow.co.za)

* **Project Link** - https://github.com/Pantonym/DV200-Term-1

<!-- ACKNOWLEDGEMENTS -->
<!-- all resources that you used and Acknowledgements here -->
## Acknowledgements

* [Lecturer](https://github.com/TsungaiKats)
* [Figma](https://www.figma.com/)
* [W3Schools](https://www.w3schools.com)