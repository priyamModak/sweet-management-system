import { SweetService } from '../../services/sweet.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent {
  sweets: any[] = [];
  newSweet = {
    id: null,
    name: '',
    category: '',
    price: 0,
    unit: 'kg',
    available: true
  };
  editMode = false;
  editSweetId: number | null = null;

  constructor(private sweetService: SweetService, private router: Router) {
    this.sweets = this.sweetService.getSweets();
  }

  addSweet() {
    if (this.newSweet.name && this.newSweet.price > 0 && this.newSweet.category && this.newSweet.unit) {
      if (this.editMode && this.editSweetId !== null) {
        const idx = this.sweets.findIndex(s => s.id === this.editSweetId);
        if (idx > -1) {
          this.sweets[idx] = { ...this.newSweet, id: this.editSweetId };
        }
        this.editMode = false;
        this.editSweetId = null;
      } else {
        const newId = this.sweets.length ? Math.max(...this.sweets.map(s => s.id || 0)) + 1 : 1;
        this.sweets.push({ ...this.newSweet, id: newId });
      }
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

  toggleStatus(sweet: any) {
    sweet.available = !sweet.available;
  }

  editSweet(sweet: any) {
    this.sweetService.setEditSweet(sweet);
    this.router.navigate(['/add']);
  }

  deleteSweet(sweet: any) {
    this.sweets = this.sweets.filter(s => s.id !== sweet.id);
    if (this.editSweetId === sweet.id) {
      this.editMode = false;
      this.editSweetId = null;
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

