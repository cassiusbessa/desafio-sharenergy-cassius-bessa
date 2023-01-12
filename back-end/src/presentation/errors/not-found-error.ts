export class NotFound extends Error {
  constructor(entitie: string) {
    super(`${entitie} not found`);
    this.name = 'NotFound';
  }
}
