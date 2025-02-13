// Опис ДЗ: Припустимо, у нас є об'єкт, властивості якого — назва послуги та її вартість:
const services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",

        // Створити метод price(), який обчислює та повертає загальну вартість наданих послуг.
        price() {
            return Object.values(this).reduce((sum, value) => {
                if (typeof value === 'string' && value.includes('грн')) {
                    return sum + parseInt(value);
                }
                return sum;
            }, 0);
        },

        // Створити метод minPrice(), який повертає мінімальну ціну.
        minPrice() {
            return Math.min(...Object.values(this).map(value => {
                if (typeof value === 'string' && value.includes('грн')) {
                    return parseInt(value);
                }
                return Infinity; // Infinity завжди більше за будь-яке інше число, воно не буде враховане при обчисленні мінімальної ціни.
            }));
        },

        // Створити метод maxPrice(), який повертає максимальну ціну.
        maxPrice() {
            return Math.max(...Object.values(this).map(value => {
                if (typeof value === 'string' && value.includes('грн')) {
                    return parseInt(value);
                }
                return -Infinity;  //-Infinity завжди менше за будь-яке інше число, воно не буде враховане при обчисленні максимальної ціни.
            }));
        }
    };
    
    // Послуги можуть додаватися по ходу роботи:
    
    services['Розбити скло'] = "200 грн";
    services['Массаж'] = "475 грн";
    services['Анекдот'] = "20 грн";
    services['Маникюр'] = "299 грн";
    
    
    
    console.log(`загальна вартість наданих послуг: ${services.price()} грн`)
    console.log(`мінімальна ціна послуги: ${services.minPrice()} грн`)
    console.log(`максимальна ціна послуги: ${services.maxPrice()} грн`)