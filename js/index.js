let BrowserDetect;
if (navigator.userAgent.includes("Chrome")) {
    document.getElementById("sText1").style.cssText = "opacity: 1; filter: none; transform: none";
    document.getElementById("sText2").style.cssText = "opacity: 1; filter: none; transform: none";
    document.getElementById("sText3").style.cssText = "opacity: 1; filter: none; transform: none";
} else {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });
    const hiddenElements = document.querySelectorAll('.s-text');
    hiddenElements.forEach((el) => observer.observe(el));
}