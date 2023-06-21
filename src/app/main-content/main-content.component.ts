import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
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
  } 

}
