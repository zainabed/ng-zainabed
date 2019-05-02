import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserDetailsService } from "@zainabed/shield/lib/core";
import { UserDetailsServiceImpl } from 'projects/security/src/test/lib/user.details.service.impl';
import { SecurityModule } from '@zainabed/security';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SecurityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
