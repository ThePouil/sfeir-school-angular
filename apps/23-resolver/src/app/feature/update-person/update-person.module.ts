import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { UpdateGuard } from './guards/update.guard';
import { UpdatePersonRoutingModule } from './update-person-routing.module';
import { UpdatePersonComponent } from './update-person.component';

@NgModule({
  declarations: [UpdatePersonComponent],
  providers: [UpdateGuard],
  imports: [SharedModule, UpdatePersonRoutingModule],
})
export class UpdatePersonModule {}
