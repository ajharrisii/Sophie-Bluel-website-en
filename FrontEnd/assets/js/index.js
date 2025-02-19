


const work = {
    "id": 1,
    "title": "Tahina lampshade",
    "imageUrl": "http://localhost:5678/images/abajour-tahina1651286843956.png",
    "categoryId": 1,
    "userId": 1,
    "category": {
      "id": 1,
      "name": "Objects"
    }
  }
  // create a function that uses that uses the work variable //
  
// Function to get data from the API and attach it to the DOM
function getDataAndAttachToDOM() {
    // Replace 'API_URL' with your actual API endpoint from Swagger
    const apiUrl = 'https://localhost:5678/api/users/login'; 

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Create an element to display the data
            const dataElement = document.createElement('div');
            dataElement.textContent = JSON.stringify(data); // Convert data to string for display

            // Attach the element to the DOM
            document.body.appendChild(dataElement);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Call the function to execute it
//getDataAndAttachToDOM();

// Function to fetch data from the API
function fetchWork(workId) {
    // Replace 'API_URL' with your actual API endpoint from Swagger
    const apiUrl = 'https://localhost:5678/works/${workId}';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Create an element to display the work
            const workElement = document.createElement('div');
            workElement.textContent = `Work ID: ${data.id}; Title: ${data.title}`; // Use backticks for template literals
            console.log(`Work ID: ${data.id}, Title: ${data.title}`);

            // Attach the element to the DOM
            document.body.appendChild(workElement);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Loop to call the fetchWork function for multiple works
for (let i = 1; i <= 5; i++) { // Adjust the range as needed
    fetchWork(i); // Assuming works are numbered 1 to 5
}

