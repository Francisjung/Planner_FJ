# Assignment 5: Planner

## Description

- This project was created to provide a scheduling solution for students with a 9-5 schedule.
- The schedule provides nine blocks, each of which can be editted and saved to local storage.
- By providing a way for students to save their schedules long term, we hope to offer a scheduling solution which can help them to organize both their personal and professional lives.
- Working on this project has helped me to better learn how to travers the DOM, and access local browser storage. 

## Table of Contents (Optional)

- [Usage](#usage)
- [License](#license)
- [Features](#features)

## Usage

Using the schedule is simple, to begin go to (https://francisjung.github.io/Planner_FJ/).
![Screenshot 1 of planner](https://raw.githubusercontent.com/Francisjung/Planner_FJ/main/Assets/screenshot1.PNG)

You may enter any task you have for the hour in the box to the right of the time. A green box means it is in the future, grey means it is in the present, and red means it is in the future.
![Screenshot 2 of planner](https://raw.githubusercontent.com/Francisjung/Planner_FJ/main/Assets/screenshot2.PNG)

Once you have the content of the schedule filled out, you may press the save button to commit it to local storage. This will remain until the cache has been cleared or something new is entered to the text field. 
![Screenshot 3 of planner](https://raw.githubusercontent.com/Francisjung/Planner_FJ/main/Assets/screenshot3.PNG)


## License

MIT License

Copyright (c) [2023] [Francis Jung]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Features

- Displays nine one hour schedule slots which change color based on the time of day.
- Each block can be editted, allowing the user to enter any desired event in the hour block.
- If the block is in the past it is grey, present blocks are red, and future blocks are green.
- Each block has a save button to the right of it which will save the text content of the block to local storage.
- Todays date is displayed at the top of the page.