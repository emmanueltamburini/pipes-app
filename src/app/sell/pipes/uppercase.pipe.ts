import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'ownUpperCase'
})
export class UpperCasePipe implements PipeTransform {
  transform(value: string, isUpperCase: boolean = true): string {
    return isUpperCase ? value.toUpperCase() : value.toLowerCase();
  }
}
