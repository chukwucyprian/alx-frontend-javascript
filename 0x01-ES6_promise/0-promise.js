function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: 'Data from the API' });
    }, 2000);
  });
}
export default getResponseFromAPI;
