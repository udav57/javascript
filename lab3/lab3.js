

/**
 * Возвращает дробную часть числа.
 *
 * @param {number} num Исходное число.
 * @returns {number} Дробная часть числа.
 * @example
 * // returns 0.23
 * getDecimal(1.23);
 * @example
 * // returns 0.77
 * getDecimal(-1.23);
 */
export function getDecimal(num) {
    const decimal = num - Math.floor(num);
    return parseFloat(decimal.toFixed(10)); 
}

/**
 * Нормализует URL, приводя его к виду https://АДРЕС.
 *
 * @param {string} url Исходный URL.
 * @returns {string} Нормализованный URL.
 */
export function normalizeUrl(url) {
    let normalized = url;
    if (normalized.startsWith('http://')) {
        normalized = normalized.substring(7);
    } else if (normalized.startsWith('https://')) {
        normalized = normalized.substring(8);
    }
    return `https://${normalized}`;
}

/**
 * Проверяет строку на содержание спам-слов 
 *
 * @param {string} str Входная строка для проверки.
 * @returns {boolean} true, если строка содержит спам, иначе false.
 */
export function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

/**
 * Усекает строку str до длины maxlength, добавляя в конце многоточие '…'.
 *
 * @param {string} str Исходная строка.
 * @param {number} maxlength Максимальная длина строки.
 * @returns {string} Усеченная или исходная строка.
 */
export function truncate(str, maxlength) {
    if (str.length <= maxlength) {
        return str;
    }
    return str.slice(0, maxlength - 1) + '…';
}

/**
 * Преобразует строку с дефисами в camelCase.
 *
 * @param {string} str Строка в формате kebab-case.
 * @returns {string} Строка в формате camelCase.
 */
export function camelize(str) {
    return str
        .split('-')
        .map((word, index) =>
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join('');
}

/**
 * Вспомогательная функция для вычисления n-го числа Фибоначчи.
 * @param {number} n Порядковый номер числа.
 * @returns {BigInt} n-е число Фибоначчи.
 */
function fib(n) {
    if (n < 0) return 0n; 
    if (n === 0) return 0n;
    let a = 0n;
    let b = 1n;
    for (let i = 2; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

/**
 * Генерирует массив чисел Фибоначчи до n-го элемента (не включая).
 *
 * @param {number} n Количество чисел Фибоначчи для генерации.
 * @returns {BigInt[]} Массив, содержащий n чисел Фибоначчи.
 */
export function fibs(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(fib(i));
    }
    return result;
}

/**
 * Возвращает новый массив, отсортированный по убыванию.
 * Исходный массив не изменяется.
 *
 * @param {number[]} arr Массив чисел.
 * @returns {number[]} Новый массив, отсортированный по убыванию.
 */
export function arrReverseSorted(arr) {
    return [...arr].sort((a, b) => b - a);
}

/**
 * Возвращает массив, содержащий только уникальные значения из исходного.
 *
 * @param {Array<any>} arr Массив с любыми значениями.
 * @returns {Array<any>} Массив с уникальными значениями.
 */
export function unique(arr) {
    return Array.from(new Set(arr));
}