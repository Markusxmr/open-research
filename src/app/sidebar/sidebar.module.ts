import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule, // import the CommonModule module here
  ],
  exports: [SidebarComponent],
})
export class SidebarModule {}
