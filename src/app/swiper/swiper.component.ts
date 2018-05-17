import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('#fullpage').fullpage({
          //设置background-color属性
          sectionsColor:['blue','green','orange','red'],

          //定义是否通过箭头来控制slide幻灯片，默认为true.在移动设备上可一个通过滑动来操作幻灯片
          controlArrows:true,

          //每一页的内容是否垂直居中
          verticalCentered:true,

          //字体是否随着页面缩放而缩放，默认值为false
          resize:false,

          //滚动速度,默认为700  单位ms
          scrollingSpeed:700,

          /*、定义锚链接，默认值为[]。有了锚链接用户可以快速打开定位到某一页面。定义锚链接的时候，值不要和页面中任意的id或name相同，尤其在IE浏览器下。而且定义时不需要加#*/
          // anchors:['page1','page2','page3','page4'],

          /*是否锁定锚链接，默认为false。如果设置为true，那么定义的锚链接，也就是anchors属性则没有效果*/
          lockAnchors:false,

          /*滚动到最顶部后是否连续滚动到底部，默认为false*/
          loopTop:false,

          /*滚动到底部后是否连续滚动回顶部，默认为false*/
          loopBottom:false,

          /*横向slider幻灯片是否循环滚动，默认为true*/
          loopHorizontal:true,

          /*是否使用插件的滚动方式，默认为true，如果选择false，则会出现浏览器自带的滚动跳，将不会暗夜滚动，而是按照滚动条的默认行为滚动*/
          autoScrolling:true,

          /*是否包含过冬天，默认为false，如果设置为true，则浏览器自带的滚动条出现，页面还是按页滚动，但是滚动条的默认行为页有效*/
          scrollBar:false,

          /*设置每一个section顶部和底部的padding，默认都为0。一般如果我们需要在顶部或底部的设置菜单、导航、元素等，可以使用这两个配置项。*/
          paddingTop:'0px',
          paddingBottom:0,

          /*固定的元素默认为null、需要配置一个jquery选择器。在页面滚动的时候，fixedElements设置的元素固定不动*/
          fixedElements:'#header',

          /*是否可以使用键盘方向键导航，默认为true*/
          keyboardScrolling:true,

          /*在移动设备中滑动页面的敏感性，默认为5，是按百分比来衡量，最高为100，越大则越难滑动。*/
          touchSensitivity:5,

          /*continuousVertical是否循环滚动，默认为false。如果设置为true，则页面会循环滚动，而不像loopTop或loopBottom那样出现跳动，注意这个属性和loopTop/loopBottom不兼容，不要同时设置*/

          /*锚链接是否可以控制滚动动画，默认为true。如果为false则没有动画效果*/
          animateAnchor:true,

          /*是否记录历史，默认为true，可以记录页面滚动的历史，通过浏览器的前进后退控制导航。注意如果设置了autoScrolling:false ,那么之歌配置也将被关闭，即设置为false*/
          recordHistory:true,

          /*绑定彩蛋，设定的相关属性与anchors的值相对应后，彩蛋可以控制滚动，默认为false。可以设置为菜单的jquery选择器*/
          menu:'#fullpageMenu',

          /*是否显示导航，默认为false。如果设置为true，会显示小圆点，作为导航*/
          navigation:true,

          /*导航小圆点位置，可以设置为left或者right*/
          navigationPosition:'right',

          /*navigationTooltips:导航小圆点的tooltips设置，默认为[],注意按照顺序设置*/
          // navigationTooltips:['page1','page2','page3','page4'],

          /*是否显示当前页面的导航的tooltip信息，默认为false*/
          showActiveTooltip:true,

          /*是否显示横向幻灯片的导航，默认为false*/
          slidesNavigation:false,

          /*横向幻灯片导航的位置，默认为bottom，可以设置为top或bottom*/
          slidesNavPosition:'bottom'

          /*scrollOverflow：内容超过满屏后是否显示滚动条，默认为false。如果设置为true，则会显示滚动条，如果要滚动查看内容，还需要jquery.slimscroll插件的配合。slimscroll插件主要用于模拟传统的浏览器滚动条*/

          /*sectionSelector：section的选择器，默认为.section*/

          /*slideSelector：slide的选择器，默认为.slides*/
      });
  });
  }

}
