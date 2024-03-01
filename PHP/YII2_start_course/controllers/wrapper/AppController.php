<?php

namespace app\controllers\wrapper;

use yii\web\Controller;

class AppController extends Controller
{
    public function debug($arr){
        echo '<pre>'. print_r($arr, true) .'</pre>';
    }
}

//function debug($arr){
//    echo '<pre>'. print_r($arr, true) .'</pre>';
//}