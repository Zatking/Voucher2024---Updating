// File: ComboChart.js
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

// Đăng ký các thành phần cần thiết của Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const ComboChart = () => {
  // Dữ liệu cho biểu đồ
  const data = {
    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6'],
    datasets: [
      {
        type: 'bar', // Loại biểu đồ cột
        label: 'Số lượng voucher sử dụng',
        data: [30, 20, 50, 40, 60, 70],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        type: 'line', // Loại biểu đồ đường
        label: 'Doanh thu từ voucher (triệu)',
        data: [100, 200, 150, 300, 250, 350],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  // Tùy chọn cấu hình biểu đồ
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Vị trí của chú giải
      },
      title: {
        display: true,
        text: 'Số Lượng Sử Dụng Và Doanh Thu Từ Voucher Theo Tháng', // Tiêu đề biểu đồ
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <div>
    <h2>Biểu Đồ Cột Kết Hợp Biểu Đồ Đường</h2>
    <Bar data={data} options={options} /> {/* Sử dụng Bar cho biểu đồ kết hợp */}
  </div>;
};

export default ComboChart;
