/*
 * Copyright (c) 2020 the original author or authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {AppState} from '../../store';
import { selectTest } from 'src/app/store/test-model/selectors';
import { recognizeFace } from 'src/app/store/test-model/actions';
import { Model } from 'src/app/data/model';
import { selectCurrentModel } from 'src/app/store/model/selectors';

@Injectable()
export class DragNDropFacade {
    testData$: Observable<string>;
    model$: Observable<Model>;

  constructor(private store: Store<AppState>) {
      this.testData$ = this.store.select(selectTest);
      this.model$ = this.store.select(selectCurrentModel);
   }

  recognizeFace(model: Model, file: any) {
      return this.store.dispatch(recognizeFace({
          file,
          model
      }));
  }
}