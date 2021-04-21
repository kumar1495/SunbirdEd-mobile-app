import { ChangeDetectorRef, Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController, AlertController, Platform, ModalController } from '@ionic/angular';
import * as _ from 'underscore';
import { TranslateService } from '@ngx-translate/core';
import { statuses } from '@app/app/manage-learn/core/constants/statuses.constant';
import { UtilsService } from '@app/app/manage-learn/core/services/utils.service';
import * as moment from "moment";
import { AppHeaderService } from '@app/services';
import { NetworkService } from '../../core/services/network.service';
import { menuConstants } from '../../core/constants/menuConstants';
import { PopoverComponent } from '../../shared/components/popover/popover.component';
import { Subscription } from 'rxjs';
import { DbService } from '../../core/services/db.service';
import { LoaderService, ToastService } from '../../core';
import { SyncService } from '../../core/services/sync.service';
import { UnnatiDataService } from '../../core/services/unnati-data.service';
import { urlConstants } from '../../core/constants/urlConstants';
import { RouterLinks } from '@app/app/app.constant';
import { HttpClient } from '@angular/common/http';
import { KendraApiService } from '../../core/services/kendra-api.service';
import { Location } from '@angular/common';
import { ContentDetailRequest, Content, ContentService } from 'sunbird-sdk';
import { NavigationService } from '@app/services/navigation-handler.service';
import { CreateTaskFormComponent } from '../../shared';
import { SharingFeatureService } from '../../core/services/sharing-feature.service';
import { ProjectDetailPage } from './project-detail.page';

describe('ProjectDetailPage', () => {

    beforeAll(() => {
    public params: ActivatedRoute,
        public popoverController: PopoverController,
        private headerService: AppHeaderService,
        private db: DbService,
        private loader: LoaderService,
        private router: Router,
        private utils: UtilsService,
        private alert: AlertController,
        private share: SharingFeatureService,
        private syncServ: SyncService,
        private toast: ToastService,
        private translate: TranslateService,
        private networkService: NetworkService,
        private modal: ModalController,
        private unnatiService: UnnatiDataService,
        private platform: Platform,
        private ref: ChangeDetectorRef,
        private navigateService: NavigationService,
        private alertController: AlertController,
        contentService: ContentService
})

})