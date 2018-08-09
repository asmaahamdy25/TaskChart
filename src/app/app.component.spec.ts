import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
 describe('AppComponent', () => {
   let component: AppComponent;
   // let fixture :ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'TaskChart'`, async(() => {
 const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('TaskChart');
  }));
  it('Funation get the correct Chart Type ', async(() => {
   const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    const charttype = 'pie-chart';
    expect (component.onSelect('pie-chart')).toBe(charttype);

  }));
  it('Funation get the correct Color ', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
     component = fixture.componentInstance;
     const sechmeColor = component.color2;
     expect (component.selectColor('color2')).toBe(sechmeColor);

   }));
});
