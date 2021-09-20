"use strict";

const chatHubUrl = "http://localhost:8080/chatHub";
const restUrl = "http://localhost:8081/api/SendMessage";

var connection = new signalR.HubConnectionBuilder().withUrl(chatHubUrl).build();

//Disable send buttons until connection is established
document.getElementById("sendSignalRButton").disabled = true;
document.getElementById("sendRestButton").disabled = true;

connection.on("ReceiveMessage", function (user, message) {
    var li = document.createElement("li");
    document.getElementById("messagesList").appendChild(li);
    // We can assign user-supplied strings to an element's textContent because it
    // is not interpreted as markup. If you're assigning in any other way, you 
    // should be aware of possible script injection concerns.
    li.textContent = `${user} says ${message}`;
});

connection.start().then(function () {
    document.getElementById("sendSignalRButton").disabled = false;
    document.getElementById("sendRestButton").disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
});

document.getElementById("sendSignalRButton").addEventListener("click", function (event) {
    var user = document.getElementById("userInput").value;
    var message = document.getElementById("messageInput").value;
    connection.invoke("SendMessage", user, message).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});

document.getElementById("sendRestButton").addEventListener("click", function (event) {
    var user = document.getElementById("userInput").value;
    var message = document.getElementById("messageInput").value;
    $.ajax({
        type: "POST",
        url: restUrl,
        data: JSON.stringify({
            user: user,
            message: message 
        }),
        contentType: "application/json",
        error:function(res){
            console.error(res.statusText);
        }
    });
    event.preventDefault();
});