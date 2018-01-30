console.log("hello")

let apiCall = function () {
    $.ajax({
        type: 'get',
        url: 'http://localhost:5000/api/Orders',
        dataType: 'json'
    }).then(data => {
        console.log(data);
    })
}

apiCall();
