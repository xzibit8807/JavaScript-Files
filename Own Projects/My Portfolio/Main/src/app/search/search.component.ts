import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  searchQuery: string = '';

  constructor(private el: ElementRef) {}

  onSearch(): void {
    const query = this.searchQuery.toLowerCase();

    // Reset any previous highlights
    this.resetHighlights();

    if (query) {
      // Find all text nodes in the document
      const elements = this.el.nativeElement.ownerDocument.body.querySelectorAll('*');

      elements.forEach((element: HTMLElement) => {
        if (element.children.length === 0 && element.textContent?.trim() !== '') {
          const innerHTML = element.innerHTML;
          const regex = new RegExp(`(${query})`, 'gi'); // Match search query case-insensitively
          const highlightedHTML = innerHTML.replace(regex, '<span class="highlight">$1</span>');
          element.innerHTML = highlightedHTML;
        }
      });
    }
  }

  resetHighlights(): void {
    const highlights = this.el.nativeElement.ownerDocument.body.querySelectorAll('.highlight');
    highlights.forEach((highlight: HTMLElement) => {
      const parent = highlight.parentNode as HTMLElement;
      parent.replaceChild(document.createTextNode(highlight.textContent || ''), highlight);
      parent.normalize();
    });
  }
}
