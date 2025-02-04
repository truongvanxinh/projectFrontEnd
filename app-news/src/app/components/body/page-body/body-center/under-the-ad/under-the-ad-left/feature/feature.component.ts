import { Component, Input, OnInit } from '@angular/core';
import { BodyCenterComponent } from '../../../body-center.component';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],

})
export class FeatureComponent implements OnInit {

  @Input() dataLife: any[];
  @Input() dataTravel: any[];
  @Input() dataFashion: any[];
  @Input() dataSport: any[];
  @Input() dataTechnology: any[];

  private urlLife = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fdoi-song.rss'.trim();
  private urlTravel = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fdu-lich.rss'.trim();
  private urlFashion = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fttt.rss'.trim();
  private urlSport = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthethao.thanhnien.vn%2Frss%2Fhome.rss'.trim();
  private urlTechnology = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fcong-nghe.rss'.trim();
    constructor(private underLeft: BodyCenterComponent) {
      this.dataLife = [];
      this.dataFashion = [];
      this.dataSport = [];
      this.dataTechnology = [];
      this.dataTravel = [];

      this.underLeft.getDatas(this.urlLife, this.dataLife);
      this.underLeft.getDatas(this.urlTravel, this.dataTravel);
      this.underLeft.getDatas(this.urlFashion, this.dataFashion);
      this.underLeft.getDatas(this.urlSport, this.dataSport);
      this.underLeft.getDatas(this.urlTechnology, this.dataTechnology);

     }

  ngOnInit(): void {
  }

}
