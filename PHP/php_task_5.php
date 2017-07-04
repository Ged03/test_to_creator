<?php

function clockDegree($hour, $minute) 
{
    if (is_int($hour+$minute)&&$hour>='1'&&$hour<='12'&&$minute>='1'&&$minute<='60')
        return abs($hour*30+$minute/2-$minute*6);
    else return 'Incorrect input data.';
}

echo clockDegree(3, 15);
?>