function toggleStatus() {
    var statusElement = document.getElementById("status");
    var currentDate = new Date();
    var day = currentDate.getDate().toString().padStart(2, '0');
    var month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    var year = currentDate.getFullYear();
    var hours = currentDate.getHours().toString().padStart(2, '0');
    var minutes = currentDate.getMinutes().toString().padStart(2, '0');
    var seconds = currentDate.getSeconds().toString().padStart(2, '0');
    var dateTime = day + "/" + month + "/" + year + " " + hours + ":" + minutes + ":" + seconds;
    var status = statusElement.textContent;

    if (status === "Sim") {
        statusElement.textContent = "Não";
    } else {
        statusElement.textContent = "";
    }

    statusElement.textContent += " Último clique: " + dateTime;

    // Save status in a cookie
    document.cookie = 'status=' + encodeURIComponent(statusElement.textContent) + '; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
}

// Load status from cookie on page load
window.onload = function () {
    var savedStatus = getCookie('status');
    if (savedStatus) {
        document.getElementById('status').textContent = savedStatus;
    }
}

// Function to get cookie value by name
function getCookie(name) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return decodeURIComponent(cookie.substring(name.length + 1));
        }
    }
    return null;
}