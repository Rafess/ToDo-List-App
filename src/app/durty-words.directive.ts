import { Directive, ElementRef, Input, Renderer2, OnInit} from '@angular/core';

@Directive({
  selector: '[durtywords]'
})
export class DurtyWordsDirective {
  @Input() durty: boolean = false;
  constructor(private element: ElementRef, private renderer: Renderer2) { 

  }
ngOnInit(): void {
  if (this.durty) {
    return this.renderer.setStyle(this.element.nativeElement, 'text-decoration', 'line-through');
    } 
  }
}
