import { Directive, ElementRef , Input , Renderer2 , HostListener} from '@angular/core';

@Directive({
  selector: '[appChoice]'
})
export class ChoiceDirective {
  constructor(private el: ElementRef,private renderer : Renderer2) {}
	// @Input('appChoice')color: string;
	@Input() set display(value: Object){
		let entries = Object.entries(value);
		for(let item of entries){
			if(item[1]){
				this.renderer.addClass(this.el.nativeElement , item[0]);
			}
		}
	}
	


}
