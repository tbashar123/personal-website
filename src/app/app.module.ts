import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbdBioModalContent } from './app.component';
import { NgbdSkillsModalContent } from './app.component';
import { NgbdHobbiesModalContent } from './app.component';
import { NgbdContactModalContent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NgbdBioModalContent,
    NgbdSkillsModalContent,
    NgbdHobbiesModalContent,
    NgbdContactModalContent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [
      NgbdBioModalContent,
      NgbdSkillsModalContent,
      NgbdHobbiesModalContent,
      NgbdContactModalContent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
