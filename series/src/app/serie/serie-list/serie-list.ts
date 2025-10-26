import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { dataSeries } from '../dataSeries';
import { SerieService } from '../serie.service';


@Component({
  selector: 'app-serie-list',
  standalone: false,
  templateUrl: './serie-list.html',
  styleUrl: './serie-list.css',
})
export class SerieList  implements OnInit{
  series: Array<Serie> =[];

  constructor(private serieService: SerieService) {}
   getSeriesList(){
    (this.serieService as any).getSeries().subscribe((series: Serie[]) => {
        this.series = series;
      });
        
      }
  ngOnInit(): void {
    this.getSeriesList();
     
  }
}
