import { Component } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private picker:PickerController,
    private router:Router
  ) {}

  //date and study pickers
  document='';
  study='';

  async openDocument() {
    let opt : PickerOptions= {
      buttons :[
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text:'Done'
        }

      ],
      columns:[{
        name: 'document',
        options:[
          {text: 'C.C', value: 'C.C'},
          {text: 'T.I', value: 'T.I'},
          {text: 'C.E', value: 'C.E'}
        ]
      }]
    };
    let pick = await this.picker.create(opt);
    pick.present();
    pick.onDidDismiss().then(async data => {
      let col = await pick.getColumn('document');
      this.document = col.options[col.selectedIndex].value;
    });
  };

  async openStudy() {
    let opt : PickerOptions= {
      buttons :[
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text:'Done'
        }
  
      ],
      columns:[{
        name: 'study',
        options:[
          {text: 'Ingeniería Industrial', value: '1'},
          {text: 'Ingeniería Mecatrónica', value: '2'},
          {text: 'Ingeniería en Telecomunicaciones', value: '3'},
          {text: 'Tecnología en Desarrollo de Software', value: '4'}
        ]
      }]
    };
    let pick = await this.picker.create(opt);
    pick.present();
    pick.onDidDismiss().then(async data => {
      let col = await pick.getColumn('study');
      this.study = col.options[col.selectedIndex].text;
    });
  };
  
  //router to get
  name='';
  lastname='';
  //documentPick=this.document;
  id='';
  date='';
  studyPick=this.study;

  submitGet(){
    this.router.navigate(['/get',this.name,this.lastname,this.document,this.id,this.date,this.study]);
  }
}

