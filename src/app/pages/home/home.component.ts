import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  txt = 'teste';

  ngOnInit() {

    const par = this.activatedRoute.snapshot.paramMap.get('parametro');
    console.log(par);

  }

  goToLogin(){
    //this.router.navigate(['/login']);
  }

}
