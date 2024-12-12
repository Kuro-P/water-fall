# water-fall
用 jQuery 实现的瀑布流效果。

## 整体思路：
 * 瀑布流特点是每张图片宽度相同，新的图片出现在每行高度最小的图片下面
 * 图片更新的判决条件是核心

## 开发小记
  * 居中是在页面加载后，用当前行数和图片宽度来计算出整个父容器宽度来实现的
  * 大盒子中的所有小盒子是依据父盒子进行定位的

## 预览
预览地址：https://kuro-p.github.io/water-fall/index.html

![image](https://github.com/Kuro-P/Water-fall/blob/master/imgs/preview.jpg "效果截图")
