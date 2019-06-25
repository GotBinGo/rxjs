import { fromEvent } from "rxjs";
import { tap, map, delay } from "rxjs/operators";

this.authService.initUser().subscribe((res: boolean) => {
    if (!res) {
        return false;
    }
    this.authService.redirectToHome();
});

const click = fromEvent(document, 'click').pipe(
    tap(acc => console.log(acc)),
    map(x => x.clientX),
    delay(1000),
    tap(acc => console.log(acc)),
  );
