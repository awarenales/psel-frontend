fetch('http://www.mocky.io/v2/5c85c03d340000d40289bcbb')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });