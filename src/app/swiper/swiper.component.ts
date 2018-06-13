import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
declare var anno: any;
@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit {
  dirty =false;
  count=0;
  constructor(private router:Router,private zone:NgZone) { }

  ngOnInit() {
    this.init()
  }
  init(){
    anno.destroy();
    var that = this;
    var myAnnotation = {
      /** The URL of the image where the annotation should go **/
      src: 'assets/img/1.jpg',
      id: 'asdasdasd',
      /** The annotation text **/
      text: 'My annotation',
      editable: false,
      /** The annotation shape **/
      shapes: [{
        /** The shape type **/
        type: 'rect',

        /** The shape geometry (relative coordinates) **/
        geometry: { x: 0.1, y: 0.1, width: 0.4, height: 0.3 }
      }]
    }
    var dom = document.getElementById('myImage');
    dom.onload = function () {
      console.log('load')
      anno.makeAnnotatable(dom);
      anno.addAnnotation(myAnnotation);
      anno.addHandler('onMouseOverAnnotation', function (annotation) {
        console.log(annotation);
      });
      anno.addHandler('onSelectionCompleted', function(annotation) {
        console.log(annotation);
        that.count++;
        // 如果弹出框存在就不执行操作，判断是否有弹出框在dom上
        if(that.count == 1 && !that.dirty){
          
          var truthBeTold = window.confirm("单击“确定”继续。单击“取消”停止。"); 
         
          if (truthBeTold) { 
             window.alert("继续标注"); 
          } else {
            that.count=0;
            that.dirty = false;
            anno.reset();
            // anno.addAnnotation(myAnnotation);
            //window.location.reload()
            dom.removeAttribute('src');
            dom.setAttribute('src','assets/img/1.jpg')
            that.init()
           //that.router.navigate(['product'])
           //  可以先清空在重画
           // anno.removeAnnotation(myAnnotation)
          }
          
        } else {
          //that.dirty = true;
        }
      });
      var pop = document.querySelector('.annotorious-popup');
      var edit = document.querySelector('.annotorious-editor');
      // var text = document.querySelector('.annotorious-editor-text');
      // var btn = document.querySelector('.annotorious-editor-button-save')
      // text['style'].visibility="hidden";
      // text['style'].height=0;
      // btn.innerHTML = 'Add label';
      // anno.addHandler('onAnnotationCreated', function(annotation) {
      //   console.log(annotation);
      //  alert('继续标注')
      // });
     // height: 0;
      pop.parentNode.removeChild(pop)
      edit.parentNode.removeChild(edit)
      // anno.hideSelectionWidget() // 标注不可用
    }
  }
  go(){
    this.router.navigate(['home'])
  }
  a(i) {

  }
  b(i) {

  }
  load() {
    console.log(1)
  }
}

