# Anonymous Feedback Service

[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- [![gg][gg-shield]][gg-url] -->


## Description

This project represents an app where people can collect feedback. In this app teacher (or anyone who wants) can create a session related to their class to collect feedback from students. The feedback can be sent right during the class if, for example, someone wants to notify teacher with some problems. Or right after class if they want to rate a lesson and send a useful feedback for teacher to work on.

The main idea of this app is that student can send feedback and rate classes anonymously.
So if student is having any troubles pointing some problems to teacher they can send feedback anonymously and even get a response if it is needed.


## Demo
Registration and Log in section:
![pic1](https://github.com/InnoSWP/AnonymusFeedbackService_B21-06/blob/main/imgs/pic1.png)


Dashboard:
![pic2](https://github.com/InnoSWP/AnonymusFeedbackService_B21-06/blob/main/imgs/pic2.png)


Detaild about the session:
![pic3](https://github.com/InnoSWP/AnonymusFeedbackService_B21-06/blob/main/imgs/pic3.png)


Feedback form for the students:
![pic4](https://github.com/InnoSWP/AnonymusFeedbackService_B21-06/blob/main/imgs/pic4.png)


Choose anonymity mode:
![pic5](https://github.com/InnoSWP/AnonymusFeedbackService_B21-06/blob/main/imgs/pic5.png)


Feedback added to a teacher's page:
![pic6](https://github.com/InnoSWP/AnonymusFeedbackService_B21-06/blob/main/imgs/pic6.png)


## How to use
Firstly, user needs to create an account or sign in. Then you go to dashboard and create a new session. There you see a button, which generates a link and copies it to the clipboard automatically. After that you share the link in the group chat, so the students can open a feedback form via this link. Students write their messages, provide their ratings of the class. Teacher can see the feedbacks on his dashboard, answer the questions in case there are, improve something reading feedbacks after the class.
## Features
* Registration and authorization
* Session creation
* Link generation
* Anonymity
* Reactions and ratings
* Fast messages


## Project Installation
First of all, you need to install **npm** in both _.\client\\_ and _.\server\\_ directories:
```
npm i
```
Then you should start frontend and backend separetly.
Start backend with the following commands from the directory _.\server\\_ through the command line:
```
npm run build
npm run start:dev
```
And then start client from the directory _.\client\\_:
```
npm run dev
```
The only thing you need to do to use the app is to connect it to a database (we used postgreSQL, so you can use it as well).

## Frameworks and technologies used
For this project we used
* HTML
* CSS
* JS
* Typescript 
* React library for JS
* next JS framework for React JS
* express JS 
* postgreSQL





## License
[Link to MIT License](https://github.com/InnoSWP/AnonymusFeedbackService_B21-06/blob/main/LICENSE)





<!-- additional links -->
[contributors-shield]: https://img.shields.io/github/contributors/InnoSWP/AnonymusFeedbackService_B21-06.svg?style=for-the-badge
[contributors-url]: https://github.com/InnoSWP/AnonymusFeedbackService_B21-06/issues/graphs/contributors
[issues-shield]: https://img.shields.io/github/issues/InnoSWP/AnonymusFeedbackService_B21-06.svg?style=for-the-badge
[issues-url]: https://github.com/InnoSWP/AnonymusFeedbackService_B21-06/issues
[gg-shield]: https://badgen.net/badge/AnonymusFeedbackService/Project/purple?icon=travis
[gg-url]: https://github.com/orgs/InnoSWP/projects/61/views/1
[license-shield]: https://img.shields.io/github/license/InnoSWP/AnonymusFeedbackService_B21-06.svg?style=for-the-badge
[license-url]: https://github.com/InnoSWP/AnonymusFeedbackService_B21-06/blob/main/LICENSE

