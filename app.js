window.addEventListener("DOMContentLoaded", () => {
    var form = document.getElementById("form");
    var status = document.getElementById("status");

    function success() {
        form.reset();
        status.innerHTML = "Thanks!";
        status.classList.add("success");
    }

    function error() {
        status.classList.add("error");
        status.innerHTML = "Oops, There was a problem!";
    }

    form.addEventListener("submit", (ev) => {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}