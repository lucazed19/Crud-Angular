import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = "https://sheet.best/api/sheets/a55c27a1-3fbc-4b10-a32b-bf377d20d55e";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    })
  }

  constructor(private httpClient: HttpClient) { }

  // C.R.U.D - Create Read Update Delete
  // Retorna a lista de usuários - read
  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  // Salva usuário - update
  postUser(User: User): Observable<User>{
    return this.httpClient.post<User>(this.apiUrl, User, this.httpOptions)
  }

  // Exclui o usuário do banco - delete
  deleteUser(id:number): Observable<User>{
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`)
  }

  // Edita usuário - Update
  updateUser(id: string, user: User): Observable<User>{
    return this.httpClient.put<User>(`${this.apiUrl}/id/${id}`, user, this.httpOptions)
  }

  // Lista usuário único
  getUser(id: string): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`)
  }
}
