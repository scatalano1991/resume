import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { EducationComponent } from './pages/education/education.component';


const routes: Routes = [
  { path: '',          component: HomeComponent },
  { path: 'about',     component: AboutComponent },
  { path: 'skills',    component: SkillsComponent },
  { path: 'education', component: EducationComponent },
  { path: 'contact',   component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
