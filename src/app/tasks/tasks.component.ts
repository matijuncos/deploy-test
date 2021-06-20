import { Component } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent{

  tasks: Task[] =[]
  taks:any={
    title: 'titulo',
    description: 'description',
    date: '15/14/1234',
    time: '23:23:23'
  }
  constructor(private tasksService: TasksService) {
    this.tasksService.getTasks().subscribe((data:any)=> {
      this.tasks = data.response
    })
  }

  deleteTaks(id){
       this.tasksService.deleteTask(id)
      .subscribe((data:any) => {
    this.tasks = this.tasks.filter(task => task._id !== id)
      })
    }

    taskToDone(id){
      this.tasksService.taskstatus(id)
      .subscribe((data:any) =>{
        console.log(data)
        this.tasks = this.tasks.map(task => task._id === id ? data.response : task)
      })
    }

    sendBtn(){
      this.tasksService.postTask({task:this.taks, userId:'60560fcae97bee20901b591b' }).subscribe(
        (res:any) => this.tasks.push(res.response)
      )

    }
  }


export interface Task  {
  _id:string,
  title:string,
  time:string,
  date:string,
  description:string,
  userId: any,
  done: boolean
}