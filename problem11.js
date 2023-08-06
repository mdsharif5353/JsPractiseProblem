// Write a function. The name of this function will be bestFriend then the function will take an array as input parameter. That array will contain the names of all your friends. Now your task is to return the name of the friend whose name is the largest. In this case you should return the name ie the friend's name (string). 



function bestFriend(friendNames) {
    if (friendNames.length === 0) {
        return "No friends listed.";
    }

    let longestName = friendNames[0];

    for (let i = 1; i < friendNames.length; i++) {
        if (friendNames[i].length > longestName.length) {
            longestName = friendNames[i];
        }
    }

    return longestName;
}

const friends = ["Rohim", "Korim", "Shofiq", "Akash"];
const longestFriend = bestFriend(friends);
console.log("The best friend is:", longestFriend);
