$(document).ready(function() {
    const greetings = ["Hello!", "Welcome!", "Nice to meet you!", "Have a great day!"];
    let currentIndex = 0;

    $("#changeGreeting").click(function() {
        currentIndex = (currentIndex + 1) % greetings.length;
        $("#greeting").text(greetings[currentIndex]);

        // 添加一个简单的动画效果
        $("#greeting").hide().fadeIn(500);
    });
});