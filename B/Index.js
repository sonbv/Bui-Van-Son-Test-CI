const QuaySo = document.getElementById('QuaySo');
const HienThi = document.getElementById('HienThi');
const box = document.getElementById('box');

QuaySo.addEventListener('click', () => {
    if (box.value == '' || box.value <= 0) {
        alert('Không để trống hoặc nhập số trong giới hạn từ 1 đến 10');
    } else { if (box.value !== 8 {
        alert('Bạn đã dự đoán sai. Hãy nhập lại');
    } else {
        HienThi.innerHTML = 'Bạn đã dự đoán đúng';}
    }
}