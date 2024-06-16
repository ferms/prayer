import { Component, ViewEncapsulation } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-rosario',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [FieldsetModule, ImageModule],
  templateUrl: './rosario.component.html',
  styleUrl: './rosario.component.scss'
})
export class RosarioComponent {

}
