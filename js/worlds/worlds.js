/* --- Worlds --- */
const Worlds = [
    {
        // world name
        name: 'Детский Лес',
        // world colors
        colors: {
            // button hue
            hue: 225,
            // title color
            title: '#95ba6c',
            // courtain background
            background: ['#C1DE94', '#EBD293'],
            // blocks colors
            blocks: [
                '#AC555E', // dark brown
                '#788546', // dark green     
                '#D3F761', // light green
                '#68c3c0' // light blue
            ]
        },
        // stages
        stages: [
            {
                // level name
                name: 'start',
                // level description
                description: "Transport the blocks to the final position",
                // levels
                levels: [
                    {
                        // stage dimension
                        dimension: {
                            width: 7,
                            height: 3
                        },
                        // aviator
                        aviator: {
                            x: 5,
                            y: 1,
                            direction: 'right',
                            taken: undefined
                        },
                        // cells when stage starts
                        start: [{
                            // cell position
                            x: 4,
                            y: 1,
                            // cell blocks
                            // 0 => colors.blocks[0], 1 => colors.blocks[1]
                            blocks: [0, 1]
                        }],
                        // cells when stage finishes
                        end: [{
                            x: 1,
                            y: 1,
                            blocks: [1, 0]
                        }]
                    },
                    {
                        dimension: {
                            width: 7,
                            height: 3
                        },
                        aviator: {
                            x: 5,
                            y: 1,
                            direction: 'right',
                            taken: undefined
                        },
                        start: [{
                            x: 4,
                            y: 1,
                            blocks: [0, 1, 2, 3]
                        }],
                        end: [{
                            x: 1,
                            y: 1,
                            blocks: [3, 2, 1, 0]
                        }]
                    }
                ]
            },
            {
                name: 'Inverted',
                description: "Transport the blocks to the final position",
                levels: [{
                    dimension: {
                        width: 7,
                        height: 3
                    },
                    aviator: {
                        x: 5,
                        y: 1,
                        direction: 'right',
                        taken: undefined
                    },
                    start: [{
                        x: 4,
                        y: 1,
                        blocks: [0, 1]
                    }],
                    end: [{
                        x: 1,
                        y: 1,
                        blocks: [0, 1]
                    }]
                },
                {
                    dimension: {
                        width: 7,
                        height: 3
                    },
                    aviator: {
                        x: 5,
                        y: 1,
                        direction: 'right',
                        taken: undefined
                    },
                    start: [{
                        x: 4,
                        y: 1,
                        blocks: [0, 1, 2, 3]
                    }],
                    end: [{
                        x: 1,
                        y: 1,
                        blocks: [0, 1, 2, 3]
                    }]
                }
                ]
            },
            {
                name: 'Discards',
                description: "Transport the blocks to the final position",
                levels: [{
                    dimension: {
                        width: 7,
                        height: 3
                    },
                    aviator: {
                        x: 5,
                        y: 1,
                        direction: 'right',
                        taken: undefined
                    },
                    start: [{
                        x: 4,
                        y: 1,
                        blocks: [0, 0, 1]
                    }],
                    end: [{
                        x: 1,
                        y: 1,
                        blocks: [1]
                    }]
                },
                {
                    dimension: {
                        width: 7,
                        height: 3
                    },
                    aviator: {
                        x: 5,
                        y: 1,
                        direction: 'right',
                        taken: undefined
                    },
                    start: [{
                        x: 4,
                        y: 1,
                        blocks: [0, 1, 0, 0, 1]
                    }],
                    end: [{
                        x: 1,
                        y: 1,
                        blocks: [1, 1]
                    }]
                },
                {
                    dimension: {
                        width: 7,
                        height: 3
                    },
                    aviator: {
                        x: 5,
                        y: 1,
                        direction: 'right',
                        taken: undefined
                    },
                    start: [{
                        x: 4,
                        y: 1,
                        blocks: [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]
                    }],
                    end: [{
                        x: 1,
                        y: 1,
                        blocks: [1, 1, 1, 1]
                    }]
                }
                ]
            },
            {
                name: 'Turn around',
                description: "Transport the blocks to the final position",
                levels: [{
                    dimension: {
                        width: 7,
                        height: 7
                    },
                    aviator: {
                        x: 2,
                        y: 3,
                        direction: 'left'
                    },
                    start: [{
                        x: 3,
                        y: 3,
                        blocks: [0, 1, 2, 3, 0, 1, 2, 3]
                    }],
                    end: [{
                        x: 3,
                        y: 0,
                        blocks: [2, 2]
                    },
                    {
                        x: 3,
                        y: 6,
                        blocks: [0, 0]
                    },
                    {
                        x: 0,
                        y: 3,
                        blocks: [1, 1]
                    },
                    {
                        x: 6,
                        y: 3,
                        blocks: [3, 3]
                    }
                    ],
                    holes: [
                        [0, 0],
                        [0, 1],
                        [1, 0],
                        [6, 0],
                        [6, 1],
                        [5, 0],
                        [6, 6],
                        [6, 5],
                        [5, 6],
                        [0, 6],
                        [0, 5],
                        [1, 6]
                    ]
                }]
            }
        ]
    },
]