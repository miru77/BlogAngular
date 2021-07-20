import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter2'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg == 0) {return value}
    const resultPosts = [];

    for(const post of value){
        
         
      if (typeof(arg) === typeof(Number())) {
        if(post.userId.indexOf(arg) > -1){
         resultPosts.push(post);
   }
      } else
          if(post.title.toLowerCase().indexOf(arg.toLowerCase()) > -1){
                resultPosts.push(post);
          }
    }
    return resultPosts
  }

}


//if (arg ==/^[0-9]+$/) {
  //if(post.userId.indexOf(arg.parseInt()) > -1){
  // resultPosts.push(post);
//}
