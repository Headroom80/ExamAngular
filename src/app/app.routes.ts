import {Routes} from '@angular/router';
import {ListeComponent} from "./client/liste/liste.component";
import {DetailsComponent} from "./client/details/details.component";
import {LoginComponent} from "./admin/login/login.component";
import {AdminListComponent} from "./admin/liste/adminList.component";
import {EditComponent} from "./admin/edit/edit.component";
import {AddComponent} from "./admin/add/add.component";
import {adminGuard} from "./guards/admin.guard";

export const routes: Routes = [
  {path: '', component: ListeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'voyage/:id', component: DetailsComponent},
  {path: 'admin/liste', component: AdminListComponent, canActivate: [adminGuard]},
  {path: 'admin/edit/:id', component: EditComponent, canActivate: [adminGuard]},
  {path: 'admin/add-voyage', component: AddComponent, canActivate: [adminGuard]},
];
