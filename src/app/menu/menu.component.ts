import { Component, OnInit, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @ViewChild('mainNav') mainNav: { nativeElement: { className: string; }; };

  className = 'navbar navbar-expand-lg navbar-dark fixed-top';

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition > componentPosition) {
      if (this.mainNav.nativeElement.className === this.className) {
        this.mainNav.nativeElement.className = this.className + ' navbar-shrink';
      }
    } else {
      this.mainNav.nativeElement.className = this.className;
    }

  }
  ngOnInit() {
  }

}
