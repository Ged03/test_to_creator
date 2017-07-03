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
$dir    = 'images';
//Получение названий всех файлов указанной директории
$files = scandir($dir);


print_r($files);
echo '<br>'.mime_content_type('images/'.$files[2]);
?>