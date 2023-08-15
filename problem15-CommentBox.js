<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <title>Comment Box with Bootstrap</title>
</head>
<body>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="form-group">
          <div id="commentDisplay" class="mb-3"></div>
          <textarea id="newComment" class="form-control" placeholder="Add a comment"></textarea>
          <button id="addCommentBtn" class="btn btn-primary mt-2">Add Comment</button>
        </div>
      </div>
    </div>
  </div>

  <script>
    document.getElementById("addCommentBtn").addEventListener("click", function() {
      const textArea = document.getElementById("newComment");
      const valueTxt = textArea.value;

      const displayT = document.getElementById("commentDisplay");
      const p = document.createElement("p");
      p.innerText = valueTxt;
      displayT.append(p);

      textArea.value = "";
    });
  </script>
</body>
</html>