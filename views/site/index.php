<?php

/* @var $this yii\web\View */

$this->title = 'Home page';

use app\components\FormRegistration;
?>

<?= FormRegistration::widget(['model' => $registrationModel]); ?>
