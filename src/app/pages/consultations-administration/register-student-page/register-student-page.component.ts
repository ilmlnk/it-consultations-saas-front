import { Component } from '@angular/core';
import { LocalizationService } from '../../../shared/services/localization.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { filter, tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'cons-register-student-page',
  standalone: false,
  templateUrl: './register-student-page.component.html',
  styleUrl: './register-student-page.component.scss'
})
export class RegisterStudentPageComponent {
  selectedCity: string;
  cities: string[];
  filteredCities: Observable<string[]>;
  cityControl = new FormControl();
  isCitiesLoaded: boolean = false;
  isLoading: boolean = false;
  selectedFile: File | null;
  previewUrl: string | ArrayBuffer | null;

  constructor(private localizationService: LocalizationService) {}

  ngOnInit() {
    this.loadCities();

    this.filteredCities = this.cityControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        filter(value => value && value.length > 2),
        tap(() => {
          if (!this.isCitiesLoaded) {
            this.loadCities();
          }
        }),
        switchMap(value => this.searchCities(value))
      );
  }

  onFocus(): void {
    if (!this.isCitiesLoaded) {
      this.loadCities();
    }
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  private loadCities() {
    this.isLoading = true;
    this.localizationService.cities.subscribe({
      next: (data: string[]) => {
        this.cities = data;
        this.isCitiesLoaded = true;
        this.isLoading = false;
      },
      error: (error: any) => {
        console.error(error);
        this.isLoading = false;
      }
    })
  }

  private searchCities(value: string): Observable<string[]> {
    const filterValue = value.toLowerCase();

    if (this.isCitiesLoaded) {
      return of(this.cities.filter(city =>
        city.toLowerCase().includes(filterValue)
      ));
    }

    return this.localizationService.cities.pipe(
      map((cities: string[]) => {
        this.cities = cities;
        this.isCitiesLoaded = true; 
        return cities.filter(city =>  
          city.toLowerCase().includes(filterValue)
        );
      })
    );
  }
}
