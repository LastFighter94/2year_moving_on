<?php
use app\assets\AppAsset;
use yii\helpers\Html;

AppAsset::register($this);
?>

<?php $this->beginPage() ?>
<!doctype html>
<html lang="<?= Yii::$app->language ?>" class="h-100">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <?= Html::csrfMetaTags() ?>
    <title><?= $this->title ?></title>
    <?php $this->head() ?>
</head>
<body>
<?php $this->beginBody() ?>
<div class="wrap">
    <div class="container">
        <ul class="nav nav-pills">
            <li class="nav-link">
                <?= Html::a('Главная', '/') ?>
            </li>
            <li class="nav-link">
                <?= Html::a('Форма для отправки статей', ['/post/index']) ?>
            </li>
            <li class="nav-link">
                <?= Html::a('Какая-то страничка', ['/post/show']) ?>
            </li>
        </ul>

<!--        --><?php //debug($this->blocks) ?>

        <?php if(isset($this->blocks['block1'])) : ?>
            <?php echo $this->blocks['block1'] ?>
        <?php endif ?>

        <?= $content ?>
    </div>

</div>


<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
