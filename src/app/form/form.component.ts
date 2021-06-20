import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private taskService : TasksService) { }

taks:any={
  title: 'titulo',
  description: 'description',
  date: '15/14/1234',
  time: '23:23:23'
}

  ngOnInit(): void {
  }
  send(){
    this.taskService.postTask({task:this.taks, userId:'60560fcae97bee20901b591b' }).subscribe(console.log)
  }
}
