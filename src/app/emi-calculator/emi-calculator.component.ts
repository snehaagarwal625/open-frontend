import { Component, OnInit } from '@angular/core';
interface interval{
  value:number,
  displayText:string
}
@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.scss']
})

export class EmiCalculatorComponent implements OnInit {
  income:number = 120000;
  expense:number = 50000;
  hasExistingLoan:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  tenure:interval[] = [
    {value: 6, displayText: '6 Months'},
    {value: 12, displayText: '12 Months'},
    {value: 24 , displayText: '24 moths'}
  ];
  selectedTenure = this.tenure[0].value;

  onToggle(){
    
    this.hasExistingLoan = !this.hasExistingLoan;
  }

}
