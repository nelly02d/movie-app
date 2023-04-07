import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  type = '';
  url = '';
  id = '';
  movies: any
  movie: any

  constructor(private route: ActivatedRoute, private http: HttpClient) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];

    if(this.type === 'trending') {
     this.url = 'http://localhost:4200/assets/data/trending-movies.json';
    }

    if(this.type === 'theatre') {
      this.url = 'http://localhost:4200/assets/data/theatre-movies.json';
    }

    if(this.type === 'popular') {
      this.url = 'http://localhost:4200/assets/data/popular-movies.json';
    }

    this.getMovie();
  }

  getMovie() {
    this.http.get(this.url).subscribe((movies) => {
      this.movies = movies //set
      let index = this.movies.findIndex((movie: {id: string})  => movie.id == this.id);
      if(index > -1) {
        this.movie = this.movies[index]
      }
    });
  }
}
