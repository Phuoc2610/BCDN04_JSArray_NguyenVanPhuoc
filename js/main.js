/**
 * 
 */
var numArray = [];
var soNguyenArray = [];

function addElement() {
    var num = Number(document.getElementById("inputNumber").value);

    numArray.push(num);
    document.getElementById("txtAdd").innerHTML = numArray;
}
/**
 * Tổng các số dương trong mảng
 */
function tinhTong() {
    var sum = 0;
    for (var i = 0; i < numArray.length; i++) {
        if(numArray[i]>0){
            sum += numArray[i];
        }
    }
    document.getElementById("txtTinhTong").innerHTML = sum;
}
/**
 * Đếm có bao nhiêu số dương trong mảng
 */
function demSoDuong() {
    var count = 0;
    for (var i = 0; i < numArray.length; i++) {
        if(numArray[i]>0){
            count++;
        }
    }
    document.getElementById("txtDemSoDuong").innerHTML = count;
}
/**
 * Tìm số nhỏ nhất trong mảng
 */
function timMin() {
    var viTri = 0;
    var min = numArray[viTri];
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] < min) {
            viTri = i;
            min = numArray[viTri];
        }
        document.getElementById("txtTimMin").innerHTML = min;
    }
}
/**
 * Tìm số dương nhỏ nhất trong mảng
 */
function timMinDuong() {
    var soDuongArray = [];
    for(var i=0;i<numArray.length;i++){
        if(numArray[i]>0){
            // soDuong = numArray[i];
            soDuongArray.push(numArray[i]);
        }
    }
    var viTri = 0;
    var minDuong = soDuongArray[viTri];
    for(var i=0;i<soDuongArray.length;i++){
        if(soDuongArray[i]<minDuong){
            viTri = i;
            minDuong=soDuongArray[viTri];
        }
    }
    document.getElementById("txtTimMinDuong").innerHTML = minDuong;
}
/**
 * Tìm số chẵn cuối cùng trong mảng
 */
function timSoChan() {
    var soChan = -1;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 == 0 && numArray[i]>0) {
            soChan = numArray[i];
        }
        document.getElementById("txtTimSoChan").innerHTML = soChan;
    }
}
/**
 * Đổi chỗ 2 giá trị trong mảng
 */
 function doiCho() {
    var viTri1 = parseInt(document.getElementById("inputViTri1").value);
    var viTri2 = parseInt(document.getElementById("inputViTri2").value);
    var temp = numArray[viTri1];
    numArray[viTri1] = numArray[viTri2];
    numArray[viTri2] = temp;
    document.getElementById("txtDoiCho").innerHTML = numArray;
}
/**
 * Sắp xếp mảng theo thứ tự tăng dần
 */
function sapXepTang() {
    for (var i = 0; i < numArray.length; i++) {
        for (var j = 0; j < numArray.length - 1; j++) {
            if (numArray[j] > numArray[j + 1]) {
                var temp = numArray[j];
                numArray[j] = numArray[j + 1];
                numArray[j + 1] = temp;
            }
        }
    }
    document.getElementById("txtSapXepTang").innerHTML = numArray;
}
/**
 * Tìm số nguyên tố đầu tiên trong mảng
 */
 function timSNT() {
    var snt = "";
    var ketQua = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] < 2) {
            snt = false;
        } else if (numArray[i] == 2) {
            snt = true;
            break;
        } else if (numArray[i] % 2 == 0) {
            snt = false;
        } else {
            for (var j = 3; j < Math.sqrt(numArray[i]); j += 2) {
                if (numArray[i] % j == 0) {
                    snt = false;
                }
            }
            snt = true;
            break;
        }
    }
    if (snt) {
        ketQua = numArray[i];
    } else {
        ketQua = -1;
    }
    document.getElementById("txtTimSNT").innerHTML = ketQua;
}
/**
 * Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên
 */
function addElement1() {
    var soNguyen = Number(document.getElementById("inputSoNguyen").value);
    soNguyen = Number.isInteger(soNguyen);
    soNguyenArray.push(soNguyen);
    return soNguyenArray;
}
function demSoNguyen() {
    var count = 0;
    for (var i = 0; i < soNguyenArray.length; i++) {
        if (soNguyenArray[i]) {
            count++;
        }
        document.getElementById("txtSoNguyen").innerHTML = "Số Nguyên: " + count;
    }
}
/**
 * So sánh số lượng số dương và số âm
 */
function soSanh() {
    var countDuong = 0;
    var countAm = 0;
    var ketQua = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            countDuong++;
        } else {
            countAm++;
        }
    }
    if (countDuong > countAm) {
        ketQua = "Số Dương > Số âm";
    } else if (countAm > countDuong) {
        ketQua = "Số âm > Số dương";
    } else {
        ketQua = "Số Dương = Số âm";
    }
    document.getElementById("txtSoSanh").innerHTML = ketQua;
}

document.getElementById("btnAdd").onclick = addElement;
document.getElementById("btnTinhTong").onclick = tinhTong;
document.getElementById("btnDemSoDuong").onclick = demSoDuong;
document.getElementById("btnTimMin").onclick = timMin;
document.getElementById("btnTimMinDuong").onclick = timMinDuong;
document.getElementById("btnTimSoChan").onclick = timSoChan;
document.getElementById("btnSapXepTang").onclick = sapXepTang;
document.getElementById("btnTimSNT").onclick = timSNT;
document.getElementById("btnSoNguyen").onclick = demSoNguyen;
document.getElementById("btnAddSoNguyen").onclick = addElement1;
document.getElementById("btnSoSanh").onclick = soSanh;
document.getElementById("btnDoiCho").onclick = doiCho;

