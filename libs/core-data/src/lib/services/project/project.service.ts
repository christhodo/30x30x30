import { Injectable } from '@angular/core';
import { Project } from '@project-angular/api-interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'apps/dashboard/src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Quote } from '@project-angular/api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  model = 'photos';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<Project[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<Project>(this.getUrlWithId(id));
  }

  create(project: Project) {
    return this.http.post(this.getUrl(), project);
  }

  update(project: Project) {
    return this.http.put(this.getUrlWithId(project.id), project);
  }

  delete(project: Project) {
    return this.http.delete(this.getUrlWithId(project.id));
  }

  private getUrl() {
    return `${environment.apiEndpoint}/${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }
}
