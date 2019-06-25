import { of, concat, merge, throwError, range, Observable, EMPTY } from 'rxjs';
import { map, filter, startWith } from 'rxjs/operators';

const b = of(1, 2, 3);

const c = of(2, 3).pipe(startWith(1));

const a = EMPTY.pipe(
  startWith(3), startWith(2), startWith(1),
);

const observer = {
  next: x => console.log('next value: ' + x),
  error: () => console.log('error'),
  complete: () => console.log('complete'),
};

a.subscribe(observer);
b.subscribe(observer);
c.subscribe(observer);
