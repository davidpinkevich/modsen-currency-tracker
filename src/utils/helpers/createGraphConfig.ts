import { ROUNDING_GRAPH } from "@src/constants";

import { type TypeItemTimeseries } from "@src/types";

const createGraphConfig = (
  dataTimeseries: TypeItemTimeseries[] | undefined
) => {
  const data = {
    datasets: [
      {
        data: dataTimeseries?.map((item) => ({
          x: item.time_open,
          o: item.rate_open.toFixed(ROUNDING_GRAPH),
          h: item.rate_high.toFixed(ROUNDING_GRAPH),
          l: item.rate_low.toFixed(ROUNDING_GRAPH),
          c: item.rate_close.toFixed(ROUNDING_GRAPH),
          s: [item.rate_open, item.rate_close]
        })),
        backgroundColor: (ctx: any) => {
          return ctx.raw.c >= ctx.raw.o ? "rgb(22,199,130)" : "rgb(234,57,67)";
        }
      }
    ]
  };

  const candleStick = {
    id: "candleStick",
    beforeDatasetDraw(chart: any) {
      const {
        ctx,
        data,
        scales: { y }
      } = chart;

      ctx.save();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgb(217, 217, 217)";

      data.datasets[0].data.forEach((_: any, index: number) => {
        ctx.beginPath();
        ctx.moveTo(
          chart.getDatasetMeta(0).data[index].x,
          chart.getDatasetMeta(0).data[index].y
        );
        ctx.lineTo(
          chart.getDatasetMeta(0).data[index].x,
          y.getPixelForValue(data.datasets[0].data[index].h)
        );
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(
          chart.getDatasetMeta(0).data[index].x,
          chart.getDatasetMeta(0).data[index].y
        );
        ctx.lineTo(
          chart.getDatasetMeta(0).data[index].x,
          y.getPixelForValue(data.datasets[0].data[index].l)
        );
        ctx.stroke();
      });
    }
  };

  const options = {
    parsing: {
      xAxisKey: "x",
      yAxisKey: "s"
    },
    adapters: {
      date: {
        locale: "enUS"
      }
    },
    scales: {
      x: {
        type: "timeseries" as const,
        time: {
          unit: "day" as const,
          tooltipFormat: "d MMM, yyyy"
        }
      },
      y: {
        beginAtZero: false,
        grace: "15%"
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          beforeBody: (ctx: any) => {
            const body = [
              `Open: ${ctx[0].raw.o}`,
              `High: ${ctx[0].raw.h}`,
              `Low: ${ctx[0].raw.l}`,
              `CLose: ${ctx[0].raw.c}`
            ];
            return body;
          },
          label: ({ raw: { o, c } }: any) => {
            return `Δ: ${(o - c).toFixed(ROUNDING_GRAPH)}`;
          }
        }
      }
    }
  };

  const plugins = [candleStick];

  return { data, options, plugins };
};

export { createGraphConfig };
