$(document).ready(function() {
    const greetings = ["Hello!", "Welcome!", "Nice to see you!", "Have a nice day!"];
    let currentIndex = 0;

    $("#changeGreeting").click(function() {
        currentIndex = (currentIndex + 1) % greetings.length;
        $("#greeting").text(greetings[currentIndex]);

        // Add a simple animation effect
        $("#greeting").hide().fadeIn(500);
    });
});