import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

import { SampleDirectiveDirective } from './sample-directive.directive';

//angualar imports for angualar modules
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

export const components = [AppComponent, ParentComponent, ChildComponent];

export const directives = [SampleDirectiveDirective];

export const angularModules = [
  BrowserModule,
  AppRoutingModule,
  ReactiveFormsModule,
];
