"use strict"
//процедурный код
const test1 = 16;
const test2 = 22;
const test3 = 23;

const score = (test1, test2, test3) =>{
    return console.log(test1 + test2 + test3);
};

score(test1,test2,test3);

//Объектно-ориентированное программирование
const totalScore = {
    test1:16,
    test2:22,
    test3:23,
    toGetSum(){
        return this.test1 + this.test2 + this.test3;
    },
};
console.log(totalScore.toGetSum());

//КЛАССЫ - структура, описывающая состояние и поведение сущности
//ЭКЗМЕПЛЯРЫ - объекты-представители сущности
// ИНТЕРФЕЙС - набор свойств и методов класса
//ПАРАДИГМЫ: инкапсуляция, абстракция, наследование,  
//ИНКАПСУЛЯЦИЯ - сокрытие деталей реализации от пользователей



const Project  = function(title, theme, clients){
    this.title = title;
    this.theme = theme;
    this.clients = clients;
}

const project = new Project("habit`s manager", "human", "all types");
console.log(project);

const project_fe = new Project("app", "to do list", "all types");
console.log(project_fe);