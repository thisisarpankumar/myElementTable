function openNav()
{
	document.getElementById("myNav").style.height="100%";
    document.getElementsByClassName("fp-tooltip").style.visibility = "hidden";
}

function closeNav()
{
	document.getElementById("myNav").style.height="0%";
}

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
});

new fullpage("#fullpage", {
    autoScrolling: true,
    navigation: true,
    navigationTooltips: ['Home', "Elements"],
    showActiveTooltip: true,
    
});
