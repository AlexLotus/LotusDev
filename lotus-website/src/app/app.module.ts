import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TestComponent } from './components/test/test.component';
import { Test2Component } from './components/test2/test2.component';
import { AboutDescComponent } from './components/home/about-desc/about-desc.component';
import { CurrentTimeComponent} from './components/home/current-time/current-time.component';
import { CopyComponent } from './components/home/copy-code/copy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components2/nav/nav.component';
import { Home2Component } from './components2/home2/home2.component';
import { About2Component } from './components2/about2/about2.component';
import { TypingAnimationDirective } from 'angular-typing-animation';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TestComponent,
    Test2Component,
    AboutDescComponent,
    CurrentTimeComponent,
    CopyComponent,
    NavComponent,
    Home2Component,
    About2Component,
    TypingAnimationDirective
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
