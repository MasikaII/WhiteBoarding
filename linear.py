#!/usr/bin/python3
"""N -> lenth of the array
X -> the int value we are looking for
"""
def search(arr, N, x):
    
    for i in range(0, N):
        if (arr[i] == x):
            return i
    return -1

#Driver code
if __name__ == "__main__":
    arr = [2, 3, 4, 10, 40, 50, 60, 70, 80]
    x = 80
    N = len(arr)

    #functional call
    result = search(arr, N, x)
    if(result == -1):
        print("Element is not present in array")
    else:
        print("Element present at index", result)
