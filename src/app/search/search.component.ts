import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "my-search",
  styleUrls: ["./search.component.css"],
  templateUrl: "./search.component.html"
})
export class SearchComponent {
  searchPhrase = "";

  @Output() requestFilterByPhrase = new EventEmitter<string>();

  handleOnChange(event) {
    this.searchPhrase = event.target.value;

    this.requestFilterByPhrase.emit(this.searchPhrase);
  }

  getValue(e) {
    this.searchPhrase = e.target.value;
  }
}
