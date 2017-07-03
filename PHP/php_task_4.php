<html>
    <head>
        <title>Gallery</title>
    </head>
    <body>
        <form method="post" action="php_task_4.php" enctype="multipart/form-data">
            <input type=file name="filename">
            <input type="submit" value="Загрузить">
        </form>
    </body>
</html>


<?php
$dir    = 'images/';
if ($_FILES)
{
    $name = $_FILES['filename']['name'];
    move_uploaded_file($_FILES['filename']['tmp_name'], $dir.$name);
    echo 'Файл успешно загружен. <br>';
}
//Получение названий всех файлов указанной директории
$files = scandir($dir);
foreach($files as $file)
{
   if(mime_content_type($dir.$file)=='image/jpeg')
        echo '<img src='.$dir.$file.'>';
}
?>