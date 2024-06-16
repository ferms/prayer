import { Component, ViewEncapsulation } from '@angular/core';
import { RosarioComponent } from "../rosario/rosario.component";
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { ViacrucisComponent } from "../viacrucis/viacrucis.component";
import { OrgSntBrigidaOneComponent } from "../org-snt-brigida-one/org-snt-brigida-one.component";
import { OrgConsagradoComponent } from "../org-consagrado/org-consagrado.component";
import { OrgLatinComponent } from "../org-latin/org-latin.component";
import { OrgOtrasComponent } from "../org-otras/org-otras.component";
import { OrgSntBrigidaTwelveComponent } from "../org-snt-brigida-twelve/org-snt-brigida-twelve.component";
import { DoloresMariaComponent } from "../dolores-maria/dolores-maria.component";
import { DomingosSanjoComponent } from "../domingos-sanjo/domingos-sanjo.component";
import { CoronillaMisericordiaComponent } from "../coronilla-misericordia/coronilla-misericordia.component";
import { CoronillaSangreCristoComponent } from "../coronilla-sangre-cristo/coronilla-sangre-cristo.component";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    encapsulation: ViewEncapsulation.None,
    imports: [
        AccordionModule,
        CardModule,
        RosarioComponent,
        ViacrucisComponent,
        OrgSntBrigidaOneComponent,
        OrgConsagradoComponent,
        OrgLatinComponent,
        OrgOtrasComponent,
        OrgSntBrigidaTwelveComponent,
        DoloresMariaComponent,
        DomingosSanjoComponent,
        CoronillaMisericordiaComponent,
        CoronillaSangreCristoComponent]
})
export class HomeComponent {

}
