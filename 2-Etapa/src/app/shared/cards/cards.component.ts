import { Component, OnInit } from '@angular/core';
import { CardContentService } from 'src/app/services/card-content.service';
import { Posts } from 'src/app/model/post.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  posts = new Posts;
  erro: any;
  constructor(private CardContentService: CardContentService) {
    this.getter();
  }

  ngOnInit(): void { }

  getter(){
    this.CardContentService.getPosts().subscribe((data: Posts) => {
      this.posts = data;
      console.log('O data que recebemos', data);
      console.log('A variavel que preenchemos', this.posts);
    }, (error:any) => {
      this.erro = error;
      console.error('Erro: ', error);
    })
  }
}
