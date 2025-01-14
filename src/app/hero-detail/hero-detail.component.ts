import { Component, Input } from '@angular/core';
import { UpperCasePipe, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';


@Component({
  selector: 'app-hero-detail',
  imports: [UpperCasePipe, NgIf, FormsModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
    // heroes = HEROES;  
    // selectedHero?: Hero;
    // onSelect(hero: Hero):void{
    //   this.selectedHero = hero;
    // }
}

