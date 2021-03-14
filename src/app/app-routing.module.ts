import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { ProductPhotoComponent } from './product-photo/product-photo.component';

const routes: Routes = [
  {path: 'productphoto', component:  ProductPhotoComponent},
  {path: 'settings', component: SettingsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ProductPhotoComponent,SettingsComponent]
