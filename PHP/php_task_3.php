<html>
    <head>
        <title>Calc</title>
    </head>
    <body>
        <form method="post" action="php_task_3.php">
            <input type=text name="num1">
            <input type=radio name="oper" value="1" checked=checked>+
            <input type=radio name="oper" value="2">-
            <input type=radio name="oper" value="3">*
            <input type=radio name="oper" value="4">/
            <input type=text name="num2">
            <input type="submit">
        </form>
    </body>
</html>


<?php
//Завершение скрипта, если переменные не установлены
if (!isset($_POST['num1'])&&!isset($_POST['num2'])) exit;

//Проверка, являются ли введённые значения числами
if (is_numeric($_POST['num1'])&&is_numeric($_POST['num2']))
{
    $num1=$_POST['num1'];
    $num2=$_POST['num2'];
    $oper=$_POST['oper'];
    switch ($oper){
        case 1: echo 'Результат: '.($num1+$num2);
        break;
        case 2: echo 'Результат: '.($num1-$num2);
        break;
        case 3: echo 'Результат: '.($num1*$num2);
        break;
        case 4: echo 'Результат: '.($num1/$num2);
        break;
    }
}
else echo 'Введите корректно оба числа.';
?>