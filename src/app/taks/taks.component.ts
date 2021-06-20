import { Component, Input, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-taks',
  templateUrl: './taks.component.html',
  styleUrls: ['./taks.component.css']
})

export class TaksComponent {
  @Input() task:any;
  @Output() evento = new EventEmitter()
  @Output() update = new EventEmitter()
  status:string;
  constructor() {  }

  deleteTask(id:string) {
    this.evento.emit(id)
  }
  taskstatus(id){
    this.update.emit(id)
  }
}


