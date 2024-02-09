import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { IPost } from '../interfaces';
import { PostService } from '../post.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  currentPost!: IPost;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => this.postService.getPost(+params.get('id')!))
      )
      .subscribe({
        next: post => this.currentPost = post,
        error: (err) => {
          console.error(err);
          this.location.back();
        }
      });
  }

}
