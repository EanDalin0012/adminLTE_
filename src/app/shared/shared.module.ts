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
import { HttpClientModule } from '@angular/common/http';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

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
    SchedulerModule,
    BrowserAnimationsModule,
    InputsModule,
    DialogsModule,
    NotificationModule,
    DateInputsModule,
    HttpClientModule,
    FormsModule,
    TranslateModule
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
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
 }
