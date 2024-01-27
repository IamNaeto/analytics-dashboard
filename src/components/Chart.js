import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const nums = [
    25000, 30000, 20000, 28000, 8000, 45000, 12000, 40000, 35000, 36000, 15000, 33000,
    50000,
];

export const optionsDesktop = {
    maintainAspectRatio: true,
    aspectRatio: 3,
    responsive: true,
    plugins: {
        tooltip: {
            callbacks: {
                label: (context) => `$${context.parsed.y}`,
            },
        },
    },
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                stepSize: 10000,
                callback: function (value) {
                    return value.toLocaleString();
                }
            }
        },
        x: {
            grid: {
                display: false, // Disable grid lines for x-axis
            },
        },
    },
    height: 96,
};

export const optionsMobile = {
    // maintainAspectRatio: true,
    aspectRatio: 0,
    tooltips: {
        callbacks: {
            label: (tooltipItem) => `$${nums[tooltipItem.index]}`,
        },
    },
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                stepSize: 10000,
                callback: function (value) {
                    return value.toLocaleString();
                }
            }
        },
        x: {
            ticks: {
                maxRotation: 95,
                minRotation: 0,
            },
            grid: {
                display: false,
            },
        },
    },
};
export const optionsTablet = {
    maintainAspectRatio: true,
    aspectRatio: 3,
    responsive: true,
    tooltips: {
        callbacks: {
            label: (tooltipItem) => `$${tooltipItem.yLabel}`,
        },
    },
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                stepSize: 10000,
                callback: function (value) {
                    return value.toLocaleString();
                }
            }
        },
        x: {
            grid: {
                display: false,
            },
        },
    },
};

const generateGradientColors = (context) => {
    const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(52, 202, 165, 1)"); // Start color at the bottom of the bar
    gradient.addColorStop(1, "rgba(255, 255, 255, 0.1)");
    return gradient;
};

const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

export const data = {
    labels,
    datasets: [
        {
            label: "sales ($)",
            data: nums,
            backgroundColor: "#34CAA540",
            hoverBackgroundColor: generateGradientColors, // Darker shade on hover
            borderRadius: {
                topLeft: 80,
                topRight: 80,
                bottomLeft: 0,
                bottomRight: 0,
            },
            borderSkipped: false,
        },
    ],
};

const variants = {
    open: { opacity: 1, y: "1%" },
    closed: { opacity: 0, y: "-10%" },
};

const Charts = ({ theme }) => {
    return (
        <div className={`h-96 w-auto xl:w-[750px] border rounded-2xl p-5 text-[16px] ${theme === 'dark' ? 'bg-[#202020]' : 'bg-white'} ${theme === 'dark' ? 'border-[#374151]' : 'border-[#EDF2F7]'}`}>
            <div className={`flex justify-between ${theme === 'dark' ? 'text-white' : 'border-black'}`}>
                <p className="font-semibold">Sales Trends</p>
                <div className="flex items-center gap-3">
                    <p>Sort by:</p>

                    <select className={`border rounded-2xl py-1 px-2 outline-none cursor-pointer ${theme === 'dark' ? 'border-[#374151]' : 'border-[#EDF2F7]'} ${theme === 'dark' ? 'bg-[#202020]' : 'bg-white'}`}>
                        <option>Weekly</option>
                        <option>Daily</option>
                        <option>Monthly</option>
                        <option>Yearly</option>
                    </select>
                </div>
            </div>

            <div className="hidden mmtablets:block h-[300px] sm:h-80">
                <Bar options={optionsDesktop} data={data} />
            </div>
            <div className="block mmtablets:hidden overflow-x-auto text-xxss h-[300px] sm:h-80">
                <Bar options={optionsMobile} data={data} />
            </div>
        </div>
    );
};

export default Charts;