import { Component, OnChanges } from "@angular/core";

@Component({
  selector: "my-bookmarks",
  templateUrl: "./bookmarks.component.html"
})
export class BookmarksComponent {
  bookmarks = [
    "Przeprogramowani.pl",
    "overment.com",
    "smyrdek.com",
    "algosmart.pl",
    "Przeprogramowani YouTube"
  ];

  bookmarksToDisplay = this.getBookMarksWithPhrase("");

  filterBookMarks(phrase: string) {
    this.bookmarksToDisplay = this.getBookMarksWithPhrase(phrase);
  }

  getBookMarksWithPhrase(phrase: string) {
    return this.bookmarks.filter(bookmark =>
      phrase.length
        ? bookmark.toLowerCase().includes(phrase.toLowerCase())
        : true
    );
  }
}
