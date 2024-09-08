import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef){}

  ngOnInit(): void {
     const typed = new Typed('.typing',{      
                    //.typing is a target element // we, need to install Typed class from typed.js library
                   // npm install typed.js
    strings:['Mechanical Engineer by degree','Developer by Passion','Chef for love of food','Artist as well'],
    typeSpeed:100,
    backSpeed:60,
    loop:true
   })

   document.addEventListener("DOMContentLoaded",function(){
    window.addEventListener("scroll",function(){
      if(this.scrollY>120){
        document.querySelector('.navbar')?.classList.add("sticky");
      }
      else{
        document.querySelector('.navbar')?.classList.remove("sticky");
      }
    });
  });

  const aboutSection = this.el.nativeElement.querySelector('.about');
  const textElements = this.el.nativeElement.querySelectorAll('.text, .about-content p');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.renderer.addClass(entry.target, 'visible');
      } else {
        this.renderer.removeClass(entry.target, 'visible');
      }
    });
  }, { threshold: 0.1 });

  // Observe the main about section
  observer.observe(aboutSection);

  // Observe individual text elements
  textElements.forEach((element: any) => {
    observer.observe(element);
  });
}

}
