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
    let projectDetailPage: ProjectDetailPage;
    const mockParams: Partial<ActivatedRoute> = {}
    const mockPopoverController: Partial<PopoverController> = {}
    const mockHeaderService: Partial<AppHeaderService> = {}
    const mockDbService: Partial<DbService> = {}
    const mockLoader: Partial<LoaderService> = {}
    const mockRouter: Partial<Router> = {}
    const mockUtils: Partial<UtilsService> = {}
    const mockAlert: Partial<AlertController> = {}
    const mockShareService: Partial<SharingFeatureService> = {}
    const mockSyncServ: Partial<SyncService> = {}
    const mockToast: Partial<ToastService> = {}
    const mockTranslate: Partial<TranslateService> = {}
    const mockNetworkService: Partial<NetworkService> = {}
    const mockModal: Partial<ModalController> = {}
    const mockUnnatiService: Partial<UnnatiDataService> = {}
    const mockPlatform: Partial<Platform> = {}
    const mockRef: Partial<ChangeDetectorRef> = {}
    const mockNavigateService: Partial<NavigationService> = {}
    const mockAlertController: Partial<AlertController> = {}
    const mockContentService: Partial<ContentService> = {}

    beforeAll(() => {
        projectDetailPage = new ProjectDetailPage{
            mockParams as ActivatedRoute,
                mockPopoverController as PopoverController,
                mockHeaderService as AppHeaderService,
                mockDbService as DbService,
                mockLoader as LoaderService,
                mockRouter as Router,
                mockUtils as UtilsService,
                mockAlert as AlertController,
                mockShareService as SharingFeatureService,
                mockSyncServ as SyncService,
                mockToast as ToastService,
                mockTranslate as TranslateService,
                mockNetworkService as NetworkService,
                mockModal as ModalController,
                mockUnnatiService as UnnatiDataService,
                mockPlatform as Platform,
                mockRef as ChangeDetectorRef,
                mockNavigateService as NavigationService,
                mockAlertController as AlertController,
                mockContentService as ContentService
        }

    })
    beforeEach(() => {
        jest.clearAllMocks();
        jest.resetAllMocks();
    });

    it('Should be intiate Project listing compnent', () => {
        expect(ProjectDetailPage).toBeTruthy();
    })
    describe('ionViewWillEnter', () => {
        it('Should invoke initApp and getDateFilters', (done) => {
            // arrange 

            // act
            projectDetailPage.ionViewWillEnter();
            // assert
            setTimeout(() => {
                expect(projectDetailPage.initApp).toHaveBeenCalled();
                expect(projectDetailPage.getDateFilters).toHaveBeenCalled();
                done();
            }, 0);
        })
    })
    describe('initApp', () => {
        it('Should set header configuration', (done) => {
            mockHeaderService.getDefaultPageConfig = jest.fn(() => ({
                showHeader: true,
                showBurgerMenu: true,
                pageTitle: 'string',
                actionButtons: ['true'],
            }));
            mockHeaderService.updatePageConfig = jest.fn();
            mockPlatform.backButton = {
                subscribeWithPriority: jest.fn((_, cb) => {
                    setTimeout(() => {
                        cb();
                    }, 0);
                    return {
                        unsubscribe: jest.fn()
                    };
                }),
            } as any;
        })
    })
})