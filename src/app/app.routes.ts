import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ShowComponent } from './components/show/show.component';
import { EditComponent } from './components/edit/edit.component';


export const routes: Routes = [
    {path:"" , title:"All Post", component:ListComponent,pathMatch:"full" },
    {path:"add" ,title:"Add To Post", component:CreateComponent},
    {path:"update/:id" ,title:"Update Post", component:EditComponent},
    {path:"show/:id" ,title:"Show One Post", component:ShowComponent},
    {path:"**" ,title:"Not Found ", component:NotfoundComponent},
];
