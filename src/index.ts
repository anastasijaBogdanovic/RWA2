import { resolve } from "../webpack.config";

interface Smoothies {
    name: string;
    ingredients: string;
  }

  const smoothie = [
    {name: 'Green Goddess Smoothie',
    ingredients: '½ cup unsweetened almond milk, ½ cup honey yogurt, 2 bananas and 3 cups of spinach'},

    {name: 'Tropical Smoothie Bowl',
    ingredients: '1 banana (sliced and frozen), 1 cup frozen mango chunks, 1 cup frozen pineapple chunks and 1 cup almond milk'},

    {name: 'Pomegranate-Berry Smoothie',
    ingredients: '½ cup chilled pomegranate juice, ½ cup vanilla low-fat yogurt and 1 cup frozen mixed berries'},

    {name: 'Mango Madness Smoothie',
    ingredients: '1 cup orange juice, ½ cup coconut yogurt, 1 ½ cup frozen mango and 1 medium carrot'},

    {name: 'Wake Me Up Coffee Smoothie',
    ingredients: '1 banana previously sliced and frozen, ½ cup strong brewed coffee 120 mL, ½ cup milk 120 mL (Optional: spoonful of nut butter)'}
];

function GetSmoothies(){
    setTimeout(() => {
        let output = '';
        smoothie.forEach((smoothie, index) => {
            output += `<li>${smoothie.name} <br/> <i> ingredients: ${smoothie.ingredients} </i> </li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function CreateSmoothies(p:Smoothies){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            smoothie.push(p);

            if(p != null){
                resolve(smoothie);
            }
            else{
                reject('Doslo je do greske!');
            }
        }, 2000);
    });
}

async function Make(){
    await CreateSmoothies({ name: 'Chocolate Dream Smoothie Bowl', ingredients: 'frozen bananas, cocao powder and milk of your choice'});
    GetSmoothies();
}

Make();