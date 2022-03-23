import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "spongebobCase"
})
export class SpongeBobCasePipe implements PipeTransform {
    transform(value: string): string {
        const valueAsStringArray = value.split('');
        const newArray = 
            valueAsStringArray.map((character, index) => {
                return index % 2 === 0
                    ? character.toLowerCase()
                    : character.toUpperCase();
            })

        return newArray.join('');
    }

}