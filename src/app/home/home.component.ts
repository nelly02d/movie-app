import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbRatingModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbRatingConfig]
})
export class HomeComponent {

  trendingMovies: any; 

  constructor(private http: HttpClient, config: NgbRatingConfig) {
    config.max = 5;
		config.readonly = true;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getTrendingMovies();
  }

  getTrendingMovies() {
    this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((movies) => { //need to add the http client on app.module
      this.trendingMovies = movies
      console.log(this.trendingMovies)
    })
  }
  
  ariaValueText(current: number, max: number) {
		return `${current} out of ${max} hearts`;
	}
}
