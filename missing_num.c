#include <stdio.h>
/**
 * in sorted array
 * we have a missing an array
 * we find the mssing array
 */

int findmissing(int arr[], int value)
{
	int ans;
	int temp[value + 1];

	for (int i = 0; i<= value; i++)
	{
		temp[i] = 0;
	}

	for (int i = 0; i < value; i++)
	{
		temp[arr[i] - 1] = 1;
	}

	for (int i = 0; i <= value; i++)
	{
		if (temp[i] == 0)
			ans =i + 1;
	}
	printf("The missing array is %d", ans);
}

int main()
{
    int arr[] = { 1, 3, 7, 5, 6, 2 };
    int value = sizeof(arr) / sizeof(arr[0]);
    findmissing(arr, value);
}
