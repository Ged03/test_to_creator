<?php

function deposit($sum, $months, $pct) 
{
    if (is_int($sum)&&is_int($months)&&is_int($pct))
    return ($sum+$sum*$pct*$months/1200);
    else return 'Incorrect input data.';
}

echo deposit(100, 15, 12);
?>