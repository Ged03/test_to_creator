<html>
    <head>
        <title>Gallery</title>
        <link rel="stylesheet" type="text/css" href="css/style4.css">
    </head>
    <body>
       <span>Выберите изображение в формате "jpeg".</span>
        <form method="post" action="php_task_4.php" enctype="multipart/form-data">
            <input type=file name="filename">
            <input type="submit" value="Загрузить">
        </form>
    </body>
</html>


<?php
$dir    = 'images/';
if (!file_exists($dir)) mkdir($dir);
if ($_FILES)
{
    if($_FILES['filename']['type']=='image/jpeg')
    {
        //Сделал генерацию случайных имён по времени
        //знаю, что есть другие способы, но в данном случае считаю это достаточным.
        move_uploaded_file($_FILES['filename']['tmp_name'], $dir.'image'.time().'.jpg');
        echo 'Файл успешно загружен. <br>';
    }
    else echo 'Некорректный тип файла. <br>';
}
//Получение названий всех файлов указанной директории
$files = scandir($dir);
foreach($files as $file)
{
   if(mime_content_type($dir.$file)=='image/jpeg')
        echo '<img src='.$dir.$file.'>';
}
?>