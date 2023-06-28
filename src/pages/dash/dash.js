import { ResponsiveLine } from '@nivo/line'


const dashBoard = () => {
    return(
        <MyResponsiveLine element={data}/>
    );
}

export default dashBoard;

const MyResponsiveLine = ({ data }) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)


const data = [
    {
      "id": "japan",
      "color": "hsl(74, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 39
        },
        {
          "x": "helicopter",
          "y": 99
        },
        {
          "x": "boat",
          "y": 159
        },
        {
          "x": "train",
          "y": 263
        },
        {
          "x": "subway",
          "y": 258
        },
        {
          "x": "bus",
          "y": 235
        },
        {
          "x": "car",
          "y": 275
        },
        {
          "x": "moto",
          "y": 225
        },
        {
          "x": "bicycle",
          "y": 80
        },
        {
          "x": "horse",
          "y": 93
        },
        {
          "x": "skateboard",
          "y": 193
        },
        {
          "x": "others",
          "y": 222
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(253, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 170
        },
        {
          "x": "helicopter",
          "y": 213
        },
        {
          "x": "boat",
          "y": 11
        },
        {
          "x": "train",
          "y": 248
        },
        {
          "x": "subway",
          "y": 119
        },
        {
          "x": "bus",
          "y": 299
        },
        {
          "x": "car",
          "y": 287
        },
        {
          "x": "moto",
          "y": 266
        },
        {
          "x": "bicycle",
          "y": 9
        },
        {
          "x": "horse",
          "y": 51
        },
        {
          "x": "skateboard",
          "y": 262
        },
        {
          "x": "others",
          "y": 63
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(304, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 3
        },
        {
          "x": "helicopter",
          "y": 9
        },
        {
          "x": "boat",
          "y": 166
        },
        {
          "x": "train",
          "y": 56
        },
        {
          "x": "subway",
          "y": 48
        },
        {
          "x": "bus",
          "y": 202
        },
        {
          "x": "car",
          "y": 162
        },
        {
          "x": "moto",
          "y": 93
        },
        {
          "x": "bicycle",
          "y": 281
        },
        {
          "x": "horse",
          "y": 130
        },
        {
          "x": "skateboard",
          "y": 186
        },
        {
          "x": "others",
          "y": 149
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(4, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 234
        },
        {
          "x": "helicopter",
          "y": 234
        },
        {
          "x": "boat",
          "y": 123
        },
        {
          "x": "train",
          "y": 110
        },
        {
          "x": "subway",
          "y": 188
        },
        {
          "x": "bus",
          "y": 250
        },
        {
          "x": "car",
          "y": 50
        },
        {
          "x": "moto",
          "y": 41
        },
        {
          "x": "bicycle",
          "y": 211
        },
        {
          "x": "horse",
          "y": 141
        },
        {
          "x": "skateboard",
          "y": 205
        },
        {
          "x": "others",
          "y": 278
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(66, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 107
        },
        {
          "x": "helicopter",
          "y": 5
        },
        {
          "x": "boat",
          "y": 221
        },
        {
          "x": "train",
          "y": 33
        },
        {
          "x": "subway",
          "y": 232
        },
        {
          "x": "bus",
          "y": 84
        },
        {
          "x": "car",
          "y": 232
        },
        {
          "x": "moto",
          "y": 15
        },
        {
          "x": "bicycle",
          "y": 88
        },
        {
          "x": "horse",
          "y": 108
        },
        {
          "x": "skateboard",
          "y": 215
        },
        {
          "x": "others",
          "y": 170
        }
      ]
    }
  ]

