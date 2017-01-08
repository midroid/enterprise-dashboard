/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { D3showcaseComponent } from './d3showcase.component';

describe('D3showcaseComponent', () => {
  let component: D3showcaseComponent;
  let fixture: ComponentFixture<D3showcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3showcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3showcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
