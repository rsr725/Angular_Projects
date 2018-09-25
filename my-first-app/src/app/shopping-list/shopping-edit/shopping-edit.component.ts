import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onAdded() {
    const nameRef = this.nameInputRef.nativeElement.value;
    const amountRef = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(nameRef, amountRef);
    this.ingredientAdded.emit(newIngredient);
  }

  onDeleted() {

  }

  onClear() {

  }
}
