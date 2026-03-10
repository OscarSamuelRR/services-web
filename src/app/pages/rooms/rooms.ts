import { Component } from '@angular/core';
import { Footer } from '../../components/footer/footer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rooms',
  imports: [Footer, RouterLink],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css',
})
export class Rooms {

}
