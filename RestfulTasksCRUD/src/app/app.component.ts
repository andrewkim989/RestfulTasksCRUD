import { Component, OnInit } from '@angular/core';
import { HttpService } from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RestfulTasksCRUD';
  tasks = [];
  task = [];
  errors = null;
  show: boolean = false;
  fill: boolean = false;
  newTask: any;
  editted: any;

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getTasks();
    this.newTask = { title: "", description: "" };
  }

  showForm() {
    this.show = true;
  }

  getTasks() {
    let t = this._httpService.getAllTasks();
    t.subscribe(data => {
      console.log("Got 'em all!", data);
      this.tasks = data["tasks"];
    })
  }

  createTask() {
    let createNew = this._httpService.addTask({title: this.newTask.title,
      description: this.newTask.description, completed: this.newTask.completed});
    createNew.subscribe(
      data => console.log("Got our data!", data));
    this.newTask = { title: "", description: "" };
    this.getTasks();
  }

  getTask(task) {
    /*let t = this._httpService.getTask(id);
    t.subscribe(data => {
      console.log("Got it!", data);
      this.task = data["task"];
    });*/
    this.editted = task;
    this.fill = true;
  }

  editTask() {
    let e = this._httpService.editTask(this.editted._id, this.editted );
    e.subscribe(
      data => console.log("Data edited!", data));
    this.fill = false;
    this.getTasks();
  }

  deleteTask(id: String) {
    let deleted = this._httpService.deleteTask(id);
    deleted.subscribe(
      data => console.log("Data deleted", data));
    this.getTasks();
    this.fill = false;
  }
}
