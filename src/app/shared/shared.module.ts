import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SearchOutline } from '@ant-design/icons-angular/icons';
import { PaginationComponent } from './components/pagination/pagination.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [HeaderComponent, PaginationComponent],
  exports: [HeaderComponent, PaginationComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzDatePickerModule,
    NzIconModule.forRoot([SearchOutline]),
    NgOptimizedImage,
  ],
})
export class SharedModule {}
