<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace app\assets;

use yii;
use yii\web\AssetBundle;
use yii\helpers\FileHelper;
use yii\helpers\StringHelper;

/**
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/global.css',
    ];
    public $js = [
        'js/chosen.jquery.min.js',
        'js/jquery.mousewheel.js',
        'js/jquery.jscrollpane.min.js',
        'js/jquery.mousewheel.js',
        'js/sly.js',
        'js/custom.js'
    ];
    public $depends = [
        'yii\web\YiiAsset',
        //'yii\bootstrap\BootstrapAsset',
    ];

    /*
    public function __construct($config = []) {
        parent::__construct($config);

        foreach (FileHelper::findFiles(Yii::getAlias('@webroot/js')) as $absolutePath) {
            $this->js[] = 'js/' . StringHelper::basename($absolutePath);
        }
    }
    */
}
