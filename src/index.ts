import { of, concat, merge, throwError, range, Observable, EMPTY } from 'rxjs';
import { map, filter, startWith } from 'rxjs/operators';

// observable
const a = of(1, 2, 3);
const b = of('kutya', 'cica');
const c = throwError('err');

a.subscribe(x => console.log(x));

// observer ---------------------------
const observer = {
  next: x => console.log('next value: ' + x),
  error: () => console.log('error'),
  complete: () => console.log('complete'),
};

concat(a, c, b).subscribe(x => console.log(x), () => console.log('err'), () => console.log('complete'));
concat(a, b).subscribe(observer);
