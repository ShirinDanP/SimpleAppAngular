import { Component, OnInit } from '@angular/core';
import { Address } from '../interface';
import { DataService} from '../../services/data.service';
import { AlbumInterface } from '../album-interface';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  showName: true;
  albums: AlbumInterface [];
  // tslint:disable-next-line:no-inferrable-types
  toggleEditTable: boolean= false;

  constructor(private dataService: DataService) {
    console.log('constructor run ...');
  }

  ngOnInit() {
    console.log('ngOnInit ran ...');
    this.name = 'Shirin Danehpash';
    this.age = 27;
    this.address = {
      street: 'Norra Fäladen',
      city: 'lund',
      state: 'Sweden'
    };
    this.email = 'shirin.danehpash@cybercom.com';
    this.hobbies = ['writing code', ' watch movie', ' playing Football'];
    this.dataService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    });
  }

  onClick(): void {
this.name === 'Shirin Danehpash' ? this.name = 'Reza rajabi' : this.name = 'Shirin Danehpash';

}
addHobby(message) {
  this.hobbies.push(message);
  return false;
}
deleteHobby(hobby): void {
for (let i = 0 ; i < this.hobbies.length; i++) {
if (this.hobbies[i] === hobby) {
this.hobbies.splice(i, 1);
}
}
}
toggleEdit(): void {
  this.toggleEditTable = ! this.toggleEditTable;
}
}
