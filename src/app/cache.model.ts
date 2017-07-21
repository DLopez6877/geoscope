export class Cache {
  constructor (
    public creator: string,
    public address: string,
    public lat: number,
    public lon: number,
    public hint: string
  ) {}
}
