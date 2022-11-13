import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { DeleteComponent } from './delete/delete.component';
import { PostComponent } from './post/post.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {path: 'post', component:PostComponent},
  {path: 'all', component:AllComponent},
  {path: 'update', component:UpdateComponent},
  {path: 'delete', component:DeleteComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
