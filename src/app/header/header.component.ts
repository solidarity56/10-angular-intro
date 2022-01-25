import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    public title: string = "Angular intro"

    constructor(){}

    ngOnInit(): void {
        
    }

    titleChanger() {
        this.title = "Another title";
    }
}