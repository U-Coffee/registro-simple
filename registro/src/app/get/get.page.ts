import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get',
  templateUrl: './get.page.html',
  styleUrls: ['./get.page.scss'],
})

export class GetPage implements OnInit {

  constructor(
    private actRou:ActivatedRoute
  ) { }

    nameCap='';
    lastnameCap='';
    documentPickCap='';
    idCap='';
    dateCap='';
    studyCap='';
    description='';

  ngOnInit() {

    this.nameCap=this.actRou.snapshot.paramMap.get('nameGet');
    this.lastnameCap=this.actRou.snapshot.paramMap.get('lastnameGet');
    this.documentPickCap=this.actRou.snapshot.paramMap.get('documentPickGet');
    this.idCap=this.actRou.snapshot.paramMap.get('idGet');
    this.dateCap=this.actRou.snapshot.paramMap.get('dateGet');
    this.studyCap=this.actRou.snapshot.paramMap.get('studyGet');

    switch (this.studyCap) {
      case 'Ingeniería Industrial':{
        this.description= 'Formar Ingenieros Integrales bajo los principios y valores Agustinianos, con capacidad para desempeñarse en la implementación, dirección, y control de sistemas productivos de bienes y servicios, mediante la integración y optimización de los recursos humanos, económicos, financieros, tecnológicos y ambientales, que contribuyan a la mejora de la competitividad y productividad del país.'
        break;
      }

      case 'Ingeniería Mecatrónica':{
        this.description ='Formar Ingenieros líderes, bajo los principios Agustinianos, capaces de dar soluciones integrales en el ámbito de las Tecnologías de la Información y las Comunicaciones –TIC-. El Ingeniero en Telecomunicaciones Agustiniano aporta soluciones efectivas a las necesidades reales en infraestructura de telecomunicaciones, impulsando el desarrollo social, político y económico del País.'
        break;
      }

      case 'Ingeniería en Telecomunicaciones':{
        this.description ='Formar Ingenieros Integrales bajo los principios y valores Agustinianos, con capacidad para desempeñarse en las áreas de automatización, control, robótica, diseño mecatrónico sostenible y fabricas inteligentes basados en la construcción de buenas prácticas con una sólida formación investigativa, humanística y ética mediante la integración y optimización de los recursos tecnológicos que fortalezca la productividad y competitividad del país.'
        break;
      }

      case 'Tecnología en Desarrollo de Software':{
        this.description ='Formar tecnólogos en desarrollo de software competentes, con capacidades integrales, bajo los principios y valores Agustinianos logrando una sólida formación que les permita analizar, diseñar, construir, ejecutar y controlar sistemas de información, dando soluciones innovadoras a problemas específicos de las organizaciones que requieren la construcción de software basado en las nuevas tecnologías de la información y la comunicación.'
        break;
      }
    
      default:
        this.description ='No seleccionó ningún programa'
        break;
    }

  }

  
  
}
