const req = new XMLHttpRequest();

req.open("GET", "https://restcountries.com/v3.1/all");
req.send();

req.onload = function () {
    if (req.status >= 200 && req.status < 300) {
        var data = JSON.parse(req.response);
        data.forEach((element) => {
            // element.forEach((item) => {
            for (let key in element) {
                if (key == "flag") {
                    console.log(element[key]);
                }
            }
            // });
        });
    }
};

// 200 299 - pass codes
// 400 not found