import { Component, OnInit } from '@angular/core';
import { pocketmon } from './pocketmon.interface';

@Component({
  selector: 'app-pocketmon',
  templateUrl: './pocketmon.component.html',
  styleUrls: ['./pocketmon.component.scss'],
})
export class PocketmonComponent implements OnInit {
  pocketmon: pocketmon = {
    id: '1',
    name: '라이츄',
    type1: '전기',
    type2: '독',
  };
  constructor() {}

  ngOnInit(): void {}
}
