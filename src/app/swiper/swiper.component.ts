import { Component, OnInit } from '@angular/core';
declare var anno: any;
@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
    var dom = document.getElementById('myImage')
    dom.onload = function () {
      console.log('load')
      anno.makeAnnotatable(dom);
      anno.addAnnotation(myAnnotation);
      anno.addHandler('onMouseOverAnnotation', function (annotation) {
        console.log(annotation);
      });
      anno.addHandler('onAnnotationCreated', function(annotation) {
        console.log(annotation.text);
      });

    }
  }
  a(i) {

  }
  b(i) {

  }
  load() {
    console.log(1)
  }
}

