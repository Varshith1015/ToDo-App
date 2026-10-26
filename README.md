# ToDo App

A task board built with plain HTML, CSS, and JavaScript. It helps us organize work into three stages: To Do, In Progress, and Done.

## Features

- Three-column board for task tracking
- Move tasks left and right between stages
- Simple, clean UI with responsive layout
- No build tools or dependencies required
- Fast to run locally in any browser

## Project Structure

```text
ToDo App/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How It Works

The app starts with a few sample tasks in each column. Each task includes controls to move it forward or backward across the workflow:

- To Do → In Progress
- In Progress → Done
- In Progress → To Do
- Done → In Progress

## Run the App Locally

### Option 1: Open directly in browser

1. Navigate to the project folder.
2. Double-click `index.html`.
3. The app will open in your default browser.

### Option 2: Serve with a local web server

If you prefer to run it through a local server:

```bash
cd "C:\Users\ravip\OneDrive\Desktop\MYProjects\ToDo App"
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Notes

This project is a frontend-only task board.

