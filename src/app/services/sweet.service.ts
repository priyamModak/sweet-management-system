import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SweetService {
  private sweets = [
    { id: 1, name: 'Ladoo', category: 'Traditional', quantity: 50, price: 20, image: 'assets/ladoo.jpg' },
    { id: 2, name: 'Barfi', category: 'Milk', quantity: 30, price: 25, image: 'assets/barfi.jpg' },
    { id: 3, name: 'Jalebi', category: 'Sugar', quantity: 40, price: 15, image: 'assets/jalebi.jpg' },
    { id: 4, name: 'kaju', category: 'Traditional', quantity: 50, price: 20, image: 'assets/ladoo.jpg' },
    { id: 5, name: 'pista roll', category: 'Traditional', quantity: 50, price: 20, image: 'assets/ladoo.jpg' },
    { id: 6, name: 'Chicken biryani', category: 'Traditional', quantity: 50, price: 20, image: 'assets/ladoo.jpg' },
    { id: 7, name: 'Mutton biryani', category: 'Traditional', quantity: 50, price: 20, image: 'assets/ladoo.jpg' },
    { id: 8, name: 'egg biryani', category: 'Traditional', quantity: 50, price: 20, image: 'assets/ladoo.jpg' },
    { id: 9, name: 'veg biryani', category: 'Traditional', quantity: 50, price: 20, image: 'assets/ladoo.jpg' },
    { id: 10, name: 'mutton kasha', category: 'Traditional', quantity: 50, price: 20, image: 'assets/ladoo.jpg' },
    { id: 11, name: 'chicken kasha', category: 'Traditional', quantity: 50, price: 20, image: 'assets/ladoo.jpg' },
    { id: 12, name: 'tandori roti', category: 'Traditional', quantity: 50, price: 20, image: 'assets/ladoo.jpg' }
  ];

  private editSweet: any = null;

  getSweets() {
    return this.sweets;
  }

  addOrUpdateSweet(sweet: any) {
    if (sweet.id != null) {
      const idx = this.sweets.findIndex(s => s.id === sweet.id);
      if (idx > -1) {
        this.sweets[idx] = { ...sweet };
        return;
      }
    }
    const newId = this.sweets.length ? Math.max(...this.sweets.map(s => s.id || 0)) + 1 : 1;
    this.sweets.push({ ...sweet, id: newId });
  }

  setEditSweet(sweet: any) {
    this.editSweet = { ...sweet };
  }

  getEditSweet() {
    return this.editSweet;
  }
  clearEditSweet() {
    this.editSweet = null;
  }
}
