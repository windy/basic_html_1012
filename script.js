$(document).ready(function() {
    const greetings = ["你好！", "欢迎！", "很高兴见到你！", "祝你今天愉快！"];
    let currentIndex = 0;

    $("#changeGreeting").click(function() {
        currentIndex = (currentIndex + 1) % greetings.length;
        $("#greeting").text(greetings[currentIndex]);

        // 添加一个简单的动画效果
        $("#greeting").hide().fadeIn(500);
    });

    $("#alertButton").click(function() {
        alert("OK");
    });
});