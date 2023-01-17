#include <stdio.h>
//defining the function to perform the linear search
int linearSearch(int arr[], int size, int key)
{
	if (size == 0)
	{
		return -1;
	}

	if (arr[size - 1] == key)
	{
		//if equal, return the index.
		return size - 1;
	} else {
		//if not equal, call functionagain with the size reduced by 1
		return linearSearch(arr, size - 1, key);
	}
}

int main()
{
	int arr[] = {5, 15, 6, 9, 4, 3, 2};
	int key = 3;
	int index = linearSearch(arr, sizeof(arr) / sizeof(int), key);
	if (index == -1)
	{
		printf("key not found in the array.\n");
	} else {
		printf("The element %d is found at %d index of the given array \n", key, index);
	}
	return 0;
}
