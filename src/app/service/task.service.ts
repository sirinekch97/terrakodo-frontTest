import { Injectable } from '@angular/core';
import { HttpHeaders , HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

let header = new HttpHeaders();
header.set('Access-Control-Allow-Origin', '*');
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseURL = environment.baseUrl;
  
  constructor(private http: HttpClient) { }
 
  getallgo(){
    return this.http.get(this.baseURL+'/Gos/findall');
  }
  getallTask(){
    return this.http.get(this.baseURL+'/task');

  }
  
  getTaskById(_id : string){
    return this.http.get(this.baseURL+'/task/'+_id);

  }

  deleteTask(_id : string){
    console.log(_id);
    return this.http.delete(this.baseURL+'/task/'+_id)
  
  }
  addTask(task){
    return this.http.post(this.baseURL+'/tasks',task);
  }
  updateTask(_id:string,task){
    console.log(_id);
    return this.http.put(this.baseURL+'/task/'+_id,task)
  }
}
