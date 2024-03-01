<?php

namespace app\models;

use yii\db\ActiveRecord;

class Category extends ActiveRecord
{
    // втроенный метод
    public static function tableName()
    {
        return 'categories';
    }

    // важна только приставка get - остальное на ваше усмотрение
    public function getProducts(){
        return $this->hasMany(Product::className(), ['parent' => 'id']);
    }
    // второй параметр это массива, ключами данного массива является поле связываемой таблицы (в данном случае это таблица Products),
    // а значениями является поле основной таблицы (Categories)

//    данный пример - id = 5, берем все данные с parent === 5, lazy loading
//    $categoriesById = Category::findOne(5);

//    данный пример - id = 5, берем все данные с parent === 5, жадная загрузка
//    $categoriesById = Category::find()->with('products')->where('id=5')->all();
}

// hasMany - возвращает массив объектов
// hasOne - вернется один объект

// ::className() - возвращает строку с именем класса