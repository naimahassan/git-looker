import { Component, OnInit } from '@angular/core';
import { Github } from '../github'
<<<<<<< HEAD
import {GithubService } from '../githubs/github.service'
=======
>>>>>>> 3421f2cb50b6ac216a54633ee207fbda0c3a0231

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  github = Github;

  constructor() { }

  ngOnInit() {
  }

}
