# NASA APOD Project 🌌

This project is a **React** application that showcases NASA's **Astronomy Picture of the Day (APOD)** using the [NASA APOD API](https://api.nasa.gov/). Each day, the app fetches and displays a new image with accompanying details, allowing users to explore and learn something new about the universe daily.

## Features

- **Daily Astronomy Image**: Automatically loads and displays the APOD image for the current day.
- **Image Details**: Shows title, description, and date for each APOD image.
- **Date Picker for Past Images**: Users can select any date to view previous APOD images.
- **Responsive Design**: Built with responsive styles to work seamlessly across devices.
- **Error Handling**: Displays friendly error messages if there's an issue fetching data or if an invalid date is selected.

## Tech Stack

- **Frontend**: React, CSS
- **API**: NASA APOD API

## Getting Started

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/nasa-apod-react.git
    cd nasa-apod-react
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Obtain an API Key**:
   - Register at [NASA's API Portal](https://api.nasa.gov/) to get a free API key.
   - Create a `.env` file in the root of the project and add your API key:
     ```
     REACT_APP_NASA_API_KEY=your_api_key_here
     ```

4. **Run the Project**:
    ```bash
    npm start
    ```
   The app will run locally at `http://localhost:3000` or visit our website [NASA PROJECT DEMO](https://apods.vercel.app).
