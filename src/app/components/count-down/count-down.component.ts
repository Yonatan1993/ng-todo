import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrl: './count-down.component.css'
})
export class CountDownComponent implements OnInit,OnDestroy{


  @Input() set dDay (dDay:Date){
    this._dDay = dDay;
    this.dateNow = new Date();
  }

  private _dDay: Date;
  private dateNow: Date = new Date();
  private subscription: Subscription = new Subscription();
  private millisecondsInSeconds = 1000;
  private secondsInMinute = 60;
  private minuteInHour: number = 60;
  private hoursInADay = 24;

  public seconds: number;
  public minutes: number;
  public hours : number
  public days: number;
  public timeDiff:number

  ngOnInit(): void {
    this.subscription.add(
      interval(1000).subscribe(()=>{
        this.getTimeDiff();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  private getTimeDiff():void{
    this.timeDiff = new Date(this._dDay).getTime() - new Date().getTime();
    this.setTimeUnits(this.timeDiff);
  }

  private setTimeUnits(timeDiff : number) :void{
    this.seconds = Math.floor(
      (timeDiff / this.millisecondsInSeconds) % this.secondsInMinute);


    this.minutes = Math.floor(
      (timeDiff / (this.millisecondsInSeconds * this.minuteInHour)) %
        this.minuteInHour
  );

    this.hours = Math.floor(
      (timeDiff /(this.millisecondsInSeconds*this.secondsInMinute*this.minuteInHour))%
        this.hoursInADay
    );

    this.days = Math.floor(timeDiff / (this.millisecondsInSeconds * this.secondsInMinute * this.minuteInHour * this.hoursInADay));

  }

}


