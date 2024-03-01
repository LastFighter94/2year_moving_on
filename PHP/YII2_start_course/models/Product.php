<?php

namespace app\models;

use yii\db\ActiveRecord;

class Product extends ActiveRecord
{
    // втроенный метод
    public static function tableName()
    {
        return 'products';
    }

    // один продукт только к одной категории, поэтому hasOne()
    public function getCategory(){
        return $this->hasOne(Category::className(), ['id' => 'parent']);
    }
}