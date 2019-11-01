(function act_on_code(code) {
    if (code === undefined) {
        code = prompt("Code:");
    }
    window.location.href = "https://reddit.com/" + code;
})()
