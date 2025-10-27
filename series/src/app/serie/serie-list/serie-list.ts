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
export class SerieList implements OnInit {
  series: Array<Serie> = [];
  selectedSerie: Serie | null = null;

  constructor(private serieService: SerieService) { }
  
  getSeriesList() {
    this.serieService.getSeries().subscribe(series => {
      console.log(series);
      this.series = series;
    });
  }


  getAverageSeasons(): number {
    if (this.series.length === 0) return 0;
    
    const totalSeasons = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
    return Math.round((totalSeasons / this.series.length) * 10) / 10;
  }


  selectSerie(serie: Serie): void {
    this.selectedSerie = serie;
  }

 
  clearSelection(): void {
    this.selectedSerie = null;
  }

  ngOnInit(): void {
    this.getSeriesList();
  }
}