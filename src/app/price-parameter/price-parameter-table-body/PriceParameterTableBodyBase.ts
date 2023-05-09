export class PriceParameterTableBodyBase {
  protected dateKeyCache: { [key: string]: string } = {};
  getDateKey(date: string, hour: number = 1, minute: number = 0): string {
    const cacheKey = `${date}-${hour}-${minute}`;

    if (this.dateKeyCache.hasOwnProperty(cacheKey)) {
      return this.dateKeyCache[cacheKey];
    }

    const dateParts = date.split('/');

    const month = parseInt(dateParts[1], 10) - 1;
    const day = parseInt(dateParts[0], 10);
    const year = parseInt(dateParts[2], 10);
    const updatedDate = new Date(year, month, day, hour + 4, minute);

    const key = updatedDate.toISOString();

    this.dateKeyCache[cacheKey] = key;

    return key;
  }
}
