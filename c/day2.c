#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

int main()

{
printf("\n=== Even*Odd ===\n");

int userInput;
printf("Input a positive integer: ");
scanf("%d, &userInput");

if(userInput < 0) 
{printf("warning: %d is negative(-ve).\n", userInput);
return EXIT_FAILURE;
}
bool isEven = (userInput % 2 == 0)? true : false;

if(isEven){printf("userInput is even\n",userInput);}

else{
    printf("userInput is odd\n", userInput);
}
return EXIT_SUCCESS;
}