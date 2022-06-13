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
  model = 'users';
  private imageUrl = `https://robohash.org/`;

  constructor(private http: HttpClient) {}

  getquotes(): Observable<Quote> {
    let headers = new HttpHeaders()
      .set(
        'x-rapidapi-key',
        'aa46c9094fmsh538eb9a015d8dc1p112ebajsn07c1eeb9d4d1'
      )
      .set('x-rapidapi-host', 'quotes15.p.rapidapi.com');
    let url = 'https://quotes15.p.rapidapi.com/quotes/random/';
    return this.http.get<Quote>(url, { headers });
  }

  all() {
    return this.http.get<Project[]>(this.getUrl()).pipe(
      map((projects) =>
        projects.map((project) => ({
          ...project,
          defaultImageUrl: `${this.imageUrl}${project.name}`,
        }))
      )
    );
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

  private getImage() {
    return `${this.imageUrl}${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }
}
