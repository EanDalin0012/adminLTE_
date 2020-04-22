import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ModalComponent } from './component/modal/modal.component';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';
import { DateFormatePipe } from './pipes/date.pipe';
import { AmountFormatPipe } from './pipes/amount.pipe';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';



@NgModule({
  declarations: [
  ModalComponent,
  SanitizeHtmlPipe,
  DateFormatePipe,
  AmountFormatPipe
],
  imports: [
    CommonModule,
    PDFExportModule,
    SortableModule,
    ButtonsModule,
    GridModule,
    ChartsModule,
    SchedulerModule
    // CKEditorModule,
    // NotificationModule
  ],
  exports : [
    SanitizeHtmlPipe,
    DateFormatePipe,
    AmountFormatPipe
  ],
  entryComponents: [
    ModalComponent,
  ],
  providers: [
    DatePipe,
  ]
})
export class SharedModule { }
