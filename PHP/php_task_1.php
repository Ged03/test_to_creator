<?php

function deposit($sum, $months, $pct) 
{
    return ($sum+$sum*$pct*$months/1200);
}

echo deposit(100, 15, 12);
?>