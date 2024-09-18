# Todo List Application

This is a simple Todo List application built with **ReactJS** and styled with **Material UI**. The app allows users to manage their daily tasks by adding, editing, marking tasks as complete/incomplete, and removing completed tasks. The list of todo items persists even after refreshing the page using local storage.

## Features

- Display a list of todo items.
- Add new todo items with a title.
- Mark tasks as complete/incomplete by checking/unchecking the checkbox.
- Edit a todo item’s title by double-clicking on the item.
- Remove all completed tasks with the "Clear Completed" button.
- Persist todo list data in **local storage** for state retention across page refreshes.

## Technologies Used

- **ReactJS**: For building the UI components and managing state.
- **Material UI**: For styling and creating a responsive, modern design.
- **Local Storage**: To persist todo items across sessions.

## How to Use

1. **Add a Task**: Enter a title for the task in the input field and click the "Add" button.
2. **Mark as Complete/Incomplete**: Click the checkbox next to a task to mark it as complete or incomplete.
3. **Edit a Task**: Double-click on a task to edit its title. Press Enter to save changes.
4. **Clear Completed Tasks**: Click the "Clear Completed" button to remove all completed tasks.
5. The list of tasks will remain even if you refresh the page.

## Installation and Setup

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/krishnaagwal/ToDoList.git
   ```
   
2. Navigate into the project directory:
   ```bash
   cd todo-app
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the app.

## Deployment

The application has been deployed using [Netlify](https://www.netlify.com/). You can view the live version of the app here (https://lineuplist.netlify.app).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to the React and Material UI documentation for guidance on building and styling components.
