# Water-fall
## 用JQuery实现的瀑布流效果

`瀑布流特点：每张图片宽度相同`

### 实现核心思路：
 * 要更新的图片出现在每行中高度最小的那张图片下面
 * 图片更新的判决条件 </br>
 
_注意_：
  * 居中是在页面加载后，用当前行数和图片宽度来计算出整个父容器宽度来实现的
  * 大盒子中的所有小盒子是依据父盒子进行定位的 </br>
  
预览地址：https://kuro-p.github.io/Water-fall/main.html

实现效果：
![image](https://github.com/Kuro-P/Water-fall/blob/master/images/%E6%95%88%E6%9E%9C%E5%9B%BE.jpg "效果截图")

*_原生JS代码也已经上传到JS文件夹内_.
