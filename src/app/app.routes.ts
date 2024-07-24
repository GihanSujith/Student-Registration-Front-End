import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ViewComponent } from './pages/view/view.component';

export const routes: Routes = [
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"register",
        component:RegistrationComponent
    },
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"view",
        component:ViewComponent
    }
];
