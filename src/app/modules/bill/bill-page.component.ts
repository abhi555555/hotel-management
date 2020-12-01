import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Player {
  name: string;
  team: string;
  goals: number;
}

export const STATS: Player[] = [
  { name: 'James Rodríguez', team: 'Colombia', goals: 2 },
  { name: 'Jan Vertonghen', team: 'Belgium', goals: 3 },
  { name: 'Xabi Alonso', team: 'Spain', goals: 1 },
  { name: 'Granit Xhaka', team: 'Switzerland', goals: 1 },
];

interface Total { 
  total: number 
};
type PlayerOrTotal = Player | Total;


@Component({
  selector: 'app-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit {

  dataSource: PlayerDataSource;
  
  isLastRow = (data, index) => index === this.players.length;

  players = STATS.slice();
  
  constructor() {
    this.dataSource = new PlayerDataSource();
    this.dataSource.use(this.players.slice());
   }

  ngOnInit(): void {
  }

  public calculateTotal() {
    return this.players.reduce((accum, curr) => accum + curr.goals, 0);
  }

}

export class PlayerDataSource extends DataSource<PlayerOrTotal> {

  dataWithTotal = new BehaviorSubject<PlayerOrTotal[]>([]);

  use(players: Player[]) {
    this.dataWithTotal.next([ ...players]);
  }

  connect(): Observable<PlayerOrTotal[]> {
    return this.dataWithTotal.asObservable();
  }

  disconnect() {}
}

