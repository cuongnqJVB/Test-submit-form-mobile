import { Component } from '@angular/core';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'nz-demo-table-basic',
  template: `
  <form
  nz-form
  class="card-body p-4 pt-0"
  autocomplete="off"
  (ngSubmit)="setFilter(searchTerm)"
>
  <input
    nz-input
    name="group_name"
    placeholder="Theo tên nhóm"
    class="metronic-input ibg-solid mb-4"
    [(ngModel)]="searchTerm.group_name"
  />
  <input
    nz-input
    name="group_note"
    placeholder="Theo ghi chú"
    class="metronic-input ibg-solid"
    [(ngModel)]="searchTerm.group_note"
  />
  <button nz-button type="submit" class="d-none"></button>
</form>
  `,
})
export class NzDemoTableBasicComponent {
  searchTerm: any = {};
  setFilter(params: any) {
    alert('submit filter');
    console.log('params', params);
  }
}
