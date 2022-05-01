import Chart from 'react-apexcharts'

type Props = {
    id: string,
    xaxis: Array<number>,
    series: ApexAxisChartSeries,
    title: string,
};

export default function ChartDrawer(props: Props): JSX.Element {
    // console.log(props.xaxis)
    let options = {
        chart: {
            id: props.id,
            zoom: { enabled: false }
        },
        xaxis: {
            categories: props.xaxis,
            decimalsInFloat: 2,
            labels: { rotate: -90, }
        },
        title: {
            text: props.title
        }
    };

    return (
        <Chart options={options} series={props.series} type="line" width={400} height={320} />
    )
}