import {Component, OnInit} from '@angular/core';
import {AppDocument} from "../../shared/models/app-document";

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  document: AppDocument | undefined;

  ngOnInit() {
    this.document = { pages: ['1.png', '2.png', '3.png', '4.png', '5.png'] };
  }

}
