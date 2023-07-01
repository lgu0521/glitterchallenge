
export default function usePhoneNumberFormatter(initialValue: string | number) {
    // 전화번호 문자열을 하이픈을 삽입한 새로운 문자열로 변환하는 로직
    const toStringValue = initialValue.toString();
    const onlyNumbers = toStringValue.replace(/[^0-9]/g, '');
    let formattedPhoneNumber = '';

    if (onlyNumbers.startsWith('011')) {
        if (onlyNumbers.length >= 4 && onlyNumbers.length <= 6) {
            formattedPhoneNumber = onlyNumbers.replace(/^([0-9]{3})([0-9]{1,3})/, '$1-$2');
        } else if (onlyNumbers.length >= 7) {
            formattedPhoneNumber = onlyNumbers.replace(/^([0-9]{3})([0-9]{3})([0-9]*)/, '$1-$2-$3');
        } else {
            formattedPhoneNumber = onlyNumbers;
        }
    } else {
        if (onlyNumbers.length >= 4 && onlyNumbers.length <= 7) {
            formattedPhoneNumber = onlyNumbers.replace(/^([0-9]{3})([0-9]{1,4})/, '$1-$2');
        } else if (onlyNumbers.length >= 8) {
            formattedPhoneNumber = onlyNumbers.replace(/^([0-9]{3})([0-9]{4})([0-9]*)/, '$1-$2-$3');
        } else {
            formattedPhoneNumber = onlyNumbers;
        }
    }

    return formattedPhoneNumber;
}
