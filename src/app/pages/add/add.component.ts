import { Component, OnInit } from '@angular/core';
import { SweetService } from '../../services/sweet.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
  newSweet = {
    id: null,
    name: '',
    category: '',
    price: 0,
    unit: 'kg',
    available: true
  };

  constructor(private sweetService: SweetService) {}

  ngOnInit() {
    const editSweet = this.sweetService.getEditSweet();
    if (editSweet) {
      this.newSweet = { ...editSweet };
      this.sweetService.clearEditSweet();
    }
  }

  addSweet() {
    if (this.newSweet.name && this.newSweet.price > 0 && this.newSweet.category && this.newSweet.unit) {
      this.sweetService.addOrUpdateSweet({ ...this.newSweet });
      this.newSweet = {
        id: null,
        name: '',
        category: '',
        price: 0,
        unit: 'kg',
        available: true
      };
    }
  }
}