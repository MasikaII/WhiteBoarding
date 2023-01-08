#include <stdio.h>
#include <math.h>
int jump_search(int *array, size_t size, int value)
{
	size_t jump;
	size_t temp = 0;

	if (array == NULL)
		return (-1);

	jump = 0;
	while (jump < size)
	{
		temp = jump;
		jump = jump + sqrt(size);
		if (array[jump] >= value)
		{
			printf("Value checked array[%ld] = [%d]\n", temp, array[temp]);
			printf("Value found between indexes [%ld] and [%ld]\n", temp, jump);
			break;
		}
		printf("Value checked array[%ld] = [%d]\n", temp, array[temp]);
	}
	if (array[min(jump, size)] < value)
		printf("Value found between indexes [%ld] and [%ld]\n", temp, jump);
	while (temp < min(size, jump))
	{
		printf("Value checked array[%ld] = [%d]\n", temp, array[temp]);
		temp = temp + 1;
		if (array[temp] == value)
		{
			printf("Value checked array[%ld] = [%d]\n", temp, array[temp]);
			return (temp);
		}
	}
	return (-1);
}

int main()
{
    int array[] = { 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610};
    int value = 55;
    int size = sizeof(array)/sizeof(array[0]);
    int index = jump_search(array, size, value);
    if(index >= 0)
    printf("Number is at %d index",index);
    else
    printf("Number is not exist in the array");
    return 0;
}
