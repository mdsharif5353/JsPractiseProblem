// A website will have an input field. There will be a button called double with it. If you enter a number in the input field, it will double that number below. There will be another button called triple. Clicking on it will triple the number in the input field. That number will show below. And if you write anything other than a number in the input field, then an alert will say Please enter a number. solve it using js

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">

// </head>
// <body>

//     <div class="container mt-5">
//         <div class="row">
//             <div class="col-md-4">
//                 <input type="text" id="input" class="form-control" placeholder="Enter a number">
//             </div>
//             <div class="col-md-2">
//                 <button id="doubleButton" class="btn btn-primary">Double</button>
//             </div>
//             <div class="col-md-2">
//                 <button id="tripleButton" class="btn btn-success">Triple</button>
//             </div>
//         </div>
//         <div class="row mt-3">
//             <div class="col-md-6">
//                 <p id="doubledNumber"></p>
//             </div>
//             <div class="col-md-6">
//                 <p id="tripledNumber"></p>
//             </div>
//         </div>
//     </div>

    <script>
        function doubleNumber() {
            var input = document.getElementById("input").value;
            if (!isNaN(input)) {
                var doubledNumber = input * 2;
                document.getElementById("doubledNumber").innerHTML = "Doubled: " + doubledNumber;
                document.getElementById("tripledNumber").innerHTML = "";
            } else {
                alert("Please enter only number.");
            }
        }

        function tripleNumber() {
            var input = document.getElementById("input").value;
            if (!isNaN(input)) {
                var tripledNumber = input * 3;
                document.getElementById("tripledNumber").innerHTML = "Tripled: " + tripledNumber;
                document.getElementById("doubledNumber").innerHTML = "";
            } else {
                alert("Please enter only number.");
            }
        }

        document.getElementById("doubleButton").addEventListener("click", doubleNumber);
        document.getElementById("tripleButton").addEventListener("click", tripleNumber);
    </script>
//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
// </body>
// </html>
