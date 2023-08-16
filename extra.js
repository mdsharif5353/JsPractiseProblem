// button for delete 
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <title>Delete Confirmation Button</title>
</head>
<body>
  <div class="container mt-4">
    <h3 id="confirmationTitle">Delete Confirmation</h3>
    <p>Are you sure you want to delete this item?</p>
    <button id="deleteBtn" class="btn btn-danger">Delete</button>
  </div>

  <script>
    document.getElementById("deleteBtn").addEventListener("click", function() {
      const confirmationTitle = document.getElementById("confirmationTitle");
      if (confirm("Are you sure you want to delete this item?")) {
        confirmationTitle.remove(); // Remove the h3 element
        alert("Item deleted!");
      } else {
        alert("Deletion canceled.");
      }
    });
  </script>
</body>
</html>