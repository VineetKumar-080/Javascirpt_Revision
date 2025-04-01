function fetchUser(userId) {
    return new Promise((resolve, reject) => {
        console.log("Fetching user...");

        setTimeout(() => {
            const users = {
                1: { id: 1, name: "Alice" },
                2: { id: 2, name: "Bob" }
            };

            const user = users[userId];

            if (user) {
                resolve(user);
            } else {
                reject("User not found!");
            }
        }, 1500);
    });
}

function fetchUserTodos(userId) {
    return new Promise((resolve, reject) => {
        console.log("Fetching todos...");

        setTimeout(() => {
            const todos = {
                1: ["Learn JavaScript", "Practice Promises", "Build a project"],
                2: ["Read a book", "Write an article"]
            };

            if (todos[userId]) {
                resolve(todos[userId]);
            } else {
                reject("No todos found for this user!");
            }
        }, 1500);
    });
}

// Chaining Promises
fetchUser(1)
    .then(user => {
        console.log("User:", user);
        return fetchUserTodos(user.id); // Return a new Promise
    })
    .then(todos => {
        console.log("User's Todos:", todos);
    })
    .catch(error => {
        console.error("Error:", error);
    });
