import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateGuard } from './guards/update.guard';
import { UpdatePersonComponent } from './update-person.component';

const UPDATE_ROUTES: Routes = [{ path: '', component: UpdatePersonComponent, canActivate: [UpdateGuard] }];

@NgModule({
  imports: [RouterModule.forChild(UPDATE_ROUTES)],
  exports: [RouterModule],
})
export class UpdatePersonRoutingModule {}
