import { NgModule, ModuleWithProviders } from '@angular/core';
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
import { NotificationModule } from '@progress/kendo-angular-notification';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { DateInputsModule, CalendarModule } from '@progress/kendo-angular-dateinputs';
import { DialogsModule, DialogModule } from '@progress/kendo-angular-dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DropDownsModule, SharedModule } from '@progress/kendo-angular-dropdowns';

@NgModule({
  declarations: [
  ModalComponent,
  SanitizeHtmlPipe,
  DateFormatePipe,
  AmountFormatPipe
],
  imports: [
    CommonModule
  ],
  exports : [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    TranslateModule,
    DialogModule,
    GridModule,
    LayoutModule,
    SharedModule,
    SortableModule,
    PDFExportModule,
    DateInputsModule,
    DropDownsModule,
    ButtonsModule,
    SchedulerModule,
    HttpClientJsonpModule,
    NotificationModule,
    CalendarModule,
    DialogsModule,
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
export class SBSharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SBSharedModule,
      providers: []
    };
  }
 }
