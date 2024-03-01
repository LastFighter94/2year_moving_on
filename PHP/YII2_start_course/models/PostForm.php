<?php

namespace app\models;
use yii\base\Model;
use yii\db\ActiveRecord;

class PostForm extends ActiveRecord
{
//    https://ru.stackoverflow.com/questions/1177310/yii2-Не-могу-найти-причину-ошибки-записи-в-базу-данных
//    нужно прописать поля модели в примечание, иначе не сработает метод $model->save() - будет вылетать ошибка выше

//    public $postname;
//    public $postemail;
//    public $posttext;

    public static function tableName(){
        return 'posts';
    }

    public function attributeLabels()
    {
        return [
            'postname' => 'Имя',
            'postemail' => 'Email пользователя',
            'posttext' => 'Text of message',
        ];
    }

    public function rules()
    {
        return [
            [['postname', 'posttext'], 'required'],
            ['postname', 'string', 'length' => [2,5]],
            ['postemail', 'email'],
            ['postemail', 'safe'],
            ['posttext', 'string', 'length' => [5,45]],
//            ['posttext', 'trim'],
        ];
    }
}