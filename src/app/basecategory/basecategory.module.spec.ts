import { BasecategoryModule } from './basecategory.module';

describe('BasecategoryModule', () => {
  let basecategoryModule: BasecategoryModule;

  beforeEach(() => {
    basecategoryModule = new BasecategoryModule();
  });

  it('should create an instance', () => {
    expect(basecategoryModule).toBeTruthy();
  });
});
