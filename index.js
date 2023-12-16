// Add your code here
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };


// const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify({
//       dogName: "Byron",
//       dogBreed: "Poodle",

//     },
//     body: JSON.stringify(formData),
//   };

//   fetch("http://localhost:3000/dogs", configurationObject);
//   .then((resp) => resp.json())
//   .then((data) => console.log(data))
//   .catch(function (error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   });



function submitData(name, email) {
  let obj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  };

  return fetch("http://localhost:3000/users", obj)
    .then((resp) => resp.json())
    .then((data) => {
      let newId = data.id;
      let idElement = document.createElement('p');
      idElement.textContent = `newId: ${newId}`;
      document.body.appendChild(idElement);
    })
    .catch((error) => {
      // append the error mssage to the DOM
      
      let messageTag = document.createElement('h2')
      messageTag.textContent = error.message
      document.body.appendChild(messageTag);
      console.log(error.message)
    });

  }

  submitData("Steve", "steve@steve.com")
  submitData("Sam", "sam@sam.com")
  submitData("Jim", "Jim@jim.com")
