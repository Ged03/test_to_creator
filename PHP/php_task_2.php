<?php

function convertDate($day, $month) 
{
   if (checkdate($month, $day, 2017))
       return 'yes';
    else return 'no';
}

echo convertdate(31, 2);
?>