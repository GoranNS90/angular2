import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {

  @Output() eventPagination = new EventEmitter();
  @Input() pagination:any;

  setCurrentPage(page) {
    this.pagination.currentPage = page;
    this.setPagination(page);
  }

  setPagination(page) {
    let pagination = {};
    if (this.pagination.totalPages > this.pagination.maxPage) {
      if (page == 0) {
        this.pagination.pages = Array.from(Array(this.pagination.maxPage),(x, i) => i);
      } else {
        if (page == this.pagination.totalPages - 1) {
          this.pagination.pages = Array.from(Array(this.pagination.maxPage),(x, i) => i + page -2);
        } else {
          this.pagination.pages = Array.from(Array(this.pagination.maxPage),(x, i) => i + page -1);
        }
      }
    } else {
      this.pagination.pages = Array.from(Array(this.pagination.maxPage),(x, i) => i);
    }

    this.paginationChange(this.pagination);
  }

  setTotalPages(itemsPerPage) {
    this.pagination.totalPages = Math.ceil(this.pagination.totalItems / itemsPerPage);
    this.pagination.totalPages > this.pagination.maxPage && this.pagination.totalPages > 3 ? this.pagination.maxPage = 3 : this.pagination.maxPage = this.pagination.totalPages;
    this.setCurrentPage(0);
  }

  paginationChange(pagination) {
    this.eventPagination.emit(pagination);
  }

}
