function fetchUser(userId) {
    return new Promise((resolve, reject) => {
        console.log("Fetching user...");

        setTimeout(() => {
            const users = {
                1: { id: 1, name: "Charlie" },
                2: { id: 2, name: "Emma" }
            };

            const user = users[userId];

            if (user) {
                resolve(user);
            } else {
                reject("User not found!");
            }
        }, 2000);
    });
}

function fetchUserPosts(userId) {
    return new Promise((resolve, reject) => {
        console.log("Fetching user posts...");

        setTimeout(() => {
            const posts = {
                1: ["Post 1: JavaScript is awesome!", "Post 2: Learning Promises"],
                2: ["Post 1: Traveling the world", "Post 2: Photography tips"]
            };

            if (posts[userId]) {
                resolve(posts[userId]);
            } else {
                reject("No posts found for this user!");
            }
        }, 1500);
    });
}

// Fetch user and posts simultaneously
Promise.all([fetchUser(1), fetchUserPosts(1)])
    .then(results => {
        const user = results[0];
        const posts = results[1];

        console.log("User:", user);
        console.log("User's Posts:", posts);
    })
    .catch(error => {
        console.error("Error:", error);
    });
