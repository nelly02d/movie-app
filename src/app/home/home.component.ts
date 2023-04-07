import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbRatingConfig]
})
export class HomeComponent {

  trendingMovies: any; 
  theatreMovies: any;
  popularMovies: any;

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }

  getTrendingMovies() {
    this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((movies) => { //need to add the http client on app.module
      this.trendingMovies = movies
    })
  }

  getTheatreMovies() {
    this.http.get('http://localhost:4200/assets/data/theatre-movies.json').subscribe((movies) => { //need to add the http client on app.module
      this.theatreMovies = movies
    })
  }

  getPopularMovies() {
    this.http.get('http://localhost:4200/assets/data/popular-movies.json').subscribe((movies) => { //need to add the http client on app.module
      this.popularMovies = movies
    })
  }

  goToMovie(type: string, id: string) {
    this.router.navigate(['movie', type, id])
  }
}
