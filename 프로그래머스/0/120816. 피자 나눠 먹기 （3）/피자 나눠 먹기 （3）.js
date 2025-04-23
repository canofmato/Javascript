function solution(slice, n) {
    for(let pizza = 1; ; pizza++) {
        if ( n <= pizza * slice) {
            return pizza;
        }
    }
}