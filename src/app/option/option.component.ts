import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrl: './option.component.css'
})
export class OptionComponent {
	@Input() choice: any;
	active:boolean=true;
}
