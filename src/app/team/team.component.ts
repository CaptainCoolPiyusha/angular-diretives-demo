import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'] 
})
export class TeamComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { 
  }

  teamMembers = [
    { id: 1, name: 'Shashank', gender: 'male', position: 'Full Time Employee', image: 'assets/Images/male.jpg' },
    { id: 2, name: 'Sanket', gender: 'male', position: 'Full Time Employee', image: 'assets/Images/male.jpg' },
    { id: 3, name: 'Rushikesh', gender: 'male', position: 'Full Time Employee', image: 'assets/Images/male.jpg' },
    { id: 4, name: 'Piyusha', gender: 'female', position: 'Intern', image: 'assets/Images/female.png' },
    { id: 5, name: 'Atharv', gender: 'male', position: 'Intern', image: 'assets/Images/male.jpg' },
    { id: 6, name: 'Paras', gender: 'male', position: 'Intern', image: 'assets/Images/male.jpg' },
    { id: 7, name: 'Swarup', gender: 'male', position: 'Intern', image: 'assets/Images/male.jpg' },
  ];


  
}
