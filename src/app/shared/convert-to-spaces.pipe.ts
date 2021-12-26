import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "convertToSpaces",
})
export class ConvertToSpacesPipe implements PipeTransform {

    transform(value: string, character: string): string {
        let done = false;
        let result = value;

        while (done === false) {
            let characterIndex = result.indexOf(character);
            if (characterIndex === -1)
                done = true;
            else
                result = result.replace(character, ' ');
        }

        return result;
    }
}