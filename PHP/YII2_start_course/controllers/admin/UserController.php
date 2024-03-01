<?php

namespace app\controllers\admin;

use app\controllers\wrapper\AppController;

class UserController extends AppController
{
    public function actionIndex(){
//        return $this->render('/admin/user/index');
        return $this->render('index');
    }
}