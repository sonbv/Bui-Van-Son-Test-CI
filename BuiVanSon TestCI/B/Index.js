const bttnquaySo = document.getElementById('quaySo');
const inputNo = document.getElementById('inputNumber');
        
const x = soDung();
let count = 0;

function soDung() {
    soDung = Number(Math.floor(Math.random() * 10) + 1);
    return soDung;
    }
        
function kiemtrasonhap() {
    let number = inputNo.value;
    while (true) {
        if (number === "") {
            alert('Hãy nhập vào một con số');
            break;
        } else if (isNaN(number)) {
            alert('Hãy nhập vào một con số');
            break;
        } else if (number < 1 || number > 10) {
            alert('Nhập lại số khác trong khoảng từ 1 đến 10');
            break;
        } else {
            count++;
            return number;
        }
        }
        }

bttnquaySo.addEventListener('click', () => {
    let number = kiemtrasonhap();
    if (number == soDung) {
        alert('Bạn đã dự đoán đúng');
        count = 0;
    }
    if (!isNaN(number) && (number >= 1 && number <= 10)) {
        alert(`Bạn đã đoán sai! Bạn còn ${3 - count} lần đoán`);
    }
    if (count == 3) {
        alert(`Bạn đã đoán sai! Số đúng là ${soDung}`);
    }
    });