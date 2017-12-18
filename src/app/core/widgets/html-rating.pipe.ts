import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlRating'
})
export class HtmlRatingPipe implements PipeTransform {

  transform(value: number): string {
    let html = '';
    for (let i = 1 ; i <= 5 ; i++) {
      html += i <= value ? '&bigstar;' : '&star;';
    }
    return html;
  }

}
