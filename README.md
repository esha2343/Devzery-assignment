# React + Vite

# Devzery Assignment

This project is a simple API chaining dashboard built using React. The application allows users to select an API, fetch data, create posts, and display the results dynamically.

## 1. Setup Instructions

### Prerequisites
- Node.js (v14.x or later)
- npm or yarn package manager

 Steps to Run the Application
1. **Clone the repository:**
   ```bash
   git clone https://github.com/esha2343/Devzery-assignment.git
   cd Devzery-assignment
2. **Install dependencies: If using npm:
    ```bash
    Copy code
    npm install
3. **Start the development server: If using npm:
     ```bash
     npm start
4. Open the application in your browser:
     ```bash
     http://localhost:3000


## 1. Brief Explanation of Approach
  The application is designed as a simple API chaining dashboard. Users can:
  
  Select an API (e.g., fetch users, create a post, or fetch comments).
  Submit or retrieve data based on their selection.
  View the results displayed dynamically on the interface.
  Main components:
  Home: Acts as the layout container and renders the WorkflowBuilder.
  WorkflowBuilder: Handles API selection, form submission (for creating posts), and displays API response data.
  Context and Reducer: A global state is managed using the ApiChainContext, although the current workflow does not utilize full API chaining.

  
## 2. List of Completed Features
  API selection (Users, Create Post, Comments)
  Fetching and displaying data from APIs
  Form submission for creating new posts
  API chaining setup using React Context and Reducer
  
## 3. Known Issues
  The API chaining logic exists but is not fully utilized in this version.
  Error handling for invalid user input could be improved.
  There might be minor layout issues on smaller screens.
  
