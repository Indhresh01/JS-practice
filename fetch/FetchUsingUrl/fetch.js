function userData() {
    fetchData()
        .then(data => {
            const display = document.getElementById('display');
            display.innerHTML = '';
            data.forEach(user => {
                const userdetails = document.createElement('div');
                userdetails.className = 'users';
                userdetails.innerHTML = `<p>Name: ${user.name}</p>
                                         <p>Address: ${user.address.street}, ${user.address.city}</p>
                                         <p>Email: ${user.email}</p>`;
                display.appendChild(userdetails);
            });
        })
        .catch(error => {
            console.log(error);
        });
}

function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error("Network issue, Can't fetch files");
            }
            return response.json();
        })
        .catch(error => {
            console.log("Network issue, Can't fetch files");
            throw error; // Re-throw the error to be caught in userData
        });
}

userData();
