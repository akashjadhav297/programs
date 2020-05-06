var pets = ['cat', 'dog', 'elephant'];
function processPets(pets)
{
    for(let pet = 0; pet < pets.length; pet++)
    {
        pets[pet] = pets[pet] + 's';
    }
    console.log(pets);
}
processPets(pets);