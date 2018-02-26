var setRadius = function(newRadius) {
    if (newRadius < minRad)
        newRadius = minRad;
    else if (newRadius > maxRad)
        newRadius = maxRad;
    radius = newRadius
    context.lineWidth = radius * 2;

    radSpan.innerHTML = radius;
}



//var applies to all the diff variables when set up on this manner
var minRad = 1,
    maxRad = 100,
    defaultRad = 2,
    interval = 2,
    radSpan = document.getElementById('radval'),
    decRad = document.getElementById('decrad'),
    incRad = document.getElementById('incrad');


decRad.addEventListener('click', function() {
    setRadius(radius - interval);
});
incRad.addEventListener('click', function() {
    setRadius(radius + interval);
});