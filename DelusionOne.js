function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        console.log("Fetching user data...");
        
        setTimeout(() => {
            const users = {
                1: { id: 1, name: "John Doe", email: "john@example.com" },
                2: { id: 2, name: "Jane Smith", email: "jane@example.com" }
            };

            const user = users[userId];

            if (user) {
                resolve(user); // Successfully found the user
            } else {
                reject("User not found!"); // Reject the Promise if user doesn't exist
            }
        }, 2000);
    });
}

// Using the Promise
fetchUserData(1)
    .then(user => {
        console.log("User Data:", user);
    })
    .catch(error => {
        console.error("Error:", error);
    });
