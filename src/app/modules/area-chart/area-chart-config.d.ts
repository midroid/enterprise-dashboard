export interface AreaChartConfig {
    settings: { fill: string, interpolation: string };
    dataset: Array<{ x: Date, y: number }>
}