import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItineraryDetailPage } from './itinerary-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ItineraryDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItineraryDetailPageRoutingModule {}
