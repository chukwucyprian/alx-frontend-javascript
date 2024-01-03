// 0-promise.js
function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
      // Simulating an API call that takes some time
      setTimeout(() => {
        // Assuming the API call was successful, resolving the Promise with some data
        resolve({ message: "Data from the API" });
        // In a real scenario, you might fetch data from an actual API
      }, 2000); // Simulating a delay of 2 seconds
    });
  }
  
  export default getResponseFromAPI;
  