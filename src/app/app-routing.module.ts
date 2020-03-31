import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorkspaceComponent} from './workspace/workspace.component';
import {SettingsComponent} from './settings/settings.component';
import {ProfilesComponent} from './profiles/profiles.component';


const routes: Routes = [
  { path: 'workspace', component: WorkspaceComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'profiles', component: ProfilesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
