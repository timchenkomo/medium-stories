import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ResponsiveModule } from '@medium-stories/responsive';
import { SharedModule } from '@medium-stories/shared';

import { homeContainers, homeRoutes } from './home.common';

@NgModule({
  imports: [CommonModule, MatCardModule, ResponsiveModule, RouterModule.forChild(homeRoutes), SharedModule, TranslateModule],
  declarations: [...homeContainers]
})
export class HomeModule {}
