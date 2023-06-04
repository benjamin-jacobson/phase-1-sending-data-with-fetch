// const formData = {
//     dogName: "Polo",
//     dogBreed: "ManBearDog",
//   };

// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/dogs", configurationObject)
// .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
//     console.log(object);
//   })
//   .catch(function (error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   });

// console.log("I ran 1")



function submitData(userName, userEmail){

    const formData = {
        user: userName,
        email: userEmail,
      };    

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData),
    };

    return fetch("http://localhost:3000/users", configurationObject)
    .then(function (res) {return res.json()})
    .then(function (obj) {
        console.log(obj.id)

        // Adding element to the html as a new paragraph in body
        x = document.querySelector("body")
        const newParagraph = document.createElement("p")
        newParagraph.innerText = `Added ${obj.id} name ${obj.user} email ${obj.email}`
        x.append(newParagraph)
    
    })
    .catch(function (error) {
        alert("Bad things! Ragnarokkk!")
    //     console.log(error.message);
    });


}

submitData("Joxhn","JJaa@gmail.com")