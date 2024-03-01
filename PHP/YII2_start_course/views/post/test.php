<?php

use yii\jui\DatePicker;
use yii\widgets\ActiveForm;
use yii\helpers\Html;
use app\components\MyWidget;

/* @var $model model */
/* @var $postFormUpdateInsertModel model */
?>

<h1>Test Action</h1>

<?php

//app\controllers\wrapper\debug(Yii::$app);

//debug(Yii::$app);

//debug($model);

?>

<!--$form->field($model, 'name')->label('Имя')->passwordInput();-->
<!--$form->field($model, 'email');-->
<!--$form->field($model, 'email')->label('Имя')->input('email');-->

<!--$form->field($model, 'email')->textInput(['class'=>'test-class'])->label('Your Test Label',['class'=>'label-class'])-->

<!-- виджет без параметров -->
<?php //echo MyWidget::widget(); ?>

<!-- виджет с параметрами -->
<?php //echo MyWidget::widget(['name' => 'Вася']); ?>

<?php MyWidget::begin() ?>
    <h3>Привет мир из виджета!</h3>
<?php MyWidget::end() ?>

<div style="padding: 1rem; background: #cdd1d5; border: 1px dotted black;">
    <h3>Wrapper to model form</h3>

    <!--POPUPS-->

    <?php if(Yii::$app->session->hasFlash('success')) : ?>
        <div id="success-popup" style="display: flex; border-radius: 15px; padding: 2rem; border: 2px solid #73ff00; width: 100%; justify-content: space-between; background-color: #bdec76; align-items: center;">
            <?php echo Yii::$app->session->getFlash('success'); ?>
            <span id="close-success-popup">close</span>
        </div>

        <?php
        $script = <<< JS
            makePopupLogic('close-success-popup', '#success-popup')
            
            // document.getElementById('close-success-popup').addEventListener('click', () => {
            //     document.querySelector('#success-popup').style.display = 'none';
            // })
        JS;

        $this->registerJs($script)
        ?>
    <?php endif; ?>

    <?php if(Yii::$app->session->hasFlash('error')) : ?>
        <div id="fail-popup" style="display: flex; border-radius: 15px; padding: 2rem; border: 2px solid red; width: 100%; justify-content: space-between; background-color: #ec8476; align-items: center;">
            <?php echo Yii::$app->session->getFlash('error'); ?>
            <span id="close-fail-popup">close</span>
        </div>

        <?php
        $script = <<< JS
            makePopupLogic('close-fail-popup', '#fail-popup')
            
            // document.getElementById('close-fail-popup').addEventListener('click', () => {
            //     document.querySelector('#fail-popup').style.display = 'none';
            // })
        JS;

        $this->registerJs($script)
        ?>
    <?php endif; ?>

    <!--FORM-->

    <?php $form = ActiveForm::begin() ?>

    <?= $form->field($model, 'name'); ?>

    <?= $form->field($model, 'email', [
        'inputOptions' => [
            'class' => 'test-class',
            'placeholder' => 'test',
        ],
    ])->textInput() ?>

    <?=
    $form->field($model, 'testField', [
        'template' => "{label}\n<div class='col-md-6'>{input}</div>\n{hint}\n{error}",
        'labelOptions' => [ 'class' => 'your_custom_class_name' ]
    ])->textInput(['maxlength' => true, 'class'=>'test-class'])
    ?>

    <?= $form->field($model, 'text')->textarea(['rows' => 10]); ?>

    <?= Html::submitButton('Отправить', ['class' => 'btn btn-success']) ?>

    <?php ActiveForm::end() ?>
</div>

<!---->
<!---->
<!---->

<div style="padding: 1rem; background: #cdd1d5; border: 1px dotted black;">
    <h3>Wrapper to post-model form</h3>

    <!--POPUPS-->

    <?php if(Yii::$app->session->hasFlash('successPostForm')) : ?>
        <div id="success-popup-form" style="display: flex; border-radius: 15px; padding: 2rem; border: 2px solid #73ff00; width: 100%; justify-content: space-between; background-color: #bdec76; align-items: center;">
            <?php echo Yii::$app->session->getFlash('successPostForm'); ?>
            <span id="close-success-popup-form">close</span>
        </div>

        <?php
        $script = <<< JS
            makePopupLogic('close-success-popup-form', '#success-popup-form')
        JS;

        $this->registerJs($script)
        ?>
    <?php endif; ?>

    <?php if(Yii::$app->session->hasFlash('errorPostForm')) : ?>
        <div id="fail-popup-form" style="display: flex; border-radius: 15px; padding: 2rem; border: 2px solid red; width: 100%; justify-content: space-between; background-color: #ec8476; align-items: center;">
            <?php echo Yii::$app->session->getFlash('errorPostForm'); ?>
            <span id="close-fail-popup-form">close</span>
        </div>

        <?php
        $script = <<< JS
            makePopupLogic('close-fail-popup-form', '#fail-popup-form')
        JS;

        $this->registerJs($script)
        ?>
    <?php endif; ?>

    <!-- FORM TO TEST CREATE UPDATE -->

    <?php
    //print_r($postFormUpdateInsertModel);
    //?>

    <?php $formTwo = ActiveForm::begin() ?>

    <?= $formTwo->field($postFormUpdateInsertModel, 'postname', [
        'template' => "{label}\n<div class='col-md-6'>{input}</div><span class='hint-error-post-form'>\n{hint}\n{error}</span>",
        'labelOptions' => [ 'class' => 'your_custom_class_name' ]
    ]); ?>

    <!--    расширение, которое мы накатили через composer в папке на уровне vendor-->
    <?=

        DatePicker::widget([
            'name'  => 'from_date',
            'value'  => '1994-09-02',
            //'language' => 'ru',
            //'dateFormat' => 'yyyy-MM-dd',
        ]);

    ?>

    <?= $formTwo->field($postFormUpdateInsertModel, 'postemail', [
        'inputOptions' => [
            'class' => 'post-form-input',
            'placeholder' => 'email',
        ],
    ])->textInput() ?>

    <?= $formTwo->field($postFormUpdateInsertModel, 'posttext')->textarea(['rows' => 10]); ?>

    <?= Html::submitButton('Отправить', ['class' => 'btn btn-success']) ?>

    <?php ActiveForm::end() ?>
</div>

