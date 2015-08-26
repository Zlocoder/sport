<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\filters\VerbFilter;
use app\models\LoginForm;
use app\models\ContactForm;

class SiteController extends Controller
{
    public function actionIndex()
    {
       // echo '<pre>'; var_dump(Yii::$app->view->getAssetManager()); die();
        return $this->render('index');
    }
}
