<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="./custom-select.css">
</head>
<body>

  <form action="index.php" method="get">
    <select class="sss" name="select">
      <option value="" <?php if(empty($_GET)) echo 'selected'; ?>>Любой</option>
      <?php for($i = 0; $i < 5; $i++): ?>
        <option <?php echo $_GET['select'] == 'option ' . $i ? 'selected' : ''; ?> value="option <?= $i ?>"><?= $i ?></option>
      <?php endfor; ?>
    </select>
    
    <input type="submit">
  </form>

  <script src="./custom-select.js"></script>
</body>
</html>
