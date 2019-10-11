import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipsComponent } from './recips/recips.component';
import { RecipsListComponent } from './recips/recips-list/recips-list.component';
import { RecipsDetailComponent } from './recips/recips-detail/recips-detail.component';
import { RecipsItemComponent } from './recips/recips-item/recips-item.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { ShopingEditComponent } from './shoping-list/shoping-edit/shoping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipsComponent,
    RecipsListComponent,
    RecipsDetailComponent,
    RecipsItemComponent,
    ShopingListComponent,
    ShopingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
