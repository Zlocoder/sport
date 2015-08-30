<?php

namespace app\controllers;

use Yii;
use yii\web\Controller;
use app\models\User;

class SiteController extends Controller
{
    public function actions () {
        return [
            'user-registration' => 'app\components\ActionRegistration'
        ];
    }

    public function actionIndex()
    {
        return $this->render('index', ['registrationModel' => new User]);
    }
}
