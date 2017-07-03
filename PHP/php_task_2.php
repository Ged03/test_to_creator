<?php

function convertDate($day, $month) 
{
   if (checkdate($month, $day, 2017))
   {
        $string_months=array('января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря');
       $month--;
       return ("$day "."$string_months[$month]");
   }
    else return 'no';
}

echo convertdate(25, 2);
?>