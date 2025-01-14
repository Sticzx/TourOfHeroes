import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service'; 
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [NgFor, FormsModule, HeroDetailComponent, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  
  constructor(private heroService:HeroService){}

  heroes: Hero[] = [];
  selectedHero?: Hero;
  onSelect(hero: Hero):void{
    this.selectedHero = hero;  
  }

  getHeroes(){
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  ngOnInit(): void {
    this.getHeroes();
  }
  
}
