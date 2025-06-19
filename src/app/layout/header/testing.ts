export function LogSth(
    target:any, 
        propertyKey:string, 

    descriptor:PropertyDescriptor
):PropertyDescriptor{
      const originalMethod = descriptor.value;
console.log(originalMethod)
  descriptor.value = function (...args: any[]) {
   console.log(args);
   return args[0]*2
}

return descriptor
}