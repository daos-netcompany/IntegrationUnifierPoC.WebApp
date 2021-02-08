import { NgModule } from '@angular/core';

import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';
import { DanishBodyOrgComponent } from './danish-body-org.component';

@NgModule({
  declarations: [DanishBodyOrgComponent],
  imports: [DynamicComponentLoaderModule.forChild(DanishBodyOrgComponent)]
})
export class DanishBodyOrgModule {}
