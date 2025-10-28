import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private selectedMenu = new BehaviorSubject<string> ("");
  selectedMenuData = this.selectedMenu.asObservable();

  getSelectedMenu():Observable<string> {
    return this.selectedMenuData;
  }

  setSelectedMenu(key:string) {
    this.selectedMenu.next(key);
  }
  
}
