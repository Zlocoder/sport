<?php

namespace app\components;

use Yii;
use yii\base\Action;
use app\models\User;

class ActionRegistration extends Action {
    public function run() {
        $user = new User();
        $user->load(Yii::$app->request->post());
        var_dump($user); die();
    }
}