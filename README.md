
## README.md Generator

## Link to the Video of the Application
![walk-through Video](./walk-through.gif)

<a href="https://youtu.be/kOxQ7sZq2nY"> Walk-Through</a>
## Assignment 
When creating an open source project on GitHub, it’s important to have a high-quality README for the application. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions&mdash;this last part increases the likelihood that other developers will contribute to the success of the project.
The best way to contribute to a project is to either clone or fork a copy of the resposity to your computer. Then add it to another branch so you can make any changes you deem fit. This will allow for your work to be seperate from the original repository and will not make any chmages until you push them. There is a process in which the changes made are reviewed before they are committed to the resposity. For a detailed list of procedures for constributing to another respositorry, please consult this github respository:
 <a href="https://github.com/firstcontributions/first-contributions">First Contributions</a>

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```
## Installation
The installation was a bit harder than I had expected. The initial setup went smooth with the questions and answers. However, the set up for the licenses was not so smooth. The problem was connecting them to the generatemarkdown and having the license badge come out. The output kept saying undefined. This will take some time for me to figure out. 
The user interface runs very smooth and stops the user from skiping a question with the validation code. This way the user has to make a contribution to the question or they get a message thats says 'please enter a value'. This was added to each question so none of the questions can be skipped by the user. I also added a console.log at the end that indicates the redme has been created, so the user will be prompted to check the newly created README.md file to the right in the tree. I was able to add the badge through an object of licenses and setting up a Object.keys(Licenses) that only threw the keys. Then I added Object.values(Licenses), but that threw the link to the commandline. This worked and looked great on the readme, however my Tutor informed me that it was technically correct, but thats not how they wanted me to set it up. So we then made a new array of objects and passed them through the anwers and changed the link so all licenses will be added the same way. The last part of the assignment turned out to be even trickier, the wording of the acceptance criteria was very confusing. The problem was that I had a hard time differentiating between myself and the user. This seems to be the harder aspect for me and one that have just started to wrap my head around. The application is not just for me to use, it is for anyone who wants to use it. So, at first I set it up with my github username and email. Then I realized that I was making an application for anyone to use and not just myself. Learnig to code is thinking about the users experience and not just your own. Thats what was missing in my first understanding how to code and why many of the applications where so hard for to understand why we do curtain things a specific way.

## What I leant 
Node.js is not as intimidating as I first though it was. The syntax is similar to the that of the front end. The interface is very simple and similar to the first computers I used in the 90's with ms dos, before windows. I had almost forgot about those days, until I started using the command line more and became more comfortible with it. I do not seem to have a problem understanding what is being shown to me when it comes to javascript and node.js. The problem comes when I have to remember what to use from scratch and where to put it. Half the battle is understanding, the other half is implementing. Still working on it. 

## Contributors 
Again I had lots of help from my tutor Joey and my teacher's assistant's Aiden and Ben. 




