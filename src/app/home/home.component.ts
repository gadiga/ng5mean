import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models/post';
import { routerTransicion } from '../animations/common-animations'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routerTransicion],
  host: {'[@routerTransition]': ''}
})
export class HomeComponent implements OnInit {

  posts: Array<Post>;

  constructor(private _postService: PostService) { }

  ngOnInit() {
    this._postService.getPosts()
        .subscribe(res => this.posts = res);
  }

}
