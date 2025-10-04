import { Component, OnInit } from '@angular/core';
import { SweetService } from '../../services/sweet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sweets: any[] = [];
  bill: { name: string; price: number; quantity: number; image: string; }[] = [];
  searchText: string = '';
  get filteredSweets(): any[] {
    const text = this.searchText.trim().toLowerCase();
    if (!text) return this.sweets;
    return this.sweets.filter(sweet =>
      sweet.name.toLowerCase().includes(text) ||
      sweet.category.toLowerCase().includes(text)
    );
  }

  constructor(private sweetService: SweetService) {}

  ngOnInit() {
    this.sweets = this.sweetService.getSweets();
  }

  addToBill(sweet: any) {
    const found = this.bill.find(item => item.name === sweet.name);
    if (found) {
      found.quantity += 1;
    } else {
      this.bill.push({ name: sweet.name, price: sweet.price, quantity: 1, image: sweet.image });
    }
  }

  increaseQty(item: any) {
    item.quantity += 1;
  }

  decreaseQty(item: any) {
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      this.bill = this.bill.filter(b => b.name !== item.name);
    }
  }

    clearBill() {
      this.bill = [];
    }

  get billSubtotal(): number {
    return this.bill.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  get billTax(): number {
    // Example: 5% tax
    return Math.round(this.billSubtotal * 0.05);
  }

  get billTotal(): number {
    return this.billSubtotal + this.billTax;
  }

  printBill() {
    window.print();
  }

  removeFromBill(item: any) {
    this.bill = this.bill.filter(b => b.name !== item.name);
  }
}
