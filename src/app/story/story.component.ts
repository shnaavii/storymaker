import { Component , OnInit , DoCheck} from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrl: './story.component.css'
})
export class StoryComponent {
	CurrentScene:any;
	story:any=[
		{ 
			id: 1,
			text: 'You wake up in a dangerous forest. You see a road to the left and a road to the right.', 
			choices: [ 
				{ text: 'go to right', nextScene: 2 },
				{ text: 'go to left', nextScene: 3 }
			] 
		},
		{ 
			id: 2, 
			text: 'You see a wild tiger. Do you want to  fight or run?',
			choices: [ 
				{ text: 'Fight', nextScene: 4 },
				{ text: 'Run', nextScene: 5 } 
			] 
		}, 
		{ 
			id: 3,
			text: 'You find a treasure chest. Do you open it or leave it?',
			choices: [ 
				{ text: 'Open it', nextScene: 6 },
				{ text: 'Leave it', nextScene: 7 } 
			] 
		}, 
		{ 
			id: 4,
			text: 'You fought bravely and won! You see a cave ahead. Do you enter or continue on the path?', 
			choices: [ 
				{ text: 'Enter the cave', nextScene: 8 },
				{ text: 'Continue on the path', nextScene: 9 } 
			] 
		},
		{ 
			id: 5,
			text: 'You ran away safely. You see a river ahead. Do you swim across or follow the river?',
			choices: [ 
				{ text: 'Swim across', nextScene: 10 },
				{ text: 'Follow the river', nextScene: 11 } 
			
			] 
		},
		{ 
			id: 6, 
			text: 'You found gold! You see a village in the distance. Do you go to the village or stay in the forest?', 
			choices: [ { text: 'Go to the village', nextScene: 12 }, { text: 'Stay in the forest', nextScene: 13 } ] 
		}, { 
			id: 7, 
			text: 'You walked away. You see a mountain ahead. Do you climb the mountain or go around it?',
			choices: [ 
				{ text: 'Climb the mountain', nextScene: 14 },
				{ text: 'Go around it', nextScene: 15 } 
			] 
		}, 
		{ 
			id: 8,
			text: 'You enter the cave and find a hidden treasure. The end.', 
			choices: [] 
		}, 
		{ 
			id: 9, 
			text: 'You continue on the path and find a peaceful meadow. The end.', 
			choices: [] 
		}, 
		{ 
			id: 10, 
			text: 'You swim across the river and find a hidden village. The end.',
			choices: [] 
		}, 
		{ 
			id: 11, 
			text: 'You follow the river and find a beautiful waterfall. The end.', 
			choices: [] 
		},
		{ 
			id: 12,
			text: 'You go to the village and become a hero. The end.',
			choices: []
		}, 
		{ 
			id: 13, 
			text: 'You stay in the forest and live a peaceful life. The end.', 
			choices: [] 
		}, 
		{ 
			id: 14,
			text: 'You climb the mountain and find a hidden temple. The end.', 
			choices: [] 
		}, 
		{ 
			id: 15, 
			text: 'You go around the mountain and find a hidden valley. The end.', 
			choices: [] }
	];
	
	ngOnInit() { 
		this.CurrentScene = this.story[0]; 
		console.log('ngInit is called');
		console.log(this.story[0]);
	} 
		ngDoCheck() {
			// console.log('ngDoCheck is called');
		// console.log(this.CurrentScene);
		}
	makeChoice(choice: any) { 
	//console.log(choice);
	//this.CurrentScene = choice.nextScene;
		for (let option of this.story) {
			if (option.id === choice.nextScene) {
				this.CurrentScene = option; 
				console.log(choice); 
			} 
		}
	}
	
}
