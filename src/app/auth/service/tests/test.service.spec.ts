import { TestBed, inject } from '@angular/core/testing';
import { TestService } from './../test.service';

describe('TestService', () => {
  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestService]
    });
    service = TestBed.inject(TestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should convert into json string', () => {
    const obj = {name: 'shiva'};
    expect(JSON.stringify(obj)).toBe(service.toStr(obj));
  });

});
