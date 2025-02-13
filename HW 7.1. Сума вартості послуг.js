// Опис ДЗ: Припустимо, у нас є об'єкт, властивості якого — назва послуги та її вартість:
var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
    };
    
    // Послуги можуть додаватися по ходу роботи:
    
    services['Розбити скло'] = "200 грн";
    services['Массаж'] = "475 грн";
    services['Анекдот'] = "20 грн";
    services['Маникюр'] = "299 грн";
    
    // Створити метод price(), який обчислює та повертає загальну вартість наданих послуг.
    
    function price(services) {
        return Object.values(services).reduce((sum, value) => sum + parseInt(value), 0);
    }
    
    // Створити метод minPrice(), який повертає мінімальну ціну.
    
    function minPrice(services) {
        return Math.min(...Object.values(services).map(value => parseInt(value)));
    }
    
    // Створити метод maxPrice(), який повертає максимальну ціну.
    
    function maxPrice(services) {
        return Math.max(...Object.values(services).map(value => parseInt(value)));
    }
    
    console.log(`загальна вартість наданих послуг: ${price(services)} грн`)
    console.log(`мінімальна ціна послуги: ${minPrice(services)} грн`)
    console.log(`максимальна ціна послуги: ${maxPrice(services)} грн`)