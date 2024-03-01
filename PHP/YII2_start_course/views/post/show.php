<?php
// models
/** @var string $testTable */
/** @var string $categories */
/** @var string $categoriesById */
/** @var string $categoriesExample */

//можно также задавать вне view - на уровне контроллера
//$this->title = 'Какая-то страничка';
?>

<?php $this->beginBlock('block1'); ?>
    <h1>Заголовок страницы</h1>
<?php $this->endBlock(); ?>

<h1>Show action</h1>

<?php //debug($testModelVar) ?>

<button class="btn btn-success">Click me...</button>

<br><br>

<div style="padding: 1rem; border: 1px solid black; background-color: #c79d9d;">
    <h1>Неоптимизированный-оптимизированный пример</h1>

    <?php
    echo '<ul>';
        foreach ($categoriesExample as $cat) {
                echo '<li>' . $cat->title . '</li>';
                $products = $cat->products;
                foreach ($products as $product) {
                    echo '<ul>';
                        echo '<li>' . $product->title . '</li>';
                    echo '</ul>';
                }
            }
    echo '</ul>';
    ?>
</div>

<br><br>

<h1>testtable - first test getting model - testing different ActiveRecord methods - getting data from sql model</h1>

<?php print_r($testTable); ?>

<br><br>

<h1>Categories - two models in one controller - then view</h1>

<?php print_r($categories); ?>

<br><br>

<h3>Categories CategoriesById - before -> products - table connections (здесь наглядно можно будет увидеть разницу между lazy и жадной загрузкой - будут разниться при lazy)</h3>

<!-- lazy loading -->
<!-- жадная загрузка -->
<?php print_r($categoriesById); ?>

<br><br>

<!-- обычно при lazy loading - так как один объект -->
<?php //echo count($categoriesById->products); ?>

<!-- обычно при жадной загрузке - так как массив объектов -->
<?php echo count($categoriesById[0]->products); ?>

<br><br>

<h3>Categories CategoriesById - after -> products - table connections (здесь наглядно можно будет увидеть разницу между lazy и жадной загрузкой - будут разниться при lazy)</h3>

<!-- после -> products вверху - объект видоизменился -->
<?php //debug($categoriesById); ?>
<?php print_r($categoriesById); ?>

<br><br>

<h1>Rendering model data in template - testtable</h1>

<?php foreach ($testTable as $row){
    echo $row['one'] . '<br>';
} ?>

<?php

// вариант с подключением файла лучше не использовать - если кода мало: лучше использовать функцию registerJs
//$this->registerJsFile('@web/js/showScripts.js', ['depends' => 'yii\web\YiiAsset']);

$this->registerJs("$('.container').append('<p>Show!!!!!</p>');", \yii\web\View::POS_LOAD);

// аналогичные методы css
$this->registerCss('.container{background: #ccc;}');

$script = <<< JS
$('.btn').on('click', function(){
    $.ajax({
        url: 'index.php?r=post/index',
        data: {testKey: 'some data from client'},
        type: 'POST',
        success: function(res){
            console.log(res, 'success!!!')
        },
        error: function(){
            console.log('err')
        }
    })
})
JS;

$this->registerJs($script)


?>