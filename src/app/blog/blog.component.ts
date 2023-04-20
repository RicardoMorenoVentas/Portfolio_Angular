import { Component } from '@angular/core';
import { BlogService } from '../blogServices/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  public get blogService(): BlogService {
    return this._blogService;
  }
  public set blogService(value: BlogService) {
    this._blogService = value;
  }
  constructor(private _blogService: BlogService){}
}
