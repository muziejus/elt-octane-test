import Controller from '@ember/controller';
import Table from 'ember-light-table';

export default class ApplicationController extends Controller {
  isLoading = false;

  table = Table.create({columns: this.columns, rows: this.rows});

  get columns() {
    return [
      { name: 'A', valuePath: 'A', width: "180px" },
      { name: 'B', valuePath: 'B', width: "180px" },
      { name: 'C', valuePath: 'C', width: "180px" },
      { name: 'D', valuePath: 'D', width: "180px" },
    ];
  }

  get rows() {
    return [
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
    ];
  }
}
