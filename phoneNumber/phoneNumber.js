function phoneNumber(phone) {
    var viettel = [];
    var mobiphone = [];
    var vinaphone = [];
    for (var i = 0; i < phone.length; i++) {
        if (phone[i].substring(0, 3) == '090') {
            mobiphone.push(phone[i]);
        }
        else if (phone[i].substring(0, 3) == '091') {
            vinaphone.push(phone[i]);
        }
        else {
            viettel.push(phone[i]);
        }
    }
    console.log('Mobile:' + mobiphone);
    console.log('Viettel:' + viettel);
    console.log('Mobiphone:' + mobiphone);
}
phoneNumber(['0900990090', '091399853', '0940981442', '09109939898']);
