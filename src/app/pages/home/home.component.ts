
import { Component } from '@angular/core';
import { TaskserviceService } from 'src/app/services/taskservice.service';
import { Task } from 'src/app/models/tasks/tasks.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showNewTaskDialog: boolean = false;
  tasks: any[] = [];

  constructor(private taskService: TaskserviceService) { }

  ngOnInit() {
    this.fetchTasks();
  }


  fetchTasks() {
    this.taskService.getTasks().subscribe(
      (data: any[]) => {
        this.tasks = data;
      },
      (error) => {
        console.error('Error fetching tasks:', error);
      }
    );
  }
  openNewTaskDialog() {
    this.showNewTaskDialog = true;
  }
 deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(
      () => {
        // Remove the deleted task from the tasks array
        this.tasks = this.tasks.filter(t => t !== task);
      },
      (error) => {
        console.error('Error deleting task:', error);
      }
    );
  }
  closeNewTaskDialog(taskData: any) {
    if (taskData) {
      this.tasks.push(taskData);
    }
    this.showNewTaskDialog = false;
  }
}


