import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItineraryDetailPageRoutingModule } from './itinerary-detail-routing.module';

import { ItineraryDetailPage } from './itinerary-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItineraryDetailPageRoutingModule
  ],
  declarations: [ItineraryDetailPage]
})
export class ItineraryDetailPageModule {}
