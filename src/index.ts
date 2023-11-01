class Calculator {
  constructor(
    protected readonly total: number,
    protected readonly point: number
  ) {}
  /**
   * Default returning value will be poin percentage of total.
   * if replacePoint have a value then it will be percent value of total
   * @param replacePoint Percentage
   * @returns number
   */
  public toPercent(replacePoint?: number): number {
    return !replacePoint
      ? (100 * this.point) / this.total
      : (this.total * replacePoint) / 100;
  }
}

const cal = new Calculator(500, 500);
console.log(cal.toPercent());
