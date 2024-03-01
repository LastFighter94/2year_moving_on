<?php

namespace app\controllers;

use app\controllers\wrapper\AppController;

use app\models\PostForm;
use app\models\TestForm;
use app\models\testtable;
use app\models\category;
use Yii;
use yii\helpers\Json;

class PostController extends AppController
{
    // задали layout
    public $layout = 'basic';

    // это своего рода hook - как в реакте, vue
    public function beforeAction($action){
//        debug($action);

        if ($action->id == 'index'){
            $this->enableCsrfValidation = false;
        }

//        if ($action->id == 'show'){
//            $this->debug([1,2,3]);
//        }

        return parent::beforeAction($action);
    }

    public function actionIndex(){
        if (Yii::$app->request->isAjax){
//            debug($_GET);
//            debug($_POST);

//            вывод введенных в запрос параметров
//            debug(Yii::$app->request->post());

            $testDataFromAjaxJs = Yii::$app->request->post();

            return Json::encode($testDataFromAjaxJs);
//            return Json::encode($testDataFromAjaxJs['testKey']); // если хотим вывести ключ

//            return 'test';
        }

        $model = new TestForm();
//        if ($model->load(Yii::$app->request->post()) && $model->validate())
        if ($model->load(Yii::$app->request->post())){
//            debug(Yii::$app->request->post());
//            debug($model);
//            die();
            if ($model->validate()){
                Yii::$app->session->setFlash('success', 'Данные приняты!');
                return $this->refresh();
            } else {
                Yii::$app->session->setFlash('error', 'Ошибка!');
            }
        }

//        return $this->render('test');

        $post = PostForm::findOne(15);
//        UPDATE схема
//        $post->postemail = 'test@yandex.ru';
//        $post->save();

//        DELETE схема (id менять надо для примера, потому что у меня бесконечный auto increment и при удалее, следующий ряд
//        добавленный будет больше чем самый последний который был)
//        $postAgain = PostForm::findOne(16);
//        $postAgain->delete();

//        несколько записей на удаление или обновление - deleteAll || updateAll
        PostForm::deleteAll(['>', 'id', 21]);
//        PostForm::deleteAll(); // delete all rows from table

        $postFormUpdateInsertModel = new PostForm();
//        если объект получили с помощью создания через new (от activeRecord)
//        тогда insert - новые данные

//        тест insert data into MySQL в ручную
//        $postFormUpdateInsertModel->postname = 'name';
//        $postFormUpdateInsertModel->posttext = 'text 11';
//        $postFormUpdateInsertModel->postemail = 'email@email.ru';
//        $postFormUpdateInsertModel->save();

//        метод save() устроен так что он по умолчанию вызывает и метод validate()
//        он стоит первым параметром в true by default, если по каким-то причинам
//        валидация не нужна - то первым парметром в save() - укажите save(false )
//        метод может использоваться как для insert так и для update
//        new - insert, создаем объект с помощью запроса на получение данных

//        тест insert data into MySQL через форму
        if ($postFormUpdateInsertModel->load(Yii::$app->request->post())){
            if ($postFormUpdateInsertModel->save()){
                Yii::$app->session->setFlash('successPostForm', 'Данные приняты!!!!!!!');
                return $this->refresh();
            } else {
                Yii::$app->session->setFlash('errorPostForm', 'Ошибка!');
            }
        }

        // если объект получили с методом find и прочими - тогда update

        $this->view->title = 'Форма для отправки статей';
//        return $this->render('test', compact('model'));
        return $this->render('test', [
            'model' => $model,
            'postFormUpdateInsertModel' => $postFormUpdateInsertModel
        ]);
    }

    public function actionShow(){
        $this->view->title = 'Какая-то страничка';
        $this->view->registerMetaTag(['name' => 'keywords', 'content' => 'ключевики...']);
        $this->view->registerMetaTag(['name' => 'description', 'content' => 'описание страницы...']);

//        https://www.yiiframework.com/doc/api/2.0/yii-db-activerecord
//        documentation for ActiveRecord class

//        выборка всех записей из таблицы категорий
//        $testTable = testtable::find()->all();

//        добавили метод посередине - сортировка
//        $testTable = testtable::find()->orderBy(['id' => SORT_ASC])->all();
//        $testTable = testtable::find()->orderBy(['id' => SORT_DESC])->all();

//        получить данные в виде массива
//        $testTable = testtable::find()->asArray()->all();

//        получить данные в виде массива - с фильтрацией
//        $testTable = testtable::find()->asArray()->where('one="test1"')->all();
//        $testTable = testtable::find()->asArray()->where(['one' => "test1"])->all();
//        get one (first) row - or first two, e.t.c rows
//        $testTable = testtable::find()->asArray()->where(['one' => "test1"])->limit(1)->all(); // limit(2)

//        подсчитать количество записей - по условию или сразу все ряды
//        $testTable = testtable::find()->asArray()->where(['one' => "test1"])->count();
//        $testTable = testtable::find()->asArray()->count();

//        получить данные с фильтрацией на стороне sql
//        $testTable = testtable::find()->asArray()->where(['like', 'one', 'some'])->all();
//        $testTable = testtable::find()->asArray()->where(['>=', 'id', 3])->all(); // <=

        // 1 шаг - find - создает новый объект запроса
        // 2 шаг - настроить объект запроса (where, order by, limit - операторы, которые мы используем в обычном sql запросе )
        // 3 шаг - all, one, count, sum - получение данных в виде объекта

//        вариант с SQL запросом напрямую
//        $query = "select * from test_schema.testtable where one like '%test%';";
//        $testTable = testTable::findBySql($query)->all();

//        вариант с SQL запросом напрямую 2
        $query = "select * from test_schema.testtable where one like :search;";
        $testTable = testTable::findBySql($query, [':search' => '%some value 1%'])->all();

//        внедряем еще одну модель на один action у controller (их может быть сколько угодно в теории)
        $categories = category::find()->asArray()->all();

//        массив из этих методов не получается, findOne, findAll - asArray не вкатывает
//        limit также не добавляется, однако подходит для работы с моделью
//        $testTable = testtable::findOne(['one' => "some value 1"]);
//        $testTable = testtable::findAll(['one' => "test1"]);

//        построение связей между таблицами
//        *********************************
//        построение связей между таблицами

//        один объект - после которого реализуем lazy data loading
//        $categoriesById = Category::findOne(5);

//        жадная загрузка (метод with)
        $categoriesById = Category::find()->with('products')->where('id=5')->all();

//        Неоптимизированный пример! Получаем все категории.
//        $categoriesExample = Category::find()->all();

//        Оптимизированный пример! (в YII debugger меньще запросов к DB) Получаем все категории.
        $categoriesExample = Category::find()->with('products')->all();


//        ***********************************************

//        $this->debug($testModelVar);
//        $this->debug($testModelVar[0]->one);
//        die();

//        $this->layout = 'basic';
//        return $this->render('show', ['testTable' => $testTable]);
//        return $this->render('show', compact('testTable'));
//        return $this->render('show');

        return $this->render('show', [
            'testTable' => $testTable,
            'categories' => $categories,
            'categoriesById' => $categoriesById,
            'categoriesExample' => $categoriesExample,
        ]);
    }

//    test_action

//    public function actionTest(){
//        $names = [1,2,3,4];
//
////        print_r($names);
////        var_dump($names);
//
////        var_dump(Yii::$app);
//
////        $this->debug(Yii::$app);
////        $this->debug($names);
//
//        return $this->render('test');
//    }

}