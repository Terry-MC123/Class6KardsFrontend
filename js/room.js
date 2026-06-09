function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

addEventListener("DOMContentLoaded", function() {
    const roomId = getParameterByName("room-id");
    if (roomId) {
        document.querySelector("h1").innerText = roomId;
    }
})