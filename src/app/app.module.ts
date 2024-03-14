import { NgModule } from '@angular/core';
import { components ,angularModules,directives} from './moduleImports';


@NgModule({
  declarations: [...components, ...directives],
  imports: [...angularModules],
  providers: [],
  bootstrap: [components[0]],
})
export class AppModule {}
