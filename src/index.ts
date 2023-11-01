class Calculator {
  constructor(
    protected readonly total: number,
    protected readonly point: number
  ) {}

  public toPercent(replacePoint?: number): number {
    return !replacePoint
      ? (100 * this.point) / this.total
      : (this.total * replacePoint) / 100;
  }
}

const cal = new Calculator(500, 500);
console.log(cal.toPercent());
