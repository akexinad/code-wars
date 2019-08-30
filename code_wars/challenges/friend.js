function friend(friends) {

    if (typeof(friends) === "string") {
        return console.log("Name has to be string!");
    }

    return friends.filter( friend => friend.length === 4 );
}

// BEST SOLUTION

// Mine without the error handling.