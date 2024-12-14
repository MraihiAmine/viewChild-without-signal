import { NgFor } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';

@NgModule({
  imports: [ NgFor ],
  declarations: [ SearchComponent ],
  exports: [ SearchComponent ]
})
export class SearchModule {

}