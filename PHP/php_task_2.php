<?php

function convertDate($day, $month) 
{
   if (checkdate($month, $day, date('Y'))) //проверка даты на корректность
   {
        $string_months=array('января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря');
        $month--;
        return ("$day "."$string_months[$month]");
   }
    else return 'Incorrect date.';
}

echo convertdate(01, 07);
?>