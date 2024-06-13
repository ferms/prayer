import { Component } from '@angular/core';
import { RosarioComponent } from "../rosario/rosario.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [RosarioComponent]
})
export class HomeComponent {

}
