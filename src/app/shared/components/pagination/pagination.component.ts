import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() currentPage = 1;
  @Input() totalPages = 1;
  @Input() maxPagesToShow = 5;
  @Output() pageChange = new EventEmitter<number>();

  pages: number[] = [];

  ngOnInit() {
    this.generatePages();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['currentPage'] && !changes['currentPage'].firstChange) {
      this.generatePages();
    }
  }

  generatePages() {
    const start = Math.max(
      1,
      this.currentPage - Math.floor(this.maxPagesToShow / 2),
    );
    const end = Math.min(this.totalPages, start + this.maxPagesToShow - 1);

    this.pages = [];
    for (let i = start; i <= end; i++) {
      this.pages.push(i);
    }
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.currentPage = page;
      this.generatePages();
      this.pageChange.emit(page);
    }
  }
}
