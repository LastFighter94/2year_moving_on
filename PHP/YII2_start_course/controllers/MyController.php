<?php

namespace app\controllers;

use app\controllers\wrapper\AppController;

class MyController extends AppController
{
    public function actionIndex($id = null){
        // http://localhost:8080/index.php?r=my/index&id=12121dfg
        // http://localhost:8080/index.php?r=my/&id=12121dfgfgh
        // http://localhost:8080/index.php?r=my&id=12121dfgfghfghdfgdfgdf

        $hi = 'Hello world!';
        $names = ['Misha', 'Stepa', 'Kostya'];

        $data = [];

        if (!$id) $id = 'test';

        $data['names'] = $names;
        $data['id'] = $id;
        $data['hi'] = $hi;

//        return $this->render('index', ['hello' => $hi, 'names' => $names]);

        // еще один способ передачи данных
//        return $this->render('index', compact('hi', 'names', 'id'));

        // и еще один способ передачи
        return $this->render('index', ['data' => $data]);
    }

    public function actionBlogPost(){
        // blog-post
        return 'some test string';
    }
}