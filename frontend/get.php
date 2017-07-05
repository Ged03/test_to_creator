<?php
if (isset($_GET['curCount']))
{
    $product=array(
        'img'  => 'images/Gretsch.jpg',
        'name' => 'Gretsch G6136CST USA Custom Shop White',
        'price' => '805 000'
        );
    $response=[$product, $product, $product];
    echo json_encode($response);
}
?>