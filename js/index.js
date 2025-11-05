function changeContentOfFirstBlock() {
    const width = window.innerWidth;
    const element = document.getElementById("first-block-content");
    const buttonElement = document.getElementById("first-block-download-btns");
    
    const secondBlockP = document.getElementById("second-block-p")

    if (!element || !buttonElement) return;

    const children = element.children;

    if(width <= 514){
        secondBlockP.innerHTML =
        "Fantasy football lets you become the manager.<br/><br/>Build you dream team of real players - their real match stats earn you points.<br/><br/>Every pass, goal, and save moves you up the ranks."
    }
 
    if(width <= 524){
        children[0].innerHTML = "Play. Compete. Win.";
        children[1].innerHTML = "Rule the Fantasy Football<br/>Arena.";
    }
    else if(width > 514 && width <= 680){
          children[0].innerHTML = "Play. Compete. Win.";
        children[1].innerHTML = "Rule the Fantasy Football Arena.";
    }else if (width > 680 && width <= 816) {
        children[0].innerHTML = "Play. Compete. Win.<br/>Rule the Fantasy FootBall Arena.";
        children[1].innerHTML = "Build you dream team, join global contests, and<br>climb the leaderboard - all on Goalpe.";
    } else{
        children[0].innerHTML = "Play. Compete. Win.<br/>Rule the Fantasy FootBall Arena.";
        children[1].innerHTML = "Build you dream team, join global contests, and climb the<br>leaderboard - all on Goalpe.";
    }
}

// Initialize on page load
changeContentOfFirstBlock();

// Optimized resize handler with debounce for better performance
let resizeTimeout;
window.addEventListener('resize', function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(changeContentOfFirstBlock, 150);
});