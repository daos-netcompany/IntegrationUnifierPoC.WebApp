import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material';

import { DynamicComponentLoader } from './dynamic-component-loader/dynamic-component-loader.service';
import { DanishBodyOrgComponent } from './dynamic-modules/danish-body-org/danish-body-org.component';
import { DialogComponent } from './dynamic-modules/dialog/dialog.component';
import { MessageComponent } from './dynamic-modules/message/message.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild('testOutlet', { read: ViewContainerRef, static: true })
  testOutlet: ViewContainerRef | undefined;

  constructor(
    private dynamicComponentLoader: DynamicComponentLoader,
    private dialog: MatDialog
  ) {}

  loadComponent() {
    this.testOutlet.clear();
    this.dynamicComponentLoader
      .getComponentFactory<MessageComponent>('message')
      .subscribe({
        next: componentFactory => {
          if (!this.testOutlet) {
            return;
          }

          const ref = this.testOutlet.createComponent(componentFactory);
          ref.changeDetectorRef.detectChanges();
        },
        error: err => {
          console.warn(err);
        }
      });
  }

  loadDanishComponent() {
    //debugger;
    this.testOutlet.clear();
    this.dynamicComponentLoader
    .getComponentFactory<DanishBodyOrgComponent>('danish-body-org')
    .subscribe({
      next: componentFactory => {
        if (!this.testOutlet) {
          return;
        }

        const ref = this.testOutlet.createComponent(componentFactory);
        ref.changeDetectorRef.detectChanges();
      },
      error: err => {
        console.warn(err);
      }
    });
  }

  showDialog() {
    this.dialog.open(DialogComponent);
  }
}
