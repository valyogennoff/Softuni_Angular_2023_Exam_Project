import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(dateString: string, ...args: unknown[]): unknown {
    return moment(dateString).fromNow();
  }

}
