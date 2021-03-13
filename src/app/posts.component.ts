import { Component } from "@angular/core";

@Component({
  selector: "my-posts",
  templateUrl: "./posts.component.html"
})
export class PostsComponent {
  postsList = [
    "TDD w praktyce",
    "Czym jest technika pomodoro",
    "Nauka programisty w 2020r.",
    "Czy warto uczyć się Reacta",
    "Poznaj Przeprogramowanych"
  ];

  postsToDisplay = this.getPostsMarksWithPhrase("");

  filterPosts(phrase: string) {
    this.postsToDisplay = this.getPostsMarksWithPhrase(phrase);
  }

  getPostsMarksWithPhrase(phrase: string) {
    return this.postsList.filter(post =>
      phrase.length ? post.toLowerCase().includes(phrase.toLowerCase()) : true
    );
  }
}
