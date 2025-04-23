function solution(my_string, letter) {
    let new_string = '';
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] !== letter) {
            new_string += my_string[i];
        }
    }
    return new_string;
}