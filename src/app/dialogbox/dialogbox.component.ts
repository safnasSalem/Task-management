// dialogbox.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { TaskserviceService } from '../services/taskservice.service';
import { Task } from '../models/tasks/tasks.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent {
  @Output() closeDialog = new EventEmitter<any>();
  taskForm: FormGroup;

  taskNumber: number;
  description: string;
  selectedOption: string;
  priority: string;
  status: string;

  options = [
    { value: 'hari', label: 'hari' },
    { value: 'John', label: 'John' },
    { value: 'ela', label: 'ela' },
    { value: 'emma', label: 'emma' },
    { value: 'ram', label: 'ram' },
    { value: 'ola', label: 'ola' },
    { value: 'roy', label: 'roy' },


  ];
  optionss = [
    { value: 'High', label: 'High' },
    { value: 'Medium', label: 'Medium' },
    { value: 'Low', label: 'Low' }
  ];
  constructor(private taskService: TaskserviceService,private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      taskNumber: ['', [Validators.required, Validators.maxLength(10)]]
    });
  }

  submitTask() {
    const taskData = {
      taskNumber: this.taskNumber,
      description: this.description,
      assignedTo: this.selectedOption,
      priority: this.priority,
      status: this.status,
      // createdOn: new Date().toISOString()
      createdOn: new Date().toISOString().split('T')[0]

    };

    this.taskService.addTask(taskData)
      .subscribe(
        (response) => {
          console.log('Task added successfully:', response);
          this.closeDialog.emit(taskData);
        },
        (error) => {
          console.error('Error adding task:', error);
          
        }
      );
  }
   get formControls() {
    return this.taskForm.controls;
  }
}
