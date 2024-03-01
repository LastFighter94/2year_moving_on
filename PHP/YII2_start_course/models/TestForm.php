<?php

namespace app\models;
use yii\base\Model;

class TestForm extends Model
{
    public $name;
    public $email;
    public $text;
    public $testField;

    public function attributeLabels()
    {
        return [
            'name' => 'Имя',
            'email' => 'Email пользователя',
            'text' => 'Text of message',
            'testField' => 'testField text',
        ];
    }

    public function rules()
    {
        return [
//            ['name', 'required', 'message' => 'test message'],
//            ['email', 'required'],

//            [['name', 'email'], 'required', 'message' => 'test message']
            [['name', 'email'], 'required'],

            ['email', 'email'], // поле email должно соответствовать формату email адреса
//            ['name', 'string', 'min' => 2, 'tooShort' => 'Мало'], // тип строка - минимум 2 символа
//            ['name', 'string', 'max' => 5, 'tooLong' => 'Много'] // тип строка - максимум 2 символа

            ['name', 'string', 'length' => [2,5]], // от 2 до 5, но без контроля сообщений - можно почитать как это делать в документации

//            ['text', 'trim'],
            // !!! если не указать валидатор никакой на поле формы, то на отправку придет пустое значение даже если его заполняли
            // это мера безопасности framework Yii2 - поэтому, если нет какой-то конкретной валидации - то надо указать
            // ['text', 'safe'] - тогда данные придут на server

            ['testField', 'testFieldValidation'],

        ];
    }

    // валидация на стороне сервера - на клиенте работать не будет
    public function testFieldValidation($attr){
        if (!in_array($this->$attr, ['text1', 'text2'])){
            $this->addError($attr, 'Текст должен быть либо text1 либо text2!');
        }
    }
}