import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

  getAllTasks(){
    return this._http.get("/tasks");
  }

  addTask(newtask){
    return this._http.post("/tasks", newtask);
  }

  getTask(id) {
    return this._http.get("/tasks/" + id);
  }

  editTask(id, edit) {
    return this._http.put("/tasks/" + id, edit);
  }

  deleteTask(id) {
    return this._http.delete("/tasks/" + id);
  }
}
