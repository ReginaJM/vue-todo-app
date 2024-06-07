// Här skapar vi classen Todo
// om man sedan skapar objekt med hjälp av new Todo
// så kommer den automatiskt att få egenskaperna id och done
// i konstruktorn bestämmer vi också att när man skapar ett objekt med classen Todo
// så måste man mata in vad egenskapen text ska va
// vi sätter också att de automatiska id ska ha dagens datum och done ska va false som default. 
export class Todo {
    id: number;
    done: boolean;

    constructor(public text: string){
        this.id = Date.now();
        this.done = false;
    }
}