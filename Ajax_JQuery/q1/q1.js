
$(function () {
    
    const hour = new Date().getHours();
    let greetingText = "Hello!";

    if (hour < 12) {
        greetingText = "Good Morning!";
    } else if (hour < 18) {
        greetingText = "Good Afternoon!";
    } else {
        greetingText = "Good Evening!";
    }
    $("#greeting").text(greetingText);

    
    $("#changeGreetingBtn").on("click", function () {
        $("#greeting").text("Believe in yourself. You can do it!");
    });

    
    $("#toggleWelcomeBtn").on("click", function () {
        $("#welcomeMessage").toggle(); 
    });

    
    $("#greeting").on("click", function () {
        alert("Greeting clicked!");
    });
});
