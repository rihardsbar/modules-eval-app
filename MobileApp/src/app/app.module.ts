import { NgModule, Inject} from '@angular/core';

import { IonicApp, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { SchedulePage } from '../pages/schedule/schedule';
import { HomePage } from '../pages/home/home';
import { RatingComponent } from '../pages/leaveComment/rating';
import { updateRating } from '../pages/leaveComment/updateRating';
import { feedbackPage } from '../pages/feedback/feedback';
import { leaveCommentPage} from '../pages/leaveComment/leaveComment';
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SignupPage } from '../pages/signup/signup';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SupportPage } from '../pages/support/support';
import { SearchModulePage } from '../pages/search-module/search-module';
import { ModuleDetailPage } from '../pages/module-detail/module-detail';
import { ModuleNotesPage } from '../pages/module-notes/module-notes';
import { ModuleRecommedationPage } from '../pages/module-recommedation/module-recommedation';
import { RecCourseDetailPage } from '../pages/rec-course-detail/rec-course-detail';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MicroServices } from '../providers/microservices';
import {Store} from "../providers/store";
import {reducer, initState} from "../providers/model";

@NgModule({
  declarations: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    leaveCommentPage,
    RatingComponent,
    updateRating,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage,
    SupportPage,
    HomePage,
    feedbackPage,
    SearchModulePage,
    ModuleDetailPage,
    ModuleNotesPage,
    ModuleRecommedationPage,
    RecCourseDetailPage
  ],
  imports: [
    IonicModule.forRoot(ConferenceApp),
	IonicStorageModule.forRoot()
    ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage,
    SupportPage,
    HomePage,
    leaveCommentPage,
    RatingComponent,
    updateRating,
    feedbackPage,
    SearchModulePage,
    ModuleDetailPage,
    ModuleNotesPage,
    ModuleRecommedationPage,
    RecCourseDetailPage
  ],
  providers: [
    ConferenceData,
    UserData,
    InAppBrowser,
    SplashScreen,
    MicroServices,
    {provide: Store, useFactory: () => new Store(reducer(), initState)}
  ]
})
export class AppModule {}
