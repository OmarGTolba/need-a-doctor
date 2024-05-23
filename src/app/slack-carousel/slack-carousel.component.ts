import { Component } from '@angular/core';

@Component({
  selector: 'app-slack-carousel',
  templateUrl: './slack-carousel.component.html',
  styleUrl: './slack-carousel.component.css'
})
export class SlackCarouselComponent {
  slides = [
    {img: '../../assets/ImgPhoto.jpeg'},
    {img: '../../assets/ImgPhoto.jpeg'},
    {img: '../../assets/ImgPhoto.jpeg'}
  ];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,

  };
  
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"});
    this.duplicateSlides(); // Duplicate the slides whenever a new slide is added
  }
  
  removeSlide() {
    this.slides.pop();
    this.duplicateSlides(); // Duplicate the slides whenever a slide is removed
  }

  // Function to duplicate slides to create the illusion of an infinite loop
  private duplicateSlides() {
    this.slides = [...this.slides, ...this.slides];
  }

  slickInit(e:any) {
    this.duplicateSlides()
    console.log('slick initialized');
  }
  
  breakpoint(e:any) {
    console.log('breakpoint');
  }
  
  afterChange(e:any) {
    console.log('afterChange');
  }
  
  beforeChange(e:any) {
    console.log('beforeChange');
  }
}
