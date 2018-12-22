import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [{
    path: '',
    loadChildren: './pages/overview/core-overview.module#CoreOverviewModule'
}, {
    path: 'autocomplete',
    loadChildren: './pages/autocomplete/autocomplete.module#AutocompleteModule'
}, {
    path: 'nested-nav',
    loadChildren: './pages/nested-nav/nested-nav.module#NestedNavModule'
}];

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class CoreRoutingModule{}