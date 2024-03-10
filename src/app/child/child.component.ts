import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ListKey } from './types';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent implements OnInit , AfterContentInit,
 AfterContentChecked, OnChanges,
 AfterViewInit, AfterViewChecked{
  listKey: ListKey = {
    asd: true,
    asdf: false,
    sdf: true,
  };
  list: string[] = ['asd', 'asdf', 'sdf'];
  checkItem(item: string): boolean {
    return this.listKey.hasOwnProperty(item) && this.listKey[item];
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges',changes)
  } 
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }
  ngOnInit(): void {
    console.log('ngOnInit');
  }
 
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }
}
