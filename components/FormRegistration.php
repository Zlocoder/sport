<?php

namespace app\components;

use Yii;
use yii\widgets\ActiveForm;

class FormRegistration extends ActiveForm {
    public $model;

    public function run() {
        echo $this->render('/widgets/form-registration', ['form' => $this]);
        echo parent::run();
    }
}