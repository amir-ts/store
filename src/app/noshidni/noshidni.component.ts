import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoshidaniEditComponent } from './noshidani-edit/noshidani-edit.component';
@Component({
  selector: 'app-noshidni',
  templateUrl: './noshidni.component.html',
  styleUrls: ['./noshidni.component.css']
})
export class NoshidniComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  onBuy(){
    this.dialog.open<NoshidaniEditComponent>(
      NoshidaniEditComponent,
      {
        data: {
          "message":"hi"
        }
      }
    )
  }
}
