<?php
/* @var $hello string */
/* @var $names array */

/* @var $hi string */
/* @var $names array */
/* @var $id 'string || number' */

/* @var $data array */

?>

<!--<h1>Index --><?//= $hello ?><!--</h1>-->
<h1>Index <?= $data['hi'] ?></h1>

<br><b><?= $data['id']; ?></b><br>

<?php
foreach ($data['names'] as $name){
    echo $name . '<br> fgdfgd';
}
?>

<?php //var_dump($namess) ?>
<?php //print_r($namess) ?>