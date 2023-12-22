
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

const sectionsToObserve = document.querySelectorAll('.section');

sectionsToObserve.forEach(section => {
    observer.observe(section);
});

function goBack() {
    window.history.back();
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
