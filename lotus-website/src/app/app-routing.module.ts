import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import { TestComponent } from './components/test/test.component';
import { Test2Component } from './components/test2/test2.component';
import { Home2Component } from './components2/home2/home2.component';
import { About2Component } from './components2/about2/about2.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'test2',
    component: Test2Component
  },
  {
    path: 'home2',
    component: Home2Component
  },
  {
    path: 'about2',
    component: About2Component
  }
  //LESSON LEARNED: DON"T HAVE COMPONENTS WITH THE SAME NAMES, LITERALLY NOTHING U CAN DO
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
