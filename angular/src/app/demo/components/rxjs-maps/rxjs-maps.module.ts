import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MergeConcatSwitchMapComponent} from './merge-concat-switch-map/merge-concat-switch-map.component';
import {Route, RouterModule} from '@angular/router';

const routes: Route[] = [
    {
        path: '',
        data: {breadcrumb: 'Rxjs Maps'},
        component: MergeConcatSwitchMapComponent
    },
]

@NgModule({
    declarations: [
        MergeConcatSwitchMapComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ]
})
export class RxjsMapsModule {
}
