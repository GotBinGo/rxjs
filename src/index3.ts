import { of, concat, merge, throwError, range, Observable, EMPTY } from 'rxjs';
import { map, filter, startWith, skip, take, distinctUntilChanged } from 'rxjs/operators';

const a = of(1, 1, 2, 3, 4, 5);

const observer = {
  next: x => console.log('next value: ' + x),
  error: () => console.log('error'),
  complete: () => console.log('complete'),
};

a.pipe(filter(x => x % 2 === 0)).subscribe(observer);
a.pipe(skip(2), take(2)).subscribe(observer);
a.pipe(distinctUntilChanged()).subscribe(observer);
