import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rupeeFormat',
  standalone: false
})
export class RupeeFormatPipe implements PipeTransform {

 transform(value: number | string): string {
    if (value === null || value === undefined || value === '') return '';

    const num = Number(value);
    if (isNaN(num)) return '';

    if (num >= 10000000) {
      // 1 Crore or more
      return `₹${(num / 10000000).toFixed(1)}Cr`;
    } else if (num >= 100000) {
      // 1 Lakh or more
      return `₹${(num / 100000).toFixed(1)}L`;
    } else {
      // Below 1 Lakh — use Indian numbering format
      return '₹' + num.toLocaleString('en-IN');
    }
  }

}
