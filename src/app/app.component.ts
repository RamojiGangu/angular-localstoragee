import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  constructor(){
    if(window.localStorage.getItem('students')==null)
    {
      window.localStorage.setItem("students","")
    }
    else{
      this.students = JSON.parse(window.localStorage.getItem('students'));
      window.localStorage.setItem("students",JSON.stringify(this.students));
    }
  }
  students=[];
  fn;
  ln;
  updateIndex;
  editTask(s,i){
    this.updateIndex = i;
    this.fn=s.firstname;
    this.ln=s.lastname;
  }
  updateStudent(s){
    this.students[this.updateIndex]=s;
    window.localStorage.setItem("students",JSON.stringify(this.students));
  }
  delTask(index){
    this.students = JSON.parse(window.localStorage.getItem('students'));
    this.students.splice(index,1);
    window.localStorage.setItem("students",JSON.stringify(this.students));
  }
  addStudent(x){
    if(window.localStorage.getItem("students")!="")
    {
      this.students = JSON.parse(window.localStorage.getItem('students'));        
      this.students.push(x);   
      window.localStorage.setItem("students",JSON.stringify(this.students));
    }
    else{
      this.students.push(x);   
      window.localStorage.setItem("students",JSON.stringify(this.students));
    }
  }
}
