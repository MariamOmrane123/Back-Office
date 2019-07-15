import { GestionUtilisateursModule } from './gestionUtilisateurs.module';

describe('GestionUtilisateursModule', () => {
  let gestionUtilisateursModule: GestionUtilisateursModule;

  beforeEach(() => {
    gestionUtilisateursModule = new GestionUtilisateursModule();
  });

  it('should create an instance', () => {
    expect(gestionUtilisateursModule).toBeTruthy();
  });
});
