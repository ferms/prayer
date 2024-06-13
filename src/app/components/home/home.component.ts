import { Component } from '@angular/core';
import { RosarioComponent } from "../rosario/rosario.component";
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [AccordionModule,CardModule, RosarioComponent]
})
export class HomeComponent {

}
