<?php

namespace app\components;

use yii\base\Widget;

class MyWidget extends Widget
{
    public $name;

//    пример приемки или обработки параметров - здесь же и собственную валидацию можно сделать
    public function init(){
        parent::init();

//        if ($this->name === null) $this->name = 'Гость';

//        беферизированный контент между begin && end -> widget
        ob_start();
    }

    public function run(){
//        return "<h3>Hello {$this->name}!</h3>";
//        return $this->render('my', ['name' => $this->name]);

        $content = ob_get_clean();
        $content = mb_strtoupper($content);
//        $content = mb_strtoupper($content, 'utf-8'); // если кодировка не работает

        return $this->render('my', ['content' => $content]);
    }
}