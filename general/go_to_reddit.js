(function act_on_code(code) {
    if (code === undefined) {
        code = prompt("Code:");
    }
    if (code.length === 6) {
        window.location.href = "https://reddit.com/" + code;
    }
})()
