import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public imgUrl: string = "https://images.unsplash.com/photo-1631523606287-7c220b2a8faa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80";
  public altText: string = "photos";
  public buttonText: string = "Change Image";
  public imgArrUrl: string[] = [
    "https://images.unsplash.com/photo-1631523606287-7c220b2a8faa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
    "https://images.unsplash.com/photo-1631523606144-0aa678d87d34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    "https://images.unsplash.com/photo-1631523604595-4074ce0ec45b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    "https://images.unsplash.com/photo-1631523602368-86e81608e456?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
  ];
  public imageId: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  // TODO egy függvény írása ami gombra kattintva lecseréli az imgUrl változó értékét
  // Először hozz létre egy tömböt, benne helyezz el tetszőleges számú képcímet (url)
  // Úgy írd meg a függvényt, hogy ha a lista utolsó eleméhez ér, még egy kattintásra 
  // az első képcímre ugorjon vissza
  // használj property bindingot!
  public changeImage(): void{
    if (this.imageId === 3) this.imageId = 0;
    else this.imageId++;
    this.imgUrl = this.imgArrUrl[this.imageId];
  }

}
