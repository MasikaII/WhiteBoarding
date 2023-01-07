#!/usr/bin/python3

def binarySearch(arr, left, right, value):
    if right >= left:

        mid = left + (right - left) // 2

        if arr[mid] == value:
            return mid

        elif arr[mid] > value:
            return binarySearch(arr, left, mid-1, value)

        #if the element is smaller than the mid then it
        #can on;ly be present in the left subarray
        else:
            return binarySearch(arr, mid + 1, right, value)

        #Else the element can only be present
        #in  the right subarray
    else:
        #if the elemnt is not present in the array
        return -1
#Driver code
arr = [2,3,4,10,40]
value = 40

result = binarySearch(arr, 0, len(arr)-1, value)

if result != 1:
    print("Element is pressent at index % d" % result)
else:
    print("the element is not in array")
