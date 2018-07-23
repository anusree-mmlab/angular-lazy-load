import { ChildcategoryModule } from './childcategory.module';

describe('ChildcategoryModule', () => {
  let childcategoryModule: ChildcategoryModule;

  beforeEach(() => {
    childcategoryModule = new ChildcategoryModule();
  });

  it('should create an instance', () => {
    expect(childcategoryModule).toBeTruthy();
  });
});
