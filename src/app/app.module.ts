import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { SideCardComponent } from './side-card/side-card.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EmiCalculatorComponent,
    SideCardComponent,
    FeatureCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
