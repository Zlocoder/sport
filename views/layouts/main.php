<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use app\assets\AppAsset;

AppAsset::register($this);
$this->registerMetaTag(['name' => 'og:title', 'content' => $this->title]);
$this->registerMetaTag(['name' => 'og:description', 'content' => $this->title]);
$this->registerMetaTag(['name' => 'og:type', 'content' => '']);
$this->registerMetaTag(['name' => 'og:url', 'content' => '']);
$this->registerMetaTag(['name' => 'og:site_name', 'content' => '']);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=1000">
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body>
<?php $this->beginBody() ?>

<?php echo $this->render('/chunks/headerMain'); ?>

<main role="main">
    <?= $content ?>
</main>

<?php //echo $this->render('/chunks/footer'); ?>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
