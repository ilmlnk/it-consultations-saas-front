import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoachesListPageComponent } from './consultations/coaches-list-page/coaches-list-page.component';
import { ConsultationsListPageComponent } from './consultations/consultations-list-page/consultations-list-page.component';
import { ConsultationsRoutingModule } from './consultations-routing.module';
import { CreateCoachPageComponent } from './consultations-administration/create-coach-page/create-coach-page.component';
import { RegisterStudentPageComponent } from './consultations-administration/register-student-page/register-student-page.component';
import { LoginComponent } from './consultations-administration/login/login.component';
import { ConsultationsPageRootComponent } from './consultations/consultations-page-root/consultations-page-root.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CoachesListComponent } from './consultations/components/coaches-list/coaches-list.component';
import { ConsultationsListComponent } from './consultations/components/consultations-list/consultations-list.component';
import { ConsultationCardComponent } from './consultations/components/consultations-list/consultation-card/consultation-card.component';
import { ModalWindowComponent } from './consultations/components/modal-window/modal-window.component';
import { ConsultationModalComponent } from './consultations/components/consultations-list/consultation-card/consultation-modal/consultation-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ConsultationTimeModalComponent } from './consultations/components/consultations-list/consultation-card/consultation-modal/consultation-time-modal/consultation-time-modal.component';
import { SelectedOptionsComponent } from './consultations/components/consultations-list/consultation-card/consultation-modal/selected-options/selected-options.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatError, MatFormField, MatFormFieldModule, MatHint, MatLabel } from '@angular/material/form-field';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ConsultationsTableComponent } from './consultations/components/consultations-table/consultations-table.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { CalendarPageComponent } from './consultations/calendar-page/calendar-page.component';
import { FavoritesConsultationsPageComponent } from './consultations/favorites-consultations-page/favorites-consultations-page.component';
import { MeetingRecordingsPageComponent } from './consultations/meeting-recordings-page/meeting-recordings-page.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { NotesPageComponent } from './consultations/notes-page/notes-page.component';
import { MessengerPageComponent } from './consultations/messenger-page/messenger-page.component';
import { MeetingsPageComponent } from './consultations/meetings-page/meetings-page.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AchievementsPageComponent } from './consultations/achievements-page/achievements-page.component';
import { NetworkPageComponent } from './consultations/network-page/network-page.component';
import { ForumPageComponent } from './consultations/forum-page/forum-page.component';
import { IndividualLessonsPageComponent } from './consultations/individual-lessons-page/individual-lessons-page.component';
import { HandbookPageComponent } from './consultations/handbook-page/handbook-page.component';
import { MeetingLinkWindowComponent } from './consultations/components/meeting-link-window/meeting-link-window.component';
import { MatBadgeModule } from '@angular/material/badge';
import { DashboardPageComponent } from './consultations/dashboard-page/dashboard-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FullCalendarModule } from '@fullcalendar/angular';
import { RecentPeopleComponent } from './consultations/components/recent-people/recent-people.component';

@NgModule({
  declarations: [
    CoachesListPageComponent,
    ConsultationsListPageComponent,
    CreateCoachPageComponent,
    RegisterStudentPageComponent,
    LoginComponent,
    ConsultationsPageRootComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CoachesListComponent,
    ConsultationsListComponent,
    ConsultationCardComponent,
    ModalWindowComponent,
    ConsultationModalComponent,
    ConsultationTimeModalComponent,
    SelectedOptionsComponent,
    SelectedOptionsComponent,
    ConsultationsTableComponent,
    ConsultationsListComponent,
    CalendarPageComponent,
    FavoritesConsultationsPageComponent,
    MeetingRecordingsPageComponent,
    ConsultationsPageRootComponent,
    NotesPageComponent,
    MessengerPageComponent,
    MeetingsPageComponent,
    AchievementsPageComponent,
    NetworkPageComponent,
    ForumPageComponent,
    IndividualLessonsPageComponent,
    HandbookPageComponent,
    MeetingLinkWindowComponent,
    DashboardPageComponent,
    RecentPeopleComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    ConsultationsRoutingModule,
    ReactiveFormsModule,
    ButtonsModule.forRoot(),
    MatDialogModule,
    MatChipsModule,
    MatFormField,
    MatLabel,
    MatOptionModule,
    MatError,
    MatHint,
    MatSelectModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatButton,
    MatRadioModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatBadgeModule,
    MatCardModule,
    MatListModule,
    FullCalendarModule
  ],
  exports: [
    MatDialogModule,
    MatChipsModule,
    MatFormField,
    MatLabel,
    MatOptionModule,
    MatError,
    MatHint,
    MatSelectModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatButton,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatTooltipModule,
    FullCalendarModule
  ],
  providers: [
    
  ]
})
export class ConsultationsModule { }
